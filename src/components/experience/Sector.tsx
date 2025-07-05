import type { PropsWithChildren } from "react"

interface SectorProps {
    title: string
}
const Sector: React.FC<PropsWithChildren<SectorProps>> = ({title, children}) => {
  return (
    <div className='flex flex-col flex-wrap items-center grow p-5 border-1 border-gray-300 rounded-4xl min-h-[300px] min-w-[350px] sm:w-[600px]'>
        <p className="font-extrabold text-lg sm:text-2xl text-gray-600 mb-5 tracking-wide">{title}</p>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
        {children}
        </div>
    </div>
  )
}

export default Sector