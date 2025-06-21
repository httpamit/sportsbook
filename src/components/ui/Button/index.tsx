import React, { ButtonHTMLAttributes, ReactNode } from "react";

export type Variant =
  | "green"
  | "greenDark"
  | "greenLight"
  | "outline"
  | "pink"
  | "darkBlack";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const baseStyles = "rounded transition text-sm font-medium cursor-pointer ";

const variants: Record<Variant, string> = {
  green: "bg-green-500 hover:bg-green-600 text-white",
  greenDark: "bg-green-700 hover:bg-green-800 text-white",
  greenLight: "bg-[#1ACB81] hover:bg-[#17b073] text-white",
  outline: "border border-white text-white hover:bg-white hover:text-black",
  pink: "bg-[#b91c5d] hover:bg-pink-700 text-white",
  darkBlack: "bg-[#2A253A] hover:bg-[#2A252A] text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "green",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const combined = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
}
