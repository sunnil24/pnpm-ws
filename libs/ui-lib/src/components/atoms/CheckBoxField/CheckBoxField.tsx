// eslint-disable-next-line import/no-extraneous-dependencies
import { Checkbox, checkboxPropDefs } from '@radix-ui/themes';

type CheckboxDif = typeof checkboxPropDefs;

export interface CheckboxProps extends CheckboxDif {
  className?: string;
}
const CheckboxField = (props: CheckboxProps) => {
  // @ts-expect-error Text Component has some default props which are spreading into the component directly
  return <Checkbox {...props} />;
};

export default CheckboxField;
