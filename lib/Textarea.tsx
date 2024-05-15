import { cn } from "./utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "bg-surface-container min-h-20 w-full rounded-card border-2 border-outline/30 px-3 py-2 text-sm text-on-surface-variant outline-none transition-colors focus:bg-surface-container-high placeholder:text-on-surface-variant/30 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </textarea>
    );
  },
);
Textarea.displayName = "Input";

export { Textarea };
