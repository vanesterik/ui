import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

const text = cva([], {
  variants: {
    intent: {
      footnote: [
        'font-mono',
        'font-normal',
        'text-primary-300',
        'text-xs',
        'uppercase',
        'dark:text-primary-700',
      ],
      label: [
        'font-mono',
        'font-normal',
        'text-black',
        'text-xs',
        'uppercase',
        'dark:text-white',
      ],
      link: [
        'font-mono',
        'text-black',
        'text-xs',
        'uppercase',
        'hover:text-secondary-500',
        'dark:text-white',
        'dark:hover:text-secondary-500',
      ],
    },
  },
  defaultVariants: {
    intent: 'label',
  },
})

type TextProps = {
  tag?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span'
} & VariantProps<typeof text> &
  HTMLAttributes<HTMLElement>

export const Text = ({
  children,
  className,
  tag = 'div',
  intent,
  ...props
}: TextProps) => {
  const Component = tag
  return (
    <Component className={clsx(text({ intent }), className)} {...props}>
      {children}
    </Component>
  )
}
