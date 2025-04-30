"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { InventoryType, ProductType, useDeleteProduct } from "@/query/products";

import {
  ArchiveX,
  ArrowRightLeft,
  ArrowUpDown,
  Box,
  EllipsisVertical,
  Eye,
  Pencil,
  Printer,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

import Popup from "@/components/custom-ui/popup";
import DeletePopup from "@/components/delete-popup";
import BarcodePopup from "./barcode-popup";
import Inventories from "./inventories";
import CreateAdjustments from "./create-adjustments";

const Actions = ({
  product,
  inventory,
}: {
  product: ProductType;
  inventory: InventoryType;
}) => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const router = useRouter();
  const remove = useDeleteProduct(product.id);
  const { data: session } = useAuth();
  const onRemove = () => {
    remove.mutate(undefined, {
      onSuccess: () => {
        router.refresh();
        setDeleteOpen(false);
      },
    });
  };

  const barcodes = useMemo(() => {
    const storeInventories =
      inventory.find((inv: any) => inv?.storeId === session?.storeId)
        ?.products || [];

    return product.variants.map((variant) => {
      const foundProduct = storeInventories.find(
        (inv: any) => inv.variantId === variant.id
      );

      return {
        productId: variant.productId,
        variantId: variant.id,
        title: product.title,
        variantTitle: variant.title,
        barcode: variant.barcode!,
        image: product.image,
        value: parseFloat(variant.salePrice),
        quantity: foundProduct?.stock || "0",
      };
    });
  }, [session, product.variants, inventory]);

  const adjustments = useMemo(() => {
    const storeInventories =
      inventory.find((inv: any) => inv?.storeId === session?.storeId)
        ?.products || [];

    return product.variants.map((variant) => {
      const foundProduct = storeInventories.find(
        (inv: any) => inv.variantId === variant.id
      );

      return {
        productId: variant.productId,
        variantId: variant.id,
        title: product.title,
        variantTitle: variant.title,
        barcode: variant.barcode!,
        image: product.image,
        stock: foundProduct?.stock,
        value: variant.id,
        quantity: "0",
      };
    });
  }, [session, product.variants, inventory]);

  return (
    <Popup
      variant="popover"
      content={
        <div>
          <div className="flex flex-col md:w-44 [&>*]:justify-start">
            <Button variant="ghost" size="sm" disabled>
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
            <Link
              href={`/products/${product.id}`}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <Pencil className="w-4 h-4 mr-2" /> Edit
            </Link>
            <BarcodePopup defaultValues={barcodes} action="print">
              <Button variant="ghost" size="sm">
                <Printer className="w-4 h-4 mr-2" />
                Print Barcode
              </Button>
            </BarcodePopup>
            {inventory?.length > 0 && (
              <Popup
                variant="popover"
                content={
                  <div className="p-2 md:w-52">
                    <div className="divide-y overflow-y-scroll max-h-[30rem]">
                      <Inventories data={inventory} />
                    </div>
                  </div>
                }
              >
                <Button variant="ghost" size="sm">
                  <Box className="w-4 h-4 mr-2" />
                  View Inventory
                </Button>
              </Popup>
            )}
            <Button variant="ghost" size="sm" disabled>
              <ArrowRightLeft className="w-4 h-4 mr-2" />
              Stock Transfer
            </Button>
            <CreateAdjustments defaultValues={adjustments}>
              <Button size="sm" variant="ghost">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                Stock Adjustment
              </Button>
            </CreateAdjustments>
            <Button size="sm" variant="ghost" disabled>
              <ArchiveX className="w-4 h-4 mr-2" />
              Archive
            </Button>
            <DeletePopup
              open={deleteOpen}
              onOpenChange={setDeleteOpen}
              onDelete={onRemove}
              loading={remove.isPending}
            />
          </div>
        </div>
      }
    >
      <Button className="px-2" variant="ghost">
        <EllipsisVertical className="w-5 h-5" />
      </Button>
    </Popup>
  );
};

export default Actions;
