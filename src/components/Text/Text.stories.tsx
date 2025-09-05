import type { Story } from '@ladle/react'
import type { ComponentProps } from 'react'
import { Text } from './Text'

export const Component: Story<ComponentProps<typeof Text>> = ({
  tag: element = 'div',
  intent = 'label',
}) => (
  <Text tag={element} intent={intent}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Text>
)

Component.argTypes = {
  tag: {
    control: { type: 'select' },
    options: ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'p', 'div'],
  },
  intent: {
    control: { type: 'select' },
    options: ['footnote', 'label', 'link'],
  },
}
