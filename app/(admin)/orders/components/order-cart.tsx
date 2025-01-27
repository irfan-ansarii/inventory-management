import React, { useEffect } from "react";
import { Pencil, ShoppingBag } from "lucide-react";
import { capitalizeText, cn, formatNumber } from "@/lib/utils";
import { useFormContext, useWatch } from "react-hook-form";
import useLocalStorage from "@/hooks/use-local-storage";
import { OrderFormValues } from "./form";

import { CardContent } from "@/components/ui/card";

import CheckoutPopup from "./checkout-popup";
import CartItem from "./cart-item";

import Popup from "@/components/custom-ui/popup";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const OrderCart = ({
  className,
  calculateCart,
}: {
  className?: string;
  calculateCart: () => void;
}) => {
  const { setValue, register, control, getValues } =
    useFormContext<OrderFormValues>();
  const [_, setTempCart] = useLocalStorage("temp_cart");
  const [cartLineItems, subtotal, discount, taxType, tax, charges, total] =
    useWatch({
      control,
      name: [
        "lineItems",
        "subtotal",
        "discount",
        "taxKind.type",
        "tax",
        "charges.amount",
        "total",
      ],
      exact: true,
    });

  const isEmpty = cartLineItems.length === 0;
  const itemsCount = cartLineItems?.reduce(
    (acc, curr) => (acc += curr.currentQuantity!),
    0
  );

  const handlePlus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    const { currentQuantity } = cartLineItems[index];
    setValue(`lineItems.${index}.currentQuantity`, currentQuantity! + 1);
    calculateCart();
  };

  const handleMinus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    const { currentQuantity, quantity, requiresShipping, shippingQuantity } =
      cartLineItems[index];

    let fulfilled = 0;
    if (requiresShipping) {
      fulfilled = (quantity || 0) - (shippingQuantity || 0);
    }

    if (currentQuantity === fulfilled) {
      toast.info("Fulfilled item(s) could not be removed.");
      return;
    }

    if (quantity && currentQuantity === 1) {
      setValue(`lineItems.${index}.currentQuantity`, 0);
    } else if (currentQuantity === 1) {
      cartLineItems.splice(index, 1);
      setValue("lineItems", cartLineItems);
    } else if (currentQuantity! > 1) {
      setValue(`lineItems.${index}.currentQuantity`, currentQuantity! - 1);
    }
    calculateCart();
  };

  // update localsotorage cart
  useEffect(() => {
    setTempCart(cartLineItems);
  }, [cartLineItems]);

  return (
    <CardContent className={cn(`p-6 flex flex-col gap-2 h-full`, className)}>
      {/* empty cart */}
      {isEmpty ? (
        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
          <ShoppingBag className="w-20 h-20 text-muted-foreground" />
        </div>
      ) : (
        <div className="flex-1 flex flex-col !-m-2 overflow-y-scroll divide-y dark:divide-accent overflow-x-hidden">
          {cartLineItems.map((field, i) => (
            <CartItem
              key={`${field.variantId}-${i}`}
              field={field}
              index={i}
              handlePlus={(e) => handlePlus(e, i)}
              handleMinus={(e) => handleMinus(e, i)}
              calculateCart={calculateCart}
            />
          ))}
        </div>
      )}
      <hr className="dark:border-accent" />
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatNumber(subtotal || 0)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>

          <span>{formatNumber(discount || 0)}</span>
        </div>
        <div className="flex justify-between">
          <Popup
            variant="popover"
            content={
              <div className="p-2 space-y-3 md:w-56">
                <div className="font-medium">Tax</div>
                <RadioGroup
                  className="grid grid-cols-2 gap-2 rounded-md border p-1"
                  defaultValue={getValues("taxKind.type")}
                  {...(register("taxKind.type"),
                  {
                    onValueChange: (e) => setValue("taxKind.type", e),
                  })}
                >
                  {["included", "excluded"].map((el) => (
                    <div key={el}>
                      <RadioGroupItem
                        value={el}
                        className="peer sr-only"
                        id={el}
                      />
                      <Label
                        htmlFor={el}
                        className="peer-data-[state=checked]:bg-accent [&:has([data-state=checked])]:bg-accent hover:bg-accent rounded-md p-2 h-8 block text-center"
                      >
                        {capitalizeText(el)}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <Label className="block">Sale Type</Label>
                <RadioGroup
                  className="grid grid-cols-2 gap-2 rounded-md border p-1"
                  defaultValue={getValues("taxKind.saleType")}
                  {...(register("taxKind.saleType"),
                  { onValueChange: (e) => setValue("taxKind.saleType", e) })}
                >
                  {["state", "inter state"].map((el) => (
                    <div key={el}>
                      <RadioGroupItem
                        value={el}
                        className="peer sr-only"
                        id={el}
                      />
                      <Label
                        htmlFor={el}
                        className="peer-data-[state=checked]:bg-accent [&:has([data-state=checked])]:bg-accent hover:bg-accent rounded-md p-2 h-8 block text-center"
                      >
                        {capitalizeText(el)}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            }
          >
            <span className="inline-flex items-center gap-2 cursor-pointer select-none">
              Tax
              <span className="text-muted-foreground text-xs">
                ({capitalizeText(taxType || "included")})
              </span>
              <Pencil className="w-3.5 h-3.5" />
            </span>
          </Popup>
          <span>{formatNumber(tax || 0)}</span>
        </div>
        <div className="flex justify-between">
          <Popup
            variant="popover"
            content={
              <div className="p-2 space-y-2 md:w-56">
                <div className="font-medium">Additional Charges</div>

                <div className="space-y-1.5">
                  <Label>Reason</Label>
                  <Input {...register(`charges.reason`)} defaultValue="" />
                </div>
                <div className="space-y-1.5">
                  <Label>Amount</Label>
                  <Input {...register(`charges.amount`)} defaultValue="" />
                </div>
              </div>
            }
          >
            <span className="inline-flex items-center gap-2 cursor-pointer select-none">
              Additional Charges <Pencil className="w-3.5 h-3.5" />
            </span>
          </Popup>

          <span>{formatNumber(isNaN(charges) ? "0" : charges)}</span>
        </div>
        <div className="font-medium text-lg flex justify-between">
          <span className="inline-flex items-center gap-2">
            Total
            {itemsCount > 0 && (
              <span className="text-muted-foreground text-xs">
                ({itemsCount} Items)
              </span>
            )}
          </span>
          <span>{formatNumber(total || 0)}</span>
        </div>

        <CheckoutPopup disabled={itemsCount === 0} />
      </div>
    </CardContent>
  );
};

export default OrderCart;
