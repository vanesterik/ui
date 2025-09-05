import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Text } from './Text'

describe('Text', () => {
  it('renders children', async () => {
    const { getByText } = render(<Text>Text content</Text>)
    await expect.element(getByText('Text content')).toBeInTheDocument()
  })

  it('renders with default tag and intent styles', async () => {
    const { getByText } = render(<Text>Default</Text>)
    const el = getByText('Default')
    await expect.element(el).toHaveClass('font-mono')
    await expect.element(el).toHaveClass('font-normal')
    await expect.element(el).toHaveClass('text-black')
    await expect.element(el).toHaveClass('text-xs')
    await expect.element(el).toHaveClass('uppercase')
    await expect.element(el).toHaveClass('dark:text-white')
  })

  it('applies footnote intent styles', async () => {
    const { getByText } = render(<Text intent="footnote">Footnote</Text>)
    const el = getByText('Footnote')
    await expect.element(el).toHaveClass('text-primary-300')
    await expect.element(el).toHaveClass('dark:text-primary-700')
  })

  it('applies link intent styles', async () => {
    const { getByText } = render(<Text intent="link">Link</Text>)
    const el = getByText('Link')
    await expect.element(el).toHaveClass('hover:text-secondary-500')
    await expect.element(el).toHaveClass('dark:text-white')
    await expect.element(el).toHaveClass('dark:hover:text-secondary-500')
  })

  it('renders with custom tag', async () => {
    const { getByText } = render(<Text tag="span">Span</Text>)
    const el = getByText('Span')
    await expect.element(el).toBeInTheDocument()
  })

  it('forwards additional props', async () => {
    const { getByTestId } = render(<Text data-testid="custom-text">Test</Text>)
    await expect.element(getByTestId('custom-text')).toBeInTheDocument()
  })
})
