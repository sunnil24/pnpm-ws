// eslint-disable-next-line import/no-extraneous-dependencies
import { TextArea, textAreaPropDefs } from '@radix-ui/themes';

type TextAreaPropDif = typeof textAreaPropDefs;

export interface TextAreaProps extends TextAreaPropDif {
  children: React.ReactNode;
  className?: string;
}

const TextAreaField: React.FC<TextAreaProps> = (props: TextAreaProps) => {
  const { children, className } = props;
  return (
    // @ts-expect-error Text Component has some default props which are spreading into the component directly
    <TextArea className={className} {...props}>
      {children}
    </TextArea>
  );
};

export default TextAreaField;
