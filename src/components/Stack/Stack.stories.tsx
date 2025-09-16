import type { Story } from '@ladle/react'
import { ComponentProps } from 'react'
import { Card } from '../Card/Card'
import { Text } from '../Text/Text'
import { Stack } from './Stack'

export const Component: Story<ComponentProps<typeof Stack>> = ({
  direction,
  justify,
}) => (
  <Stack direction={direction} justify={justify}>
    {Array.from(Array(3).keys()).map((index) => (
      <Card key={index}>
        <Text intent="label">{`Item ${index}`}</Text>
      </Card>
    ))}
  </Stack>
)

Component.argTypes = {
  direction: {
    options: ['row', 'column'],
    control: { type: 'radio' },
    defaultValue: 'row',
  },
  justify: {
    options: ['start', 'end', 'between'],
    control: { type: 'select' },
    defaultValue: 'start',
  },
}
