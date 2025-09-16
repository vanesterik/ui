import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Kbd } from './Kbd'

describe('Kbd', () => {
  it('renders children inside a <kbd> element', () => {
    const { getByText } = render(<Kbd>⌘</Kbd>)
    expect(getByText('⌘')).toBeInTheDocument()
  })

  it('applies the correct class names', () => {
    const { container } = render(<Kbd>Ctrl</Kbd>)
    expect(container.querySelector('.bg-primary-100')).toBeInTheDocument()
    expect(container.querySelector('.border')).toBeInTheDocument()
    expect(container.querySelector('.font-mono')).toBeInTheDocument()
    expect(container.querySelector('.rounded')).toBeInTheDocument()
  })
})
