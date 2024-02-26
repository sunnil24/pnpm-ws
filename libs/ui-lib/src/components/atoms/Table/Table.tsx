/* eslint-disable @typescript-eslint/no-explicit-any */
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
export interface TableProps extends AgGridReactProps {
  className?: string;
  headerClass?: string;
}

const Table: React.FC<TableProps> = ({
  className = "w-[auto] h-100 custom-table",
  columnDefs,
  rowClass,
  headerClass,
  ...rest
}: TableProps) => {
  const updatedColumnDefs = columnDefs?.map((col) => ({
    ...col,
    cellClass: "px-2 py-3 word-break white-space justify-center",
    headerClass: `px-2 py-3 font-semibold text-xs  text-basics-white  bg-basics-grey110  word-break white-space not-italic leading-normal ${headerClass}`,
  }));
  const getRowClass = () => {
    return `mt-[-1px]  align-center  hover:bg-basics-grey10 ${rowClass}`;
  };
  const defaultColDef = {
    cellStyle: {
      border: "1px solid #dde1e6",
      whiteSpace: "normal",
      wordBreak: "break-word",
    },
  };

  return (
    <div className={className}>
      <AgGridReact
        domLayout="autoHeight"
        defaultColDef={defaultColDef}
        headerHeight={65}
        rowHeight={50}
        suppressRowClickSelection={true}
        columnDefs={updatedColumnDefs}
        getRowClass={getRowClass}
        onGridReady={(event) => event.api.autoSizeAllColumns()}
        {...rest}
      />
    </div>
  );
};
export default Table;
