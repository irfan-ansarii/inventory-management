import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { formatNumber } from "@/lib/utils";
import { getProductInventories, ProductType } from "@/query/products";
import { Box, Calendar, Ruler, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import Tooltip from "@/components/custom-ui/tooltip";
import Avatar from "@/components/custom-ui/avatar";
import Inventories from "./inventories";
import Actions from "./actions";
import ErrorBoundary from "@/components/error-boundary";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCard = async ({ product }: { product: ProductType }) => {
  const { data: inventory } = await getProductInventories(product.id);
  const isArchived = product.status === "archived";

  return (
    <Card className="hover:border-foreground transition duration-500 overflow-hidden">
      <CardContent className="flex gap-4">
        <span className="shrink-0">
          <Avatar src={product.image || product.title!} />
        </span>
        <div className="grid grid-cols-3 gap-4 gap-y-2 flex-1">
          <div
            className={`space-y-1 col-span-2 overflow-hidden ${
              isArchived ? "line-through text-muted-foreground" : ""
            }`}
          >
            <h2 className="font-medium truncate hover:underline">
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </h2>

            <p className="text-muted-foreground text-sm truncate">
              {product.description}
            </p>
          </div>

          <div className="ml-auto flex gap-2 items-center">
            <Tooltip
              content={
                <div className="w-52">
                  <Inventories data={inventory} />
                </div>
              }
              variant="card"
            >
              <Badge className="py-1">
                <Box className="w-4 h-4 mr-2" /> {product?.stockCount! || 0}
                <span className="hidden md:inline ml-1">Pieces</span>
              </Badge>
            </Tooltip>
            <Actions product={product} inventory={inventory} />
          </div>

          <div className="flex gap-2 items-center text-muted-foreground text-xs col-span-3">
            <Tooltip content="Created at">
              <span className="inline-flex gap-1 items-center">
                <Calendar className="w-3.5 h-3.5" />
                {format(product.createdAt, "MMM dd, yy")}
              </span>
            </Tooltip>

            {product.createdBy && (
              <>
                <p>▪</p>
                <Tooltip content="Created by">
                  <span className="inline-flex gap-1 items-center">
                    <User className="w-3.5 h-3.5" />
                    {product.createdBy.name}
                  </span>
                </Tooltip>
              </>
            )}

            {product.variants?.length > 0 && (
              <>
                <p>▪</p>
                <Tooltip
                  content={
                    <div className="flex gap-2 w-44 flex-wrap flex-col">
                      {product.variants?.map((v) => (
                        <Badge
                          variant="secondary"
                          key={v.id}
                          className="py-1 rounded-md"
                        >
                          {v.title}

                          <span className="ml-auto">
                            {formatNumber(v.salePrice)}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  }
                  variant="card"
                >
                  <span className="inline-flex gap-1 items-center">
                    <Ruler className="w-3.5 h-3.5" />
                    <span>
                      {product.variants?.length}
                      <span className="hidden sm:inline ml-1">Variants</span>
                    </span>
                  </span>
                </Tooltip>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
