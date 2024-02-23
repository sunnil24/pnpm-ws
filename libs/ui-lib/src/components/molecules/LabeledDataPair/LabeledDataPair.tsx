import React from "react";

interface DataItemProps {
  label: string;
  data: string;
}
const DataItem: React.FC<DataItemProps> = ({ label, data }) => (
  <div className="flex flex-col">
    <dt className="font-semibold text-base pb-2">{label}</dt>
    <dd className="text-sm">{data}</dd>
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
