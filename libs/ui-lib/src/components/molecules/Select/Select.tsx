// @ts-nocheck

import React, { ReactNode } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

interface SelectItemProps {
  value: string;
  disabled?: boolean;
  children?: ReactNode;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className="text-[13px] focus:outline-none leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:bg-basics-grey10"
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  },
);

SelectItem.displayName = "SelectItem";

interface SelectProps {
  id?: string;
  className?: string;
  options: string[];
  isDisabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
  handleSelectClick?: () => void;
}

const Select: React.FC<SelectProps> = ({
  id,
  defaultValue,
  options,
  className,
  handleSelectClick,
  placeholder = "Select",
  isDisabled = false,
}) => {
  let color = "bg-white";
  if (isDisabled) {
    color = "bg-basics-grey10";
  }
  return (
    <RadixSelect.Root defaultValue={defaultValue}>
      <RadixSelect.Trigger
        id={id}
        className={`${color} ${className} inline-flex items-center disabled justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px]  text-violet11 hover:bg-mauve3 data-[placeholder]:text-violet9 outline-none`}
        onPointerDown={(e) => {
          if (isDisabled) {
            e.preventDefault();
          } else {
            if (handleSelectClick) {
              handleSelectClick();
            }
          }
        }}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className="text-violet11 text-gray-500">
          <ChevronDownIcon className="w-4 h-6" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          side="bottom"
          align="center"
          className="overflow-hidden min-w-[12rem] bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="p-[5px]">
            <RadixSelect.Group>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </RadixSelect.Group>
            <RadixSelect.Separator className="h-[1px] bg-violet6 m-[5px]" />
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export default Select;
