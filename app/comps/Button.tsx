import { ComponentProps } from "react";
/* --------------------------- configura tailwind --------------------------- */
import { tv, VariantProps } from "tailwind-variants";
const button = tv({
  base: "whitespace-nowrap shadow-[0_4px_4px_rgba(8,8,8,0.08),0_6px_12px_rgba(8,8,8,0.12),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_6px_12px_rgba(255,255,255,0.12)] inline-block transition-all ",
  variants: {
    type: {
      primary: "font-medium rounded-sm",
    },
    color: {
      blue: "bg-blue-600 text-white hover:brightness-110 focus:brightness-110 active:shadow-none",
      white:
        "bg-white text-blue-600 hover:brightness-90 focus:brightness-110 active:shadow-none",
    },
    size: {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
    },
  },
  defaultVariants: {
    type: "primary",
    color: "blue",
    size: "md",
  },
});

/* --------------------------- inicia o componente -------------------------- */
export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;
export default function Button({
  size,
  type,
  color,
  className,
  ...props
}: ButtonProps) {
  return (
    <span
      className={button({
        type,
        size,
        color,
        className,
      })}
      {...props}
    >
      {props.children}
    </span>
  );
}
