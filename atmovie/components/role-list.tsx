import { Role } from './ui/role'

interface RoleListProps {
    roles: IRole[]
}

export const RoleList = ({roles}: RoleListProps) => {
    return (
        <>
            <div className="flex flex-wrap">
                {roles.map((role) => (
                    <>
                        <div key={role.id} className="text-sm">
                            <Role name={role.name} direction={"flex-col"} color={role.color}/>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}