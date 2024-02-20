/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryObj, StoryFn } from '@storybook/react'
import HeadingComponent from './index'
import '@radix-ui/themes/styles.css'
import { HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: HeadingComponent,
} as Meta<typeof HeadingComponent>

type Story = StoryObj<typeof HeadingComponent>

const Template: StoryFn<HeadingProps> = (args) => <HeadingComponent {...args} />

export const Default: Story = {
  args: {
    children:
      'Default Heading just passing the text as in composition children pattern ',
  },
  render: Template,
}

export const CustomColor: Story = {
  args: {
    children:
      'While passing size prop you can use any size from the theme from 1 -6',
    color: 'red',
  },
  render: Template,
}

const weightVariations = ['regular', 'medium', 'bold']
export const TextWeight: StoryFn = () => (
  <div className='flex-wrap flex flex-col gap-md'>
    {weightVariations.map((weight) => (
      <HeadingComponent key={weight} weight={weight}>
        Heading {weight}
        <br></br>
        <br></br>
        Lorem Ipsum is simply dummy text of the printing
      </HeadingComponent>
    ))}
  </div>
)

const sizeVariations = ['1', '2', '3', '4', '5', '6']
export const TextSizes: StoryFn = () => (
  <div className='flex-wrap flex flex-col gap-md'>
    {sizeVariations.map((size) => (
      <HeadingComponent key={size} size={size}>
        Heading Size {size}
        <br></br>
        <br></br>
        Lorem Ipsum is simply dummy text of the printing
      </HeadingComponent>
    ))}
  </div>
)

const alignVariations = ['left', 'center', 'right']
export const TextAlign: StoryFn = () => (
  <div className='flex-wrap flex flex-col gap-md'>
    {alignVariations.map((align) => (
      <HeadingComponent key={align} align={align}>
        Heading {align}
      </HeadingComponent>
    ))}
  </div>
)

const headingSize: Array<'heading' | 'subheading' | 'section-heading'> = [
  'heading',
  'subheading',
  'section-heading',
]
export const HeadingSize: StoryFn = () => (
  <div className='flex-wrap flex flex-col gap-md'>
    {headingSize.map((hSize) => (
      <HeadingComponent key={hSize} headingLevel={hSize}>
        Heading {hSize}
      </HeadingComponent>
    ))}
  </div>
)
