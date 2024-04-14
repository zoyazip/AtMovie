import { Role } from './ui/role'
import { ScrollableArea } from './ui/scrollable-area'

interface CCBlockProps {
    roles: IRole[]
}

export const CCBlock = ({roles}: CCBlockProps) => {

    return (
        <>
            <ScrollableArea roles={roles}/>
        </>
    )
}