// @ts-expect-error Text Component has some default props which are spreading into the component directly
// eslint-disable-next-line import/no-extraneous-dependencies
import { Text, textPropDefs } from '@radix-ui/themes';

type TextProps = typeof textPropDefs;

export interface ParagraphProps extends TextProps {
  children: React.ReactNode;
  className?: string;
}
export const Paragraph = (props: ParagraphProps) => {
  const { children } = props;
  return <Text {...props}>{children}</Text>;
};
