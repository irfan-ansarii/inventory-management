"use client";
import React, { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { setCookie } from "cookies-next";

const Provider = ({ children, ...props }: ThemeProviderProps) => {
  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setCookie("timezone", tz);
  }, []);

  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
        <Toaster richColors position="top-center" />
        {children}
      </TooltipProvider>
    </NextThemesProvider>
  );
};

export default Provider;
