import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

const card = cva(['p-3', 'rounded'], {
  variants: {
    intent: {
      primary: ['bg-primary-100', 'dark:bg-primary-900'],
      ghost: [],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
})

type CardProps = VariantProps<typeof card> & HTMLAttributes<HTMLDivElement>

export const Card = ({ children, intent, className, ...props }: CardProps) => (
  <div className={clsx(card({ intent }), className)} {...props}>
    {children}
  </div>
)
