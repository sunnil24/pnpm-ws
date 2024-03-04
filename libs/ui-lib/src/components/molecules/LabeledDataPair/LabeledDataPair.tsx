import React, { ReactNode } from "react";

interface DataItemProps {
  label: string;
  data: string | ReactNode;
  classes?: string;
}
const DataItem: React.FC<DataItemProps> = ({ label, data, classes }) => {
  return (
    <div className="flex flex-col">
      <dt
        className={`font-semibold text-sm text-basics-grey70 pb-2 ${classes}`}
      >
        {label}
      </dt>
      <dd className="text-base">{data}</dd>
    </div>
  );
};
export interface LabeledDataPairProps {
  items: DataItemProps[];
  className?: string;
}

const LabeledDataPair: React.FC<LabeledDataPairProps> = ({
  items,
  className,
}) => {
  return (
    <dl className={`flex space-x-6 ${className}`}>
      {items.map((item, index) => (
        <DataItem
          key={index}
          label={item.label}
          data={item.data}
          classes={item.classes}
        />
      ))}
    </dl>
  );
};

export default LabeledDataPair;
export type { DataItemProps };
