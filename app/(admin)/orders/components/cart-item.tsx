import React from "react";
import { Minus, Plus } from "lucide-react";
import { OrderFormValues } from "./form";
import { formatNumber } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Avatar from "@/components/custom-ui/avatar";
import CartItemPopup from "./cart-item-popup";

const CartItem = ({
  field,
  index,
  handlePlus,
  handleMinus,
  calculateCart,
}: {
  field: OrderFormValues["lineItems"][0];
  index: number;
  handlePlus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleMinus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  calculateCart: () => void;
}) => {
  return (
    <CartItemPopup calculateCart={calculateCart} index={index}>
      <div className="p-2 group relative hover:bg-accent hover:rounded-md">
        <div className="absolute z-10 text-[10px] font-semibold left-[2px] top-0">
          {index + 1}
        </div>
        <div className="flex">
          <div className="flex flex-1 truncate">
            <Avatar src={field.image || field.title!} />
            <div className="ml-2 truncate w-full">
              <h2 className="font-medium truncate text-sm">{field.title}</h2>
              <div className="flex gap-0.5 items-end relative truncate">
                {field.variantTitle && (
                  <Badge variant="outline" className="py-0.5 dark:bg-accent">
                    {field.variantTitle}
                  </Badge>
                )}
                {field.currentQuantity === 0 && (
                  <Badge variant="destructive" className="py-0.5 ml-auto">
                    Removed
                  </Badge>
                )}

                <div className="w-24 flex items-center relative justify-between ml-auto [&>div]:cursor-pointer select-none">
                  <Button
                    disabled={field.currentQuantity == 0}
                    className="p-0 w-6 h-6 justify-center rounded-full"
                    onClick={handleMinus}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>

                  {field.quantity &&
                    field.quantity !== field.currentQuantity && (
                      <span className="w-5 text-center line-through text-destructive">
                        {field.quantity}
                      </span>
                    )}

                  <span className="w-5 text-center">
                    {field.currentQuantity}
                  </span>
                  <Button
                    className="p-0 w-6 h-6 justify-center rounded-full"
                    onClick={handlePlus}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right w-24 ml-auto relative space-y-2">
            <p
              className={`line-through text-muted-foreground leading-none ${
                parseFloat(field.total!) < parseFloat(field.subtotal!)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              {formatNumber(field.subtotal!)}
            </p>

            <p className="font-medium leading-none">
              {formatNumber(field.total!)}
            </p>
          </div>
        </div>
      </div>
    </CartItemPopup>
  );
};

export default CartItem;
