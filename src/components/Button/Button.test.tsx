import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', async () => {
    const { getByText } = render(<Button>Click me</Button>)
    await expect.element(getByText('Click me')).toBeInTheDocument()
  })

  it('applies primary intent styles by default', async () => {
    const { getByRole } = render(<Button>Primary</Button>)
    const btn = getByRole('button')
    await expect.element(btn).toHaveClass('bg-black')
    await expect.element(btn).toHaveClass('text-white')
  })

  it('applies secondary intent styles', async () => {
    const { getByRole } = render(<Button intent="secondary">Secondary</Button>)
    const btn = getByRole('button')
    await expect.element(btn).toHaveClass('bg-primary-200/80')
    await expect.element(btn).toHaveClass('text-black')
  })

  it('applies ghost intent styles', async () => {
    const { getByRole } = render(<Button intent="ghost">Ghost</Button>)
    const btn = getByRole('button')
    await expect.element(btn).toHaveClass('bg-none')
    await expect.element(btn).toHaveClass('text-black')
  })

  it('forwards additional props', async () => {
    const { getByTestId } = render(<Button data-testid="btn">Test</Button>)
    await expect.element(getByTestId('btn')).toBeInTheDocument()
  })

  it('renders as an anchor when href is provided', async () => {
    const { getByRole } = render(
      <Button href="https://example.com">Link</Button>,
    )
    const anchor = getByRole('link')
    await expect.element(anchor).toBeInTheDocument()
    await expect.element(anchor).toHaveAttribute('href', 'https://example.com')
  })

  it('forwards anchor props correctly', async () => {
    const { getByRole } = render(
      <Button href="https://example.com" target="_blank" rel="noopener">
        External
      </Button>,
    )
    const anchor = getByRole('link')
    await expect.element(anchor).toHaveAttribute('target', '_blank')
    await expect.element(anchor).toHaveAttribute('rel', 'noopener')
  })

  it('forwards button props correctly', async () => {
    const { getByRole } = render(
      <Button type="submit" disabled>
        Submit
      </Button>,
    )
    const btn = getByRole('button')
    await expect.element(btn).toHaveAttribute('type', 'submit')
    await expect.element(btn).toHaveAttribute('disabled')
  })

  it('renders children inside anchor', async () => {
    const { getByText } = render(
      <Button href="https://example.com">Anchor Child</Button>,
    )
    await expect.element(getByText('Anchor Child')).toBeInTheDocument()
  })
})
