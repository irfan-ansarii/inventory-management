import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const Inventories = ({ data }: { data: any }) => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={data?.[0]?.storeId}
      className="space-y-2"
    >
      {data?.map((inv: any) => (
        <AccordionItem
          value={inv.storeId}
          key={inv.storeId}
          className="border rounded-md overflow-hidden"
        >
          <AccordionTrigger className="hover:no-underline bg-secondary font-normal p-2 [&>svg]:hidden">
            <div className="flex justify-between gap-4 flex-1 items-center">
              {inv.storeName}
              <Badge
                variant={(inv.stock || 0) >= 5 ? "success" : "destructive"}
                className="py-0"
              >
                {inv.stock}
              </Badge>
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-1 px-2 py-1">
            {inv.products.map((p: any) => (
              <div
                className="flex justify-between items-center gap-4"
                key={p.id}
              >
                <p className="text-muted-foreground">{p.title}</p>
                <Badge
                  variant={(inv.stock || 0) >= 5 ? "success" : "destructive"}
                  className="py-0"
                >
                  {p.stock}
                </Badge>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Inventories;
