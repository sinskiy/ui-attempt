import { cn } from "./utils";
import { HTMLAttributes } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, children, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "bg-surface-container-highest animate-pulse rounded-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
