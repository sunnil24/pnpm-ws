import React from 'react'
import { Card as RadixCard } from '@radix-ui/themes'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    // @ts-ignore
    <RadixCard
      // @ts-ignore
      size={1}
      variant='ghost'
      className={`${className} p-3.5 bg-white rounded-none border border-[--card-border]`}
    >
      {children}
    </RadixCard>
  )
}
