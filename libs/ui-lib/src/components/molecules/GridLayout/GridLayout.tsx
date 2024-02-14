import { Grid } from '@radix-ui/themes';

export interface GridLayoutProps {
  className?: string;
  children: React.ReactNode;
  columns: string;
}

const GridLayout = ({
  children,
  className,
  columns = '12',
  ...props
}: GridLayoutProps): JSX.Element => {
  return (
    <Grid columns={columns} className={className} {...props}>
      {children}
    </Grid>
  );
};

export default GridLayout;
