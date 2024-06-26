import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface MaxWidthWrapperprops {
  className?: string;
  children: ReactNode;
}

const MaxWithWrapper = ({ className, children }: MaxWidthWrapperprops) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWithWrapper;
