import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { PropsWithChildren } from 'react'

interface BadgeProps {
    icon: IconDefinition
    title: string
}
const Badge: React.FC<PropsWithChildren<BadgeProps>> = ({ icon, title, children}) => {
  return (
    <div className='flex flex-col items-center grow p-5 border-1 border-gray-300 rounded-4xl'>
        <FontAwesomeIcon icon={icon} className='text-xl'/>
        <p className='my-3 font-bold text-lg'>{title}</p>
        {children}
    </div>
  )
}

export default Badge