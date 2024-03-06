// component.tsx.hbs
import { Label as RadixLabel } from "@radix-ui/react-label";
import { ReactNode } from "react";

export interface LabelProps {
  children?: ReactNode;
  className?: string;
  labelFor?: string;
}

const Label: React.FC<LabelProps> = ({ children, className, labelFor }) => {
  // Component logic here

  return (
    <RadixLabel
      className={`font-semibold text-sm text-basics-grey70 pb-2 ${className}`}
      htmlFor={labelFor}
    >
      {children}
    </RadixLabel>
  );
};

export default Label;
