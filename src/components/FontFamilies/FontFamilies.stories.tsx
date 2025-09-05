import type { PropsWithChildren } from 'react'
import { Card } from '~/components/Card'
import { Text } from '~/components/Text'

export const Families = () => (
  <div className="flex flex-col gap-0.5">
    <Card>
      <FontFamilyCard label="Heading">
        <span className="font-bold font-sans">Lausanne 700</span>
      </FontFamilyCard>
    </Card>
    <Card>
      <FontFamilyCard label="Body">
        <span className="font-normal font-sans">Lausanne 400</span>
      </FontFamilyCard>
    </Card>
    <Card>
      <FontFamilyCard label="Caption">
        <span className="font-normal font-mono">NB International Pro Mono</span>
      </FontFamilyCard>
    </Card>
  </div>
)

const FontFamilyCard = ({
  children,
  label,
}: PropsWithChildren<{ label: string }>) => (
  <Card>
    <div className="mb-3">
      <Text>{label}</Text>
    </div>
    <div className="text-3xl text-black dark:text-white">{children}</div>
  </Card>
)
