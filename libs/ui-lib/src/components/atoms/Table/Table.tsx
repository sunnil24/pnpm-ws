import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css'; 

export interface TableProps extends AgGridReactProps {
  className?: string;
}

export const Table: React.FC<TableProps> = ({
  className = 'w-[600px] h-[100%] ag-theme-quartz',
  ...rest
}) => {
  return (
    <div className={className}>
      <AgGridReact {...rest} />
    </div>
  );
};
