import { Grid } from '@radix-ui/themes';
import React from "react";
import '@radix-ui/themes/styles.css';

export interface GridLayoutProps {
  className?: string;
  children: React.ReactNode;
  columns: string,
}

const GridLayout = (
  (
    {
      className,
      children,
      columns = "12",
      ...props
    }: GridLayoutProps,
  ): JSX.Element => {
    return (
      <Grid columns={columns} className={className} {...props} >
        {children}
      </Grid>
    );
  }
);

export { GridLayout };
