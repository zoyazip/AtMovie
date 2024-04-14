import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Role } from './role'

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

interface ScrollableAreaProps {
    roles: IRole[]
}

export function ScrollableArea({roles}: ScrollableAreaProps) {
  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Roles</h4>
        {roles.map((role) => (
          <>
            <div key={role.id} className="text-sm">
              <Role name={role.name} text={role.text} color={role.color} direction={"flex-row"} />
            </div>
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
