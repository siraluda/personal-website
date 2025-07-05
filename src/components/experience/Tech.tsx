import { faCertificate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { PropsWithChildren } from "react"

interface TechProps {
    name: string
}
const Tech: React.FC<PropsWithChildren<TechProps>> = ({name}) => {
  return (
    <div className="flex flex-row gap-2 justify-start items-center">
        <FontAwesomeIcon icon={faCertificate}/>
        <p className="font-bold text-sm sm:text-lg">{name}</p>
    </div>
  )
}

export default Tech