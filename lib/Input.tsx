import { cn } from "./utils";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-surface-container h-12 w-full rounded-card border-2 border-outline/30 pl-4 text-2xl text-on-surface-variant outline-none transition-colors focus:bg-surface-container-high placeholder:text-on-surface-variant/30 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
