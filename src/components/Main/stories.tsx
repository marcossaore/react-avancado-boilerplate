import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default title',
    description: 'Default description'
  }
} as Meta

// export const Basic: Story = (args) => <Main {...args} />

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Basic title',
  description: 'Basic description'
}

// export const Default: Story = (args) => <Main {...args} />
// Default.args = {
//   title: 'React Avançado!!!!',
//   description: 'TypeScript, ReactJS, NextJS e Styled Components, cool'
// }
