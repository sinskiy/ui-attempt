import { Label } from "./Label";
import { cn } from "./utils";
import { InputHTMLAttributes, forwardRef } from "react";

export interface TabProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
}

const Tab = forwardRef<HTMLInputElement, TabProps>(
  ({ className, children, id, name, ...props }, ref) => {
    return (
      <Label
        role="tab"
        className={cn(
          "relative flex w-full justify-center rounded-full py-3 capitalize",
          className,
        )}
      >
        <input
          type="radio"
          className="peer absolute inset-0 opacity-0"
          ref={ref}
          id={id}
          name={name}
          {...props}
        />
        <span className="opacity-50 peer-checked:opacity-100">{children}</span>
      </Label>
    );
  },
);
Tab.displayName = "Tab";

export { Tab };
