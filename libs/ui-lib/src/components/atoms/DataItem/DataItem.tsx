import React from "react";

export interface DataItemProps {
  label: string;
  data: string;
}
const DataItem: React.FC<DataItemProps> = ({ label, data }) => (
  <div className="flex flex-col">
    <dt className="font-semibold text-base pb-2">{label}</dt>
    <dd className="text-sm">{data}</dd>
  </div>
);

export default DataItem;
