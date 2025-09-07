import type { ComponentProps } from 'react'
import { Button } from './Button'

export const Collection = () => (
  <div className="flex flex-row gap-x-0.5">
    {['primary', 'secondary', 'ghost'].map((variant) => (
      <Button
        key={variant}
        intent={variant as ComponentProps<typeof Button>['intent']}
      >
        {variant}
      </Button>
    ))}
    <Button href="#" intent="ghost">
      Link
    </Button>
  </div>
)
