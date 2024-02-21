// eslint-disable-next-line import/no-extraneous-dependencies
import { Heading } from "@radix-ui/themes";
import { headingVariants } from "./Heading.styles";
import { cn } from "@xyzproject/tailwind-config";

export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
  variant?: HeadingLevels;
  asTag?: HeadingLevels;
}

const HeadingComponent = (props: HeadingProps) => {
  const { asTag = "h1", children, className, variant = "h1" } = props;

  const applyClasses = (classes: object): string =>
    cn(
      headingVariants({
        variant,
        className,
      }),
      classes,
    );

  return (
    <Heading className={applyClasses({})} as={asTag} {...props}>
      {children}
    </Heading>
  );
};

export default HeadingComponent;
