import { Hono } from "hono";

import z from "zod";
import { zValidator } from "@hono/zod-validator";
import { userCreateSchema } from "@/drizzle/schemas/users";
import {
  createUser,
  deleteUser,
  getSession,
  getUser,
  getUsers,
  updateUser,
} from "@/drizzle/services/users";
import { HTTPException } from "hono/http-exception";
import { sanitizeOutput } from "../utils";

const userSchema = userCreateSchema
  .pick({
    storeId: true,
    name: true,
    phone: true,
    email: true,
    role: true,
  })
  .extend({
    address: z
      .object({
        address: z.string(),
        city: z.string(),
        state: z.string(),
        pincode: z.string(),
        gstin: z.string(),
      })
      .optional(),
  });

const app = new Hono()
  /********************************************************************* */
  /**                             CREATE USER                            */
  /********************************************************************* */
  .post("/", zValidator("json", userSchema), async (c) => {
    const { role, storeId } = c.get("jwtPayload");

    const { address, ...rest } = c.req.valid("json");

    const user = await getUser(undefined, {
      email: rest.email,
      phone: rest.phone,
    });

    if (user) {
      let message = "Email already registered";
      if (user.phone === rest.phone) {
        message = "Phone already registered";
      }

      throw new HTTPException(400, { message });
    }
    if (role !== "admin" && rest.role === "admin")
      throw new HTTPException(400, { message: "Could not create admin user" });

    const result = await createUser({
      ...rest,
      email: rest.email?.toLowerCase(),
      address: address?.address ? address : undefined,
      storeId,
    });

    const sanitized = sanitizeOutput(result, ["password", "otp"]);
    return c.json({
      success: true,
      data: sanitized,
    });
  })
  /********************************************************************* */
  /**                              GET USERS                             */
  /********************************************************************* */
  .get("/", async (c) => {
    const query = c.req.query();
    const { roles } = c.req.queries();

    const { data, meta } = await getUsers({
      ...query,
      roles,
    });

    const sanitized = data.map((d) => sanitizeOutput(d, ["password", "otp"]));

    return c.json({
      success: true,
      data: sanitized,
      meta,
    });
  })
  /********************************************************************* */
  /**                               GET ME                               */
  /********************************************************************* */
  .get("/me", async (c) => {
    const { id, storeId, role } = c.get("jwtPayload");

    let session = await getSession(id);

    if (storeId !== session.storeId) {
      await updateUser(id, { storeId });
      session = await getSession(id);
    }
    const { store, ...rest } = session;
    const sanitizedUser = sanitizeOutput(rest, ["password", "otp"]);
    const sanitizedStore = sanitizeOutput(store!, ["domain", "token"]);

    return c.json({
      data: { ...sanitizedUser, store: sanitizedStore },
      success: true,
    });
  })

  /********************************************************************* */
  /**                              GET USER                              */
  /********************************************************************* */
  .get("/:id", async (c) => {
    const { id } = c.req.param();

    const user = await getUser(id);
    if (!user) throw new HTTPException(404, { message: "Not Found" });

    const sanitized = sanitizeOutput(user, ["password", "otp"]);

    return c.json({
      success: true,
      data: sanitized,
    });
  })
  /********************************************************************* */
  /**                            UPDATE USER                             */
  /********************************************************************* */
  .put("/:id", zValidator("json", userSchema), async (c) => {
    const { id } = c.req.param();
    const { role } = c.get("jwtPayload");
    const { address, ...rest } = c.req.valid("json");
    const user = await getUser(id);

    if (!user) throw new HTTPException(404, { message: "User not Found" });

    const isForbidden =
      rest.role !== "customer" && rest.role !== "supplier" && role !== "admin";

    if (isForbidden)
      throw new HTTPException(403, { message: "Permisson denied" });

    const result = await updateUser(id, {
      ...rest,
      address: address?.address ? address : undefined,
    });

    const sanitized = sanitizeOutput(result, ["password", "otp"]);

    return c.json({
      success: true,
      data: sanitized,
    });
  })
  /********************************************************************* */
  /**                            DELETE USER                             */
  /********************************************************************* */
  .delete("/:id", async (c) => {
    const { id } = c.req.param();
    const { role, id: userId } = c.get("jwtPayload");

    const user = await getUser(id);

    if (!user) throw new HTTPException(404, { message: "User not Found" });

    if (role !== "admin")
      throw new HTTPException(403, { message: "Permission denied" });

    const result = await deleteUser(id);

    const sanitized = sanitizeOutput(result, ["password", "otp"]);

    return c.json({
      success: true,
      data: sanitized,
    });
  });
export default app;
