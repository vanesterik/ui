import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Card } from './Card'

describe('Card', () => {
  it('renders children', async () => {
    const { getByText } = render(<Card>Card</Card>)
    await expect.element(getByText('Card')).toBeInTheDocument()
  })

  it('applies primary intent styles by default', async () => {
    const { getByText } = render(<Card>Primary</Card>)
    const card = getByText('Primary')
    await expect.element(card).toHaveClass('bg-primary-100')
    await expect.element(card).toHaveClass('dark:bg-primary-900')
  })

  it('applies ghost intent styles', async () => {
    const { getByText } = render(<Card intent="ghost">Ghost</Card>)
    const card = getByText('Ghost')
    await expect.element(card).toHaveClass('p-3')
    await expect.element(card).toHaveClass('rounded')
  })

  it('forwards additional props', async () => {
    const { getByTestId } = render(<Card data-testid="card">Test</Card>)
    await expect.element(getByTestId('card')).toBeInTheDocument()
  })
})
