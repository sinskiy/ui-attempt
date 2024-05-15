import { cn } from "./utils";
import { CheckIcon } from "lucide-react";
import { InputHTMLAttributes, forwardRef } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative size-6">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            "peer size-6 appearance-none rounded-card border-2 border-outline transition-colors checked:bg-primary checked:border-primary disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          {...props}
        />
        <CheckIcon
          strokeWidth={3}
          aria-hidden
          className="pointer-events-none absolute inset-0 m-auto size-4 origin-bottom-left scale-0 text-on-primary transition-transform duration-500 peer-checked:scale-100"
        />
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
