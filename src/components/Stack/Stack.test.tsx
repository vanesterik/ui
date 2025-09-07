import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Card } from '../Card/Card'
import { Text } from '../Text/Text'
import { Stack } from './Stack'

const Content = () => (
  <>
    {Array.from(Array(3).keys()).map((index) => (
      <Card key={index}>
        <Text intent="label">{`Item ${index}`}</Text>
      </Card>
    ))}
  </>
)

describe('Stack', () => {
  it('renders children', async () => {
    const { getByTestId } = render(
      <Stack data-testid="stack">
        <Content />
      </Stack>,
    )
    await expect.element(getByTestId('stack')).toBeInTheDocument()
  })

  it('applies default direction (column)', async () => {
    const { getByTestId } = render(
      <Stack data-testid="stack">
        <Content />
      </Stack>,
    )
    await expect
      .element(getByTestId('stack'))
      .toHaveClass('flex', 'flex-col', 'gap-y-0.5')
  })

  it('applies row direction', async () => {
    const { getByTestId } = render(
      <Stack direction="row" data-testid="stack">
        <Content />
      </Stack>,
    )
    await expect
      .element(getByTestId('stack'))
      .toHaveClass('flex', 'flex-row', 'gap-x-0.5')
  })

  it('applies justify props', async () => {
    const { getByTestId } = render(
      <Stack justify="end" data-testid="stack">
        <Content />
      </Stack>,
    )
    await expect.element(getByTestId('stack')).toHaveClass('justify-end')
  })

  it('applies compound variant for row + between', async () => {
    const { getByTestId } = render(
      <Stack direction="row" justify="between" data-testid="stack">
        <Content />
      </Stack>,
    )
    await expect
      .element(getByTestId('stack'))
      .toHaveClass('flex-row', 'justify-between', 'gap-x-0')
    // await expect.element(getByTestId('stack')).not.toHaveClass('gap-x-0.5')
  })

  it('applies compound variant for column + between', async () => {
    const { getByTestId } = render(
      <Stack direction="column" justify="between" data-testid="stack">
        <Content />
      </Stack>,
    )
    await expect
      .element(getByTestId('stack'))
      .toHaveClass('flex-col', 'justify-between', 'gap-y-0')
    // await expect.element(getByTestId('stack')).not.toHaveClass('gap-y-0.5')
  })
})
