/* eslint-disable @typescript-eslint/no-explicit-any */
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";

import { useEffect, useState } from "react";

export interface TableProps extends AgGridReactProps {
  className?: string;
  headerClass?: string;
}

const Table: React.FC<TableProps> = ({
  className = "w-[auto] h-100 ",
  columnDefs,
  rowClass,
  headerClass,
  ...rest
}: TableProps) => {
  const updatedColumnDefs = columnDefs?.map((col) => ({
    ...col,
    cellClass: "p-2 text-left",
    headerClass: `py-2 text-center px-2 word-break white-space not-italic leading-normal font-semibold text-xs  text-basics-white  bg-basics-grey110 ${headerClass}`,
  }));
  const [gridColumnApi, setGridColumnApi] = useState({
    autoSizeAllColumns: () => {},
  });
  const getRowClass = () => {
    return `mt-[-10px]h-100 text-center hover:bg-basics-grey10 word-break white-space ${rowClass}`;
  };
  const defaultColDef = {
    resizable: true, // Allow columns to be resized manually
    cellStyle: { border: "1px solid #dde1e6" }
  };

  useEffect(() => {
    if (gridColumnApi) {
      // Automatically adjust column width based on content
      gridColumnApi?.autoSizeAllColumns();
    }
  }, [gridColumnApi]);

  const onGridReady = (params: any) => {
    setGridColumnApi(params.columnApi);
  };

  return (
    <div className={className}>
      <AgGridReact
        domLayout="autoHeight"
        defaultColDef={defaultColDef}
        headerHeight={40}
        rowHeight={52}
        columnDefs={updatedColumnDefs}
        getRowClass={getRowClass}
        onGridReady={onGridReady}
        {...rest}
      />
    </div>
  );
};
export default Table;
