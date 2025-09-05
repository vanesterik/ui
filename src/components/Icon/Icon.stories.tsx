import type { ComponentProps } from 'react'
import { Card } from '~/components/Card'
import { Text } from '~/components/Text'
import { Icon } from './Icon'

export const Collection = () => (
  <div className="grid grid-cols-5 gap-0.5">
    {['moon', 'snowflake', 'sun'].map((name) => (
      <Card key={name}>
        <div className="flex flex-row items-center gap-x-1">
          <Icon name={name as ComponentProps<typeof Icon>['name']} />
          <Text>{name}</Text>
        </div>
      </Card>
    ))}
  </div>
)
