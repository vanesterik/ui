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
})
