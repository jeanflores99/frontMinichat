import React from 'react'

interface Iprops {
  children: JSX.Element
  Class?: string
}
export const Container = ({ children, Class }: Iprops) => (
  <div className={`w-full mx-auto max-w-7xl ${Class}`}>{children}</div>
)
