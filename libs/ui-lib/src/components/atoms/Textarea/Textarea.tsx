import { TextField } from '@radix-ui/themes';

interface BaseProps {
  className?: string;
}

interface CustomRootProps
  extends React.ComponentProps<typeof TextField.Root>,
    BaseProps {}
interface CustomInputProps
  extends React.ComponentProps<typeof TextField.Input>,
    BaseProps {}
interface CustomSlotProps
  extends React.ComponentProps<typeof TextField.Slot>,
    BaseProps {
  isIconEnabled: boolean;
  children: React.ReactNode;
}

interface TextAreaProps {
  rootProps?: CustomRootProps;
  inputProps?: CustomInputProps;
  slotProps?: CustomSlotProps;
}

export const Textarea: React.FC<TextAreaProps> = ({
  inputProps,
  rootProps,
  slotProps,
}) => {
  return (
    <TextField.Root {...rootProps}>
      {slotProps?.isIconEnabled && (
        <TextField.Slot {...slotProps}>{slotProps.children}</TextField.Slot>
      )}
      <TextField.Input {...inputProps} />
    </TextField.Root>
  );
};