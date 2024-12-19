// @ts-nocheck
import { Ref } from "react";
import * as ButtonPrimitive from "@radix-ui/react-toggle";
import { buttonVariants, ButtonVariantsProps } from "./Button.styles";
import { cn } from "@sldl/tailwind-config";
/**
 * The ButtonVProps interface extends the ButtonPrimitive.PrimitiveButtonProps interface, the ButtonVariantProps interface
 * of buttonVariants object.
 */
export interface ButtonProps
  extends ButtonPrimitive.PrimitiveButtonProps,
    ButtonVariantsProps {
  asChild?: boolean;
  children: React.ReactNode;
  role?: string;
  variant?: ButtonVariantsProps["variant"];
  size?: ButtonVariantsProps["size"];
}
/**
 * A custom button component with multiple variants and sizes.
 *
 * @function Button
 * @param {ButtonProps} props - The props to be passed to the button component.
 * @returns {JSX.Element} - Returns the Button component as the JSX element.
 */
const Button = (
  {
    asChild,
    children,
    className,
    role = "button",
    size = "md",
    variant = "primaryContained",
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
): JSX.Element => {
  /**
   * A utility function that applies the appropriate CSS classes,  based on the variant and size props
   * using the clsx utility function.
   *
   * @function applyClasses
   * @param {Object} classes - The CSS classes to apply.
   * @returns {string} - The concatenated CSS classes.
   */
  const applyClasses = (classes: object): string =>
    cn(
      buttonVariants({
        variant,
        size,
        className,
      }),
      classes,
    );

  // Rendering the button component using ButtonPrimitive.Root component from @radix-ui/react-toggle library
  return (
    <ButtonPrimitive.Root
      role={role}
      className={applyClasses({})}
      {...props}
      ref={ref}
    >
      {children}
    </ButtonPrimitive.Root>
  );
};
Button.displayName = "Button";

export default Button;
