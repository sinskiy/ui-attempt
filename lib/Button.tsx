import { ButtonHTMLAttributes } from "react";
import { cn } from "./utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-6 py-3 bg-emerald-400 rounded-full hover:bg-emerald-300 active:scale-95 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
