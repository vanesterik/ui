import { Story } from '@ladle/react'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { Kbd } from '../Kbd/Kbd'
import { Input } from './Input'

export const Component: Story<ComponentProps<typeof Input>> = ({ error }) => {
  const [value, setValue] = useState('')
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        ref.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Input
      error={error}
      icon="snowflake"
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type something..."
      ref={ref}
      value={value}
    >
      <Kbd>⌘</Kbd>
      <Kbd>k</Kbd>
    </Input>
  )
}

Component.argTypes = {
  error: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
}
