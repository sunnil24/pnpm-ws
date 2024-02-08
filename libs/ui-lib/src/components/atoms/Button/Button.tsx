import { Ref, forwardRef } from 'react';
import * as ButtonPrimitive from '@radix-ui/react-toggle';
import { buttonVariants, type ButtonVariantsProps } from './Button.styles';
import { cn } from '@xyzproject/tailwind-config';
/**
 * The ButtonVProps interface extends the ButtonPrimitive.PrimitiveButtonProps interface, the ButtonVariantProps interface
 * of buttonVariants object.
 */
interface ButtonProps
  extends ButtonPrimitive.PrimitiveButtonProps,
    ButtonVariantsProps {
  asChild?: boolean;
  children: React.ReactNode;
}
/**
 * A custom button component with multiple variants and sizes.
 *
 * @function Button
 * @param {ButtonProps} props - The props to be passed to the button component.
 * @returns {JSX.Element} - Returns the Button component as the JSX element.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      children,
      className,
      size = 'md',
      variant = 'contain',
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
      cn(buttonVariants({ variant, size, className }), classes);

    // Rendering the button component using ButtonPrimitive.Root component from @radix-ui/react-toggle library
    return (
      <ButtonPrimitive.Root
        role="button"
        className={applyClasses({})}
        {...props}
        ref={ref}
      >
        {children}
      </ButtonPrimitive.Root>
    );
  },
);

export { Button };
