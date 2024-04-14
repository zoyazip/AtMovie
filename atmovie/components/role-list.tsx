import { Role } from './ui/role'

interface RoleListProps {
    roles: IRoleSimple[]
}

export const RoleList = ({roles}: RoleListProps) => {
    return (
        <>
            <div className="flex flex-wrap">
                {roles.map((role) => (
                    <>
                        <div key={role.roleId} className="text-sm">
                            <Role name={role.name} direction={"flex-col"} color={role.color}/>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}