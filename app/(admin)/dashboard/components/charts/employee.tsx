"use client";

import { LabelList, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {} satisfies ChartConfig;

export default function EmployeeChart({
  chartData,
}: {
  chartData: Record<string, string | number | null>[];
}) {
  const indexOfLargest = chartData.reduce(
    (maxIndex, item, index, array) =>
      item.total! > array[maxIndex].total! ? index : maxIndex,
    0
  );

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel asNumber />}
        />
        <Pie
          data={chartData}
          dataKey="total"
          outerRadius={110}
          strokeWidth={5}
          activeIndex={indexOfLargest}
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <Sector {...props} outerRadius={outerRadius + 10} />
          )}
        >
          <LabelList
            dataKey="name"
            stroke="none"
            className="fill-background"
            fontSize={12}
            formatter={(value: string) => value}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
