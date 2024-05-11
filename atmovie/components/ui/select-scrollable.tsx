import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface MovieSelectorProps {
  films: IFilm[]
}

export const SelectScrollable = ({films}: MovieSelectorProps) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select movie" />
      </SelectTrigger>
      <SelectContent>
        {films.map((film, id) => (
          <SelectGroup key={id}>
            <SelectLabel>{film.genre}</SelectLabel>
            <SelectItem value={film.name}>{film.name}</SelectItem>
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}
