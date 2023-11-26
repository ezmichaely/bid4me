import React from 'react'

interface TagCardProperties {
  title?: string,
  icon?: JSX.Element,
  tagline?: string,
}

export default function TagCard({ title, icon, tagline }: TagCardProperties) {
  return (
    <div className='flex justify-start items-center flex-col gap-4 border border-primary p-3 bg-gray-100'>
      <h3 className='text-center font-bold uppercase text-accent dark:text-accent-foreground text-base whitespace-nowrap'>{title}</h3>
      <div className='flex justify-center items-center'>{icon}</div>
      <p className='text-secondary text-xs text-center'>{tagline}</p>
    </div>
  )
}
