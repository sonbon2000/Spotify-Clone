import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BoxProps = {
  children: ReactNode;
  className?: string;
};

export const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}
    >
      {children}
    </div>
  );
};
