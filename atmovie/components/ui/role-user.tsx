import { UserIcon } from './user-icon'

interface RoleUserProps {
    color: string,
    name: string,
    direction: string
}

export const RoleUser = ({color, name, direction}: RoleUserProps) => {
    return (
        <>
            <div className={`flex ${direction === "flex-col" ? " flex-col items-center justify-center" : "items-start"}`}>
                <UserIcon color={color}/>
                <p className='mx-2'>{name}</p>
            </div>
        </>
    )
}