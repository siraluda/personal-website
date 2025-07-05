import React, { type PropsWithChildren } from 'react'

interface SectionProps {
    id: string
    classname: string
}
const Section: React.FC<PropsWithChildren<SectionProps>> = ({id, children, classname}) => {
  return (
    <section id={id} className={`${classname} gap-10 md:gap-15 sm:mx-[10rem] min-h-screen`}>
        {children}
    </section>
  )
}

export default Section