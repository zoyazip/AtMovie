import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Role } from './role'

interface ScrollableAreaProps {
    film: IFilm
}

export function ScrollableArea({film}: ScrollableAreaProps) {
  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Roles</h4>
        {film.fullReplicaText.map((role) => (

            <div key={role.id} className="text-sm">
              <Role key={role.id} name={film.cast[role.castId].name} text={role.fullRelicaText} color={film.cast[role.castId].color} direction={"flex-row"} />
            </div>

        ))}
      </div>
    </ScrollArea>
  )
}
