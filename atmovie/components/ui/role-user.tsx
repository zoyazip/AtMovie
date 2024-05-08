import { UserIcon } from './user-icon'

interface RoleUserProps {
    color: string,
    name: string,
    direction: string
}

export const RoleUser = ({color, name, direction}: RoleUserProps) => {
    return (
        <>
            <div className={`flex w-28 ${direction === "flex-col" ? " flex-col items-center justify-center" : "items-start"}`}>
                <UserIcon color={color}/>
                <p className='mx-2 font-medium'>{name}</p>
            </div>
        </>
    )
}