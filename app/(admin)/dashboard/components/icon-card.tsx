import React from "react";
import Link from "next/link";
import { CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Props {
  iconColor: string;
  textColor: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  title: string;
  href: string;
}
const IconCard = ({
  textColor,
  iconColor,
  icon,
  title,
  children,
  href,
}: Props) => {
  const Icon = icon;

  return (
    <>
      <div className="flex items-center gap-3">
        <span
          className={`w-10 h-10 inline-flex rounded-md items-center justify-center ${iconColor}`}
        >
          <Icon className="w-5 h-5" />
        </span>
        <span className="font-semibold"> {title}</span>
      </div>
      <CardTitle>{children}</CardTitle>

      <Link
        href={href}
        className={`text-xs !mt-5 justify-between hover:underline flex items-center ${textColor}`}
      >
        View More
        <ArrowRight className="w-3 h-3 ml-2" />
      </Link>
      <span
        className={`absolute right-6 top-6 !mt-0 text-green-600 ${textColor}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-10 w-10"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </span>
    </>
  );
};

export default IconCard;
