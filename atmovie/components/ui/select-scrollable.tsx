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

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select movie" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Thriller</SelectLabel>
          <SelectItem value="pulp fiction">Pulp Fiction</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
