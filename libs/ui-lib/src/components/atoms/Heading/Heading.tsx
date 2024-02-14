// eslint-disable-next-line import/no-extraneous-dependencies
import { Heading, headingPropDefs } from '@radix-ui/themes';

type HeadingPropsDif = typeof headingPropDefs;

export interface HeadingProps extends HeadingPropsDif {
  children: React.ReactNode;
  className?: string;
}
const HeadingComponent = (props: HeadingProps) => {
  const { children } = props;
  // @ts-expect-error Text Component has some default props which are spreading into the component directly
  return <Heading {...props}>{children}</Heading>;
};

export default HeadingComponent;
