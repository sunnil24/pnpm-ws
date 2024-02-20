import React from "react";
import DataItem from "@xyzproject/dataitem";
import { DataItemProps } from "@xyzproject/dataitem/DataItem";

export interface LabeledDataPairProps {
  items: DataItemProps[];
}

const LabeledDataPair: React.FC<LabeledDataPairProps> = ({ items }) => {
  return (
    <dl className="flex space-x-6">
      {items.map((item, index) => (
        <DataItem key={index} label={item.label} data={item.data} />
      ))}
    </dl>
  );
};

export default LabeledDataPair;
