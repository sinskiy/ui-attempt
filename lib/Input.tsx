import { cn } from "./utils";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, type = "text", className, ...props }, ref) => {
    return (
      <div className="relative">
        <div
          aria-hidden="true"
          className="peer pointer-events-none absolute bottom-0 left-4 top-0 mr-auto flex items-center text-on-surface-variant/30 [&>svg]:size-6"
        >
          {children}
        </div>
        <input
          type={type}
          className={cn(
            "bg-surface-container h-12 w-full rounded-card border-2 border-outline/30 pl-4 text-2xl outline-none transition-colors focus:bg-surface-container-high placeholder:text-on-surface-variant/30 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 peer-has-[svg]:pl-12",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
