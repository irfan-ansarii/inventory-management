import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";

import {
  serial,
  text,
  timestamp,
  pgTable,
  integer,
  decimal,
  json,
} from "drizzle-orm/pg-core";
import { stores } from "./stores";
import { users } from "./users";

export const collabs = pgTable("collab", {
  id: serial("id").primaryKey(),
  storeId: integer("store_id").references(() => stores.id, {
    onDelete: "cascade",
  }),
  influencerId: integer("influencer_id").references(() => users.id, {
    onDelete: "set null",
  }),
  type: text("type").notNull(),
  contentType: json("contentType").notNull(),
  amount: decimal("amount").notNull(),
  notes: text("notes"),
  createdBy: integer("created_by").references(() => users.id, {
    onDelete: "set null",
  }),
  updatedBy: integer("updated_by").references(() => users.id, {
    onDelete: "set null",
  }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const collabCreateSchema = createInsertSchema(collabs, {
  createdAt: z.string(),
});
