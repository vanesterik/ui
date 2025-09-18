import { cva, type VariantProps } from 'class-variance-authority'

const icon = cva(['font-icon', 'text-base', 'text-black', 'dark:text-white'], {
  variants: {
    name: {
      sun: "before:content-['1']",
      moon: "before:content-['2']",
      snowflake: "before:content-['3']",
    },
  },
})

export const Icon = ({ name }: VariantProps<typeof icon>) => (
  <div className={icon({ name })} />
)
