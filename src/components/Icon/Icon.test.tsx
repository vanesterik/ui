import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders with default classes', async () => {
    const { container } = render(<Icon />)
    const icon = container.querySelector('div')
    await expect.element(icon).toHaveClass('font-icon')
    await expect.element(icon).toHaveClass('text-base')
    await expect.element(icon).toHaveClass('text-black')
    await expect.element(icon).toHaveClass('dark:text-white')
  })

  it('applies sun variant', async () => {
    const { container } = render(<Icon name="sun" />)
    const icon = container.querySelector('div')
    await expect.element(icon).toHaveClass("before:content-['1']")
  })

  it('applies moon variant', async () => {
    const { container } = render(<Icon name="moon" />)
    const icon = container.querySelector('div')
    await expect.element(icon).toHaveClass("before:content-['2']")
  })

  it('applies snowflake variant', async () => {
    const { container } = render(<Icon name="snowflake" />)
    const icon = container.querySelector('div')
    await expect.element(icon).toHaveClass("before:content-['3']")
  })
})
