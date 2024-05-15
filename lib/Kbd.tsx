import { cn } from "./utils";
import { HTMLAttributes } from "react";

export interface KbdProps extends HTMLAttributes<HTMLElement> {}

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "bg-surface-container inline-flex w-fit items-center gap-0.5 rounded-card px-2 py-1 text-sm font-bold shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
