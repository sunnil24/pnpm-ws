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
  const updatedColumnDefs = columnDefs?.map((col: Record<string, any>) => ({
    ...col,
    cellClass: `px-2 py-6 text-xs  flex  justify-start ${col.cellClass || ""}`,
    headerClass: `px-2 py-3 font-normal text-xs  text-basics-white   bg-basics-grey110   ${headerClass}`,
  }));
  const getRowClass = () => {
    return `mt-[-1px]  align-center text-xs hover:bg-basics-grey10  ${rowClass}`;
  };
  const defaultColDef = {
    resizable: true,
    sortable: false,
    autoHeight: true,
    wrapText: true,
    wrapHeaderText: true,
    cellStyle: {
      border: "1px solid #dde1e6",
    },
  };

  return (
    <div className={className}>
      <AgGridReact
        domLayout="autoHeight"
        defaultColDef={defaultColDef}
        headerHeight={65}
        suppressRowClickSelection={true}
        columnDefs={updatedColumnDefs}
        getRowClass={getRowClass}
        onGridReady={(event) => {
          event.api.autoSizeAllColumns();
        }}
        {...rest}
      />
    </div>
  );
};
export default Table;
