import { type ClassValue, clsx } from "clsx";
import { format, formatDistanceToNow, isToday, isYesterday } from "date-fns";
import { twMerge } from "tailwind-merge";
import Bottleneck from "bottleneck";
import { endOfDay, startOfDay, subDays, subMonths } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(
  number: number | string,
  options?: Intl.NumberFormatOptions
) {
  const parsed = typeof number === "string" ? Number(number) : number;

  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    // style: "currency",
    // currency: "INR",
    ...options,
  }).format(parsed);
}

export function formatDate(date: string | Date) {
  const parsedDate = new Date(date);

  if (isToday(parsedDate)) {
    return formatDistanceToNow(parsedDate, { addSuffix: true });
  } else if (isYesterday(parsedDate)) {
    return "Yesterday";
  }

  return format(parsedDate, "dd MMM, yyyy");
}
export const GLOBAL_ERROR = {
  status: 500,
  message: "Internal Server Error",
};

export const capitalizeText = (text: string) => {
  if (!text) return;

  const splitted = text.split(" ");

  const capitalized = splitted.map((string) => {
    const firstChar = string.charAt(0)?.toUpperCase();
    const restChar = string.substring(1);
    return `${firstChar}${restChar}`;
  });

  return capitalized.join(" ");
};

export const siteConfig = {
  name: "Goldy's Nestt",
  url: "https://app.goldysnestt.com",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "Manage orders effortlessly across multiple stores with intuitive application",
  // links: {
  //   twitter: "https://twitter.com/shadcn",
  //   github: "https://github.com/shadcn-ui/ui",
  // },
};

export function getOrderBadgeClassNames(status: string): string {
  switch (status) {
    case "unpaid":
    case "refunded":
      return "bg-red-600 hover:bg-red-700 text-white";
    case "paid":
      return "bg-green-600 hover:bg-green-700 text-white";
    case "partially paid":
    case "overpaid":
      return "bg-orange-600 hover:bg-orange-700 text-white";
    default:
      return "";
  }
}
export const getShipmentStatusBadgeClassNames = (status: string) => {
  switch (status) {
    case "cancelled":
      return "bg-red-600 hover:bg-red-700 text-white";
    case "processing":
      return "bg-yellow-600 hover:bg-yellow-700 text-white";
    case "shipped":
      return "bg-purple-600 hover:bg-purple-700 text-white";
    case "delivered":
      return "bg-green-600 hover:bg-green-700 text-white";
    case "rto initiated":
    case "return initiated":
      return "bg-red-600 hover:bg-red-700 text-white";
    case "returned":
    case "rto delivered":
      return "bg-orange-600 hover:bg-orange-700 text-white";
    default:
      return "bg-primary hover:bg-primary/80 text-primary-foreground";
  }
};
export const getTaskBadgeClassNames = (status: string) => {
  switch (status) {
    case "cancelled":
      return "bg-red-600 hover:bg-red-700 text-white";
    case "in progress":
      return "bg-purple-600 hover:bg-purple-700 text-white";
    case "on hold":
      return "bg-orange-600 hover:bg-orange-700 text-white";
    case "completed":
      return "bg-green-600 hover:bg-green-700 text-white";
    default:
      return "bg-primary text-primary-foreground";
  }
};
export const CHART_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export const EXPENSE_CATEGORIES = [
  "Maintenance",
  "Marketing",
  "Packaging",
  "Salaries",
  "Shipping",
  "Utilities",
  "Other",
];

export const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 2000,
});

export const splitText = (string: string) => {
  const maxLineLength = 30;
  const result = [];
  let remainingString = string.trim();

  while (remainingString.length > maxLineLength) {
    let splitPoint = remainingString.lastIndexOf(" ", maxLineLength);

    if (splitPoint === -1) {
      splitPoint = maxLineLength;
    }

    result.push(remainingString.slice(0, splitPoint));

    remainingString = remainingString.slice(splitPoint).trim();
  }

  if (remainingString) {
    result.push(remainingString);
  }

  return result;
};

export const DASHBAORD_RANGES: { [k: string]: any }[] = [
  {
    label: "Today",
    value: "today",
    interval: "30 MINUTE",
    start: startOfDay(new Date()),
    end: endOfDay(new Date()),
  },
  {
    label: "Yesterday",
    value: "yesterday",
    interval: "30 MINUTE",
    start: startOfDay(subDays(new Date(), 1)),
    end: endOfDay(subDays(new Date(), 1)),
  },
  {
    label: "Last 7 days",
    value: "7days",
    interval: "1 day",
    start: startOfDay(subDays(new Date(), 6)),
    end: endOfDay(new Date()),
  },
  {
    label: "Last 30 days",
    value: "30days",
    interval: "1 day",
    start: startOfDay(subDays(new Date(), 29)),
    end: endOfDay(new Date()),
  },
  {
    label: "Last 90 days",
    value: "90days",
    interval: "1 day",
    start: startOfDay(subDays(new Date(), 90)),
    end: endOfDay(new Date()),
  },
  {
    label: "Last 12 month",
    value: "12month",
    interval: "30 days",
    start: startOfDay(subMonths(new Date(), 11)),
    end: endOfDay(new Date()),
  },
];
