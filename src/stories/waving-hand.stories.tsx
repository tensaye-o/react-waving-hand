import { ComponentStory, ComponentMeta } from '@storybook/react'

import { WavingHand } from '../components/waving-hand'

export default {
  title: 'Wave Hand',
  component: WavingHand,
  argTypes: {
    size: {
      defaultValue: '2.5rem',
      control: { type: 'text' }
    },
    type: {
      options: [1, 2, 3, 4, 5, 6],
      defaultValue: 3,
      control: { type: 'select' }
    },
    motion: {
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean' }
    },
    loop: {
      defaultValue: 0,
      control: { type: 'number', min: 0 }
    }
  }
} as ComponentMeta<typeof WavingHand>

const Template: ComponentStory<typeof WavingHand> = (args) => <WavingHand {...args} />

export const Base = Template.bind({})
Base.args = {}
