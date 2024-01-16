import React from 'react';
import * as DropdownPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';
import { cx } from "class-variance-authority";
import { Button } from '@xyzproject/button'


/**
 * Defines the props that are passed to the Dropdown component.
 * @interface DropdownProps
 * @extends DropdownPrimitive.SelectProps
 * @property {(DropdownPrimitive.SelectItemProps & DropdownPrimitive.SelectItemTextProps)[]} [options] - The options to be displayed in the dropdown.
 */

interface DropdownProps extends DropdownPrimitive.SelectProps {
  options?: (DropdownPrimitive.SelectItemProps & DropdownPrimitive.SelectItemTextProps)[];
};
/**
 * The Dropdown component creates a dropdown menu that allows the user to select an option from a list.
 * @function Dropdown
 * @param {DropdownProps} props - The props passed to the Dropdown component.
 * @returns {JSX.Element} - Returns the Dropdown component as the JSX element.
 */
export function Dropdown({ defaultValue, options, ...props }: DropdownProps): JSX.Element {
  return (
    // The root dropdown component from @radix-ui/react-select library
    <DropdownPrimitive.Root defaultValue={defaultValue}>
      {/* The trigger button */}
      <DropdownPrimitive.Trigger asChild aria-label="Food">
        <Button>
          <DropdownPrimitive.Value />
          <DropdownPrimitive.Icon className="ml-2">
            <ChevronDownIcon />
          </DropdownPrimitive.Icon>
        </Button>
      </DropdownPrimitive.Trigger>
      {/* The dropdown content */}
      <DropdownPrimitive.Content>
        {/* The dropdown viewport */}
        <DropdownPrimitive.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
          {/* The dropdown options group */}
          <DropdownPrimitive.Group>
            {/* Mapping through the options array to create the dropdown items */}
            {options?.map((option) => (
              <DropdownPrimitive.Item
                disabled={option.disabled}
                key={option.id}
                value={option.value}
                className={cx(
                  'relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900',
                  'radix-disabled:opacity-50',
                  'focus:outline-none Dropdown-none',
                )}
              >
                <DropdownPrimitive.ItemText>{option.textValue}</DropdownPrimitive.ItemText>
                <DropdownPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                  <CheckIcon />
                </DropdownPrimitive.ItemIndicator>
              </DropdownPrimitive.Item>
            ))}
          </DropdownPrimitive.Group>
        </DropdownPrimitive.Viewport>
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Root>
  );
};
