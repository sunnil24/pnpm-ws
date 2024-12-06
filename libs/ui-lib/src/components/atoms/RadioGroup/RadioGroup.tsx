// eslint-disable-next-line import/no-extraneous-dependencies
import {
  RadioGroupRoot as RadixRadioGroupRoot,
  RadioGroupItem as RadixRadioGroupItem,
} from '@radix-ui/themes';

type RadioGroupRootProps = React.ComponentProps<typeof RadixRadioGroupRoot> & {
  className?: string;
  children: React.ReactNode;
};

type RadioGroupItemProps = React.ComponentProps<typeof RadixRadioGroupItem> & {
  className?: string;
};
export function RadioGroupRoot(props: RadioGroupRootProps) {
  const { children, className } = props;
  return (
    <RadixRadioGroupRoot className={className} {...props}>
      {children}
    </RadixRadioGroupRoot>
  );
}

export function RadioGroupItem(props: RadioGroupItemProps) {
  const { className } = props;
  return <RadixRadioGroupItem className={className} {...props} />;
}
