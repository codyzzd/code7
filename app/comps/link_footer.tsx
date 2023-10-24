import { ComponentProps } from "react";
/* --------------------------- configura tailwind --------------------------- */
import { tv, VariantProps } from "tailwind-variants";
const linkfooter = tv({
  base: " transition duration-150",
  variants: {
    color: {
      white50: "opacity-50 hover:opacity-100",
    },
    size: {
      sm: "text-sm ",
      md: "text-base ",
      lg: "text-lg ",
      xl: "text-xl ",
      xl2: "text-2xl ",
    },
  },
  defaultVariants: {
    color: "white50",
    size: "md",
  },
});

/* --------------------------- inicia o componente -------------------------- */
export type LinkFooterProps = ComponentProps<"link"> &
  VariantProps<typeof linkfooter>;
export default function LinkFooter({
  size,
  type,
  color,
  className,
  ...props
}: LinkFooterProps) {
  return (
    <span
      className={linkfooter({
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
