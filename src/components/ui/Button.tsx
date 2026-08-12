import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonStyles, type ButtonVariant, type ButtonSize } from "@/components/ui/buttonStyles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children: ReactNode;
}

export function Button({ variant = "primary", size = "md", icon, className, children, ...rest }: ButtonProps) {
  return (
    <button className={buttonStyles({ variant, size, className })} {...rest}>
      {icon}
      {children}
    </button>
  );
}
