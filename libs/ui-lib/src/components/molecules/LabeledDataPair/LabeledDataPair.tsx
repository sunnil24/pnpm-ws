import React from "react";

interface DataItemProps {
  label: string;
  data: string;
}
const DataItem: React.FC<DataItemProps> = ({ label, data }) => (
  <div className="flex flex-col mr-32">
    <dt className="font-semibold text-sm pb-2 text-para-primary">{label}</dt>
    <dd className="text-base">{data}</dd>
  </div>
);

export interface LabeledDataPairProps {
  items: DataItemProps[];
  className?: string;
}

const LabeledDataPair: React.FC<LabeledDataPairProps> = ({
  items,
  className,
}) => {
  return (
    <dl className={`flex space-x-20 ${className}`}>
      {items.map((item, index) => (
        <DataItem key={index} label={item.label} data={item.data} />
      ))}
    </dl>
  );
};

export default LabeledDataPair;
export type { DataItemProps };
