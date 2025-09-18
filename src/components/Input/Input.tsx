import { cva, type VariantProps } from 'class-variance-authority'
import {
  type ComponentProps,
  forwardRef,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from 'react'
import { Icon } from '../Icon/Icon'

const input = cva(
  [
    'border',
    'border-primary-200',
    'flex',
    'flex-row',
    'gap-x-1',
    'h-8',
    'items-center',
    'p-1',
    'rounded',
    'focus-within:border-primary-500',
    'dark:border-primary-800',
    'dark:text-white',
  ],
  {
    variants: {
      error: {
        true: [
          'border-red-500',
          'focus-within:border-red-500',
          'dark:border-red-900',
          'dark:focus-within:border-red-900',
        ],
      },
    },
  },
)

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> &
  PropsWithChildren<{
    icon?: ComponentProps<typeof Icon>['name']
  }>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, error, icon, ...props }, ref) => (
    <div className={input({ error })}>
      {icon && <Icon name={icon} />}
      <input
        ref={ref}
        className="border-none font-mono font-normal text-xs focus:outline-none focus:ring-0 flex-1 bg-transparent"
        {...props}
      />
      {children}
    </div>
  ),
)
