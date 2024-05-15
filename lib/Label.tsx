import { cn } from "./utils";
import { HTMLAttributes, forwardRef } from "react";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "for-disabled:cursor-not-allowed for-disabled:opacity-70 flex items-center gap-3 font-medium leading-none",
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = "Label";

export { Label };
