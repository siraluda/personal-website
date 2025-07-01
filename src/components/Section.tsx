import React, { type PropsWithChildren } from 'react'

interface SectionProps {
    id: string
}
const Section: React.FC<PropsWithChildren<SectionProps>> = ({id, children}) => {
  return (
    <section id={id} className='flex flex-col md:flex-row justify-center gap-10 md:gap-15 items-center mx-[10rem] pt-10'>
        {children}
    </section>
  )
}

export default Section