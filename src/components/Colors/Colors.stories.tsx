import clsx from 'clsx'
import { Card } from '~/components/Card'
import { Text } from '~/components/Text'

export const Palette = () => (
  <div className="grid grid-cols-5 gap-0.5">
    {[
      'bg-primary-50',
      'bg-primary-100',
      'bg-primary-200',
      'bg-primary-300',
      'bg-primary-400',
      'bg-primary-500',
      'bg-primary-600',
      'bg-primary-700',
      'bg-primary-800',
      'bg-primary-900',
      'bg-secondary-50',
      'bg-secondary-100',
      'bg-secondary-200',
      'bg-secondary-300',
      'bg-secondary-400',
      'bg-secondary-500',
      'bg-secondary-600',
      'bg-secondary-700',
      'bg-secondary-800',
      'bg-secondary-900',
    ].map((color) => (
      <Card className={clsx('pt-34', color)} key={color} intent="ghost">
        <Text tag="span" className="bg-black text-white p-0.5">
          {color.substring(3)}
        </Text>
      </Card>
    ))}
  </div>
)
