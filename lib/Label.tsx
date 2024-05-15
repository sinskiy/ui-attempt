import { cn } from "./utils";
import { HTMLAttributes, forwardRef } from "react";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "flex items-center gap-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-70",
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = "Label";

export { Label };
