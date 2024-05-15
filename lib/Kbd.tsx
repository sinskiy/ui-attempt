import { cn } from "./utils";
import { HTMLAttributes } from "react";

export interface KbdProps extends HTMLAttributes<HTMLElement> {}

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "bg-surface-container inline-flex size-fit items-center gap-2 rounded-card px-2 py-1 text-sm font-bold shadow-sm [&>svg]:size-4",
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
