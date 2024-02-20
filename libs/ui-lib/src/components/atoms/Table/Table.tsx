import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";

export interface TableProps extends AgGridReactProps {
  className?: string;
  headerClass?: string;
}

const Table: React.FC<TableProps> = ({
  className = "w-[auto] h-100",
  columnDefs,
  rowClass,
  headerClass,
  ...rest
}: TableProps) => {
  const updatedColumnDefs = columnDefs?.map((col) => ({
    ...col,
    cellClass: "p-4 h-100",
    headerClass: `py-2 px-4 uppercase  not-italic leading-normal font-semibold text-xs  border-t-2 border-b-2 text-basics-black border-basics-grey20 bg-basics-grey10 ${headerClass}`,
  }));

  const getRowClass = () => {
    return `h-100 hover:bg-basics-grey10 ${rowClass}`;
  };

  return (
    <div className={className}>
      <AgGridReact
        domLayout="autoHeight"
        headerHeight={40}
        rowHeight={52}
        columnDefs={updatedColumnDefs}
        getRowClass={getRowClass}
        {...rest}
      />
    </div>
  );
};
export default Table;
