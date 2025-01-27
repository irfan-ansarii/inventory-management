import React, { useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderFormValues } from "./form";

import Popup from "@/components/custom-ui/popup";
import { useForm, useFormContext } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const numberField = z
  .string()
  .min(1, { message: "Required" })
  .refine((v) => !isNaN(parseInt(v)), { message: "Invalid value" });

// schema to validate form
const schema = z.object({
  title: z.string().min(1, { message: "Required" }),
  price: numberField,
  taxRate: numberField,
  quantity: numberField,
  hsn: z.string().or(z.literal("")),
  type: z.string(),
  amount: numberField.or(z.literal(``)),
});

// component
const CartItemPopup = ({
  index,
  calculateCart,
  children,
}: {
  index?: number;
  calculateCart: () => void;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const formContext = useFormContext<OrderFormValues>();
  const cartLineItems = formContext.watch("lineItems");

  const getLineItemValues = () => {
    if (index === undefined) return {};

    const lineItem = formContext.getValues(`lineItems.${index}`);
    const { title, salePrice, currentQuantity, taxRate, hsn, discountLine } =
      lineItem;

    return {
      title: title!,
      price: salePrice!,
      quantity: currentQuantity!?.toString(),
      taxRate: taxRate!,
      hsn: hsn!,
      type: discountLine?.type! || "fixed",
      amount: discountLine?.amount! || "0",
    };
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues:
      index !== undefined
        ? { ...getLineItemValues() }
        : {
            title: "",
            price: "",
            quantity: "1",
            taxRate: "",
            hsn: "",
            type: "fixed",
            amount: "",
          },
  });
  const disabled = !form.formState.isDirty;

  // handle add/update cart item
  const onSubmit = (values: any) => {
    if (index !== undefined) {
      const lineItem = cartLineItems[index];
      formContext.setValue(`lineItems.${index}`, {
        ...lineItem,
        title: values.title,
        price: values.price,
        salePrice: values.price,
        currentQuantity: Number(values.quantity),
        taxRate: values.taxRate,
        hsn: values.hsn,
        discountLine: {
          type: values.type,
          amount: values.amount,
        },
      });
    } else {
      cartLineItems.push({
        title: values.title,
        price: values.price,
        variantTitle: "Default",
        salePrice: values.price,
        currentQuantity: Number(values.quantity),
        taxRate: values.taxRate,
        hsn: values.hsn,
        discountLine: {
          type: values.type,
          amount: values.amount,
        },
      });
      formContext.setValue(`lineItems`, cartLineItems);
      form.reset();
    }

    calculateCart?.();
    setOpen(false);
  };

  // handle remove cart item
  const handleRemove = () => {
    if (index === undefined) return;
    cartLineItems.splice(index, 1);
    formContext.setValue(`lineItems`, cartLineItems);
    calculateCart?.();
    setOpen(false);
  };

  return (
    <Popup
      open={open}
      onOpenChange={setOpen}
      content={
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-2 md:p-6 space-y-4"
          >
            <DialogHeader>
              <DialogTitle>
                {index !== undefined ? "Update Item" : "Add Custom Item"}
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col max-h-[30rem] -mb-2 pb-2 -mx-2 px-2 overflow-y-scroll gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Item title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-4 grid-cols-2">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="1234" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="taxRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Tax Rate{" "}
                        <span className="text-muted-foreground">(%)</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hsn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>HSN Code</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="6104" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Discount Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-2 gap-1 border rounded-md p-1"
                        >
                          <FormItem className="space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="fixed"
                                className="peer sr-only"
                              />
                            </FormControl>
                            <FormLabel className="flex truncate items-center justify-center rounded-md hover:bg-accent font-normal h-8 py-2 px-3 peer-data-[state=checked]:bg-accent [&:has([data-state=checked])]:bg-accent">
                              Fixed
                            </FormLabel>
                          </FormItem>
                          <FormItem className="space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="percentage"
                                className="peer sr-only"
                              />
                            </FormControl>
                            <FormLabel className="flex truncate items-center justify-center rounded-md hover:bg-accent font-normal h-8 py-2 px-3 peer-data-[state=checked]:bg-accent [&:has([data-state=checked])]:bg-accent">
                              Percentage
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount Value</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="justify-end flex flex-col gap-2 md:gap-4 md:flex-row">
              <Button type="submit" className="md:order-3" disabled={disabled}>
                {index !== undefined ? "Update Item" : "Add Item"}
              </Button>
              {index !== undefined && (
                <Button
                  type="button"
                  className="md:order-2"
                  variant="destructive"
                  onClick={handleRemove}
                >
                  Remove Item
                </Button>
              )}
              <Button
                type="button"
                className="md:order-1"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      }
    >
      {children}
    </Popup>
  );
};

export default CartItemPopup;
