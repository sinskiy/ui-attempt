import { cn } from "./utils";
import { InputHTMLAttributes, forwardRef } from "react";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className="group relative">
        <input
          type="checkbox"
          className="peer absolute inset-0 opacity-0"
          ref={ref}
          {...props}
        />
        <div
          aria-hidden="true"
          className={cn(
            "bg-surface-container-highest pointer-events-none flex h-8 w-14 items-center rounded-full border-2 border-outline peer-checked:bg-primary peer-checked:border-primary",
            className,
          )}
        ></div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 left-1.5 my-auto aspect-square size-4 rounded-full bg-outline transition-all peer-checked:size-5 peer-checked:translate-x-6 peer-checked:bg-on-primary peer-active:w-6 peer-checked:peer-active:translate-x-5"
        >
          {children}
        </div>
      </div>
    );
  },
);
Switch.displayName = "Switch";

export { Switch };
