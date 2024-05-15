import { cn } from "./utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import "./Button.css";

const buttonVariants = ["filled", "outlined", "ghost"] as const;
const buttonSizes = ["default", "icon"] as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: (typeof buttonVariants)[number];
  size?: (typeof buttonSizes)[number];
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size = "default", children, className, ...props }, ref) => {
    const ghostBase =
      "before:activatable-scale animated-hover text-primary before:interactive-bg-primary hover:text-on-primary focus-visible:text-on-primary";
    const variants = {
      filled: "interactive-bg-primary",
      outlined: `border-2 border-outline hover:border-primary ${ghostBase}`,
      ghost: ghostBase,
    } as const;

    const sizes = {
      default: "h-12 px-6 [&>svg]:size-4",
      icon: "size-12 [&>svg]:size-5",
    } as const;

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-main font-medium transition-activatable active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          variant && variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants, buttonSizes };
