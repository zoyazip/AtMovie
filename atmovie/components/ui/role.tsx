import { RoleUser } from './role-user'

interface RoleProps {
    name: string,
    text?: string,
    color: string,
    direction: string
}

export const Role = ({name, text, color, direction}: RoleProps) => {

    

    return (
        <>
            <div className={`flex items-start py-4`}>
                <div className={`role`} >
                    <RoleUser name={name} direction={direction} color={color}/>
                </div>
                <div className="role-text mx-4">
                    {text}
                </div>
            </div>
        </>
    )
}