import { ReactNode } from 'react'

interface Iprops {
  condition: boolean
  children: JSX.Element
  isDefault?: JSX.Element
}
export const Show = ({ children, condition, isDefault }: Iprops) =>
  condition ? children : isDefault || null
