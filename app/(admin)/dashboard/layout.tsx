"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { Calendar as CalendarIcon, Check } from "lucide-react";

import { useRouterStuff } from "@/hooks/use-router-stuff";

import { Button, buttonVariants } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import Popup from "@/components/custom-ui/popup";

import { DASHBAORD_RANGES } from "@/lib/utils";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { queryParams, searchParamsObj } = useRouterStuff();

  const selectedRange = useMemo(() => {
    return DASHBAORD_RANGES.find(
      (d) => d.value === (searchParamsObj.interval || "today")
    )?.label;
  }, [searchParamsObj.interval]);

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="space-y-1">
          <CardTitle>Dashboard</CardTitle>
        </div>
        <Popup
          variant="popover"
          content={
            <div className="flex flex-col md:w-44 gap-1">
              {DASHBAORD_RANGES.map((duration) => (
                <Link
                  key={duration.value}
                  className={buttonVariants({
                    variant:
                      (searchParamsObj.interval || "today") === duration.value
                        ? "secondary"
                        : "ghost",
                    size: "sm",
                    className: "capitalize !justify-between",
                  })}
                  href={
                    queryParams({
                      set: { interval: duration.value },
                      getNewPath: true,
                    }) as string
                  }
                >
                  {duration.label}

                  <Check
                    className={`w-4 h-4 ${
                      (searchParamsObj.interval || "today") === duration.value
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </Link>
              ))}
            </div>
          }
        >
          <Button
            className="ml-auto w-full md:w-48 justify-start"
            variant="outline"
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {selectedRange}
          </Button>
        </Popup>
      </div>
      {children}
    </>
  );
};

export default DashboardLayout;
