import { cn } from "./utils";
import { HTMLAttributes, forwardRef } from "react";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  disabledType?: "pointer-events" | "cursor";
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ disabledType = "cursor", className, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "group flex items-center gap-3 font-medium leading-none for-disabled:opacity-70",
        {
          "for-disabled:cursor-not-allowed": disabledType === "cursor",
          "for-disabled:pointer-events-none": disabledType === "pointer-events",
        },
        className,
      )}
      {...props}
    >
      {children}
    </label>
  ),
);
Label.displayName = "Label";

export { Label };
