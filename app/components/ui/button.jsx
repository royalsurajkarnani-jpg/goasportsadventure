import React from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const Button = ({
  variant = "default",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    default: "bg-cyan-500 text-white hover:bg-cyan-400 focus:ring-cyan-500",
    outline:
      "border border-cyan-500 text-cyan-500 hover:bg-cyan-50 focus:ring-cyan-500",
    ghost: "text-cyan-500 hover:bg-cyan-100 focus:ring-cyan-400",
    destructive: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
