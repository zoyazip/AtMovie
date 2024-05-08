import { Role } from './ui/role'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface RoleListProps {
    roles: IRoleSimple[]
}

export const RoleList = ({roles}: RoleListProps) => {
    return (
        <div className="roleList my-4">
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Cast" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {roles.map((role) => (
                        <>
                            <div key={role.roleId} className="text-sm">
                                <SelectItem value={role.name}>
                                    <Role name={role.name} direction={"flex-row"} color={role.color}/>
                                </SelectItem>
                            </div>
                        </>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
        </div>
    )
}