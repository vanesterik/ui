import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Input } from './Input'

describe('Input', () => {
  it('renders an input element', () => {
    const { getByRole } = render(<Input />)
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  it('forwards props to the input element', () => {
    const { getByRole } = render(
      <Input placeholder="Type here" data-testid="my-input" />,
    )
    const input = getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', 'Type here')
  })

  it('renders children inside the wrapper', () => {
    const { getByText } = render(<Input>Extra</Input>)
    expect(getByText('Extra')).toBeInTheDocument()
  })

  it('renders the icon when icon prop is provided', () => {
    const { container } = render(<Input icon="moon" />)
    expect(container.querySelector('.font-icon')).toBeInTheDocument()
  })

  it('applies error styles when error prop is true', () => {
    const { container } = render(<Input error />)
    expect(container.querySelector('.border-red-200')).toBeInTheDocument()
    expect(
      container.querySelector('.focus-within\\:border-red-500'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('.dark\\:border-red-800'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('.dark\\:focus-within\\:border-red-500'),
    ).toBeInTheDocument()
  })

  it('forwards ref to the input element', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Input ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
