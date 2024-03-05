// component.tsx.hbs

export interface LabelProps {
  labelText: string;
  className?: string;
  labelFor?: string;
}

const Label: React.FC<LabelProps> = ({ labelText, className, labelFor }) => {
  // Component logic here

  return (
    <label
      className={`font-semibold text-sm text-basics-grey70 pb-2 ${className}`}
      htmlFor={labelFor}
    >
      {labelText}
    </label>
  );
};

export default Label;
