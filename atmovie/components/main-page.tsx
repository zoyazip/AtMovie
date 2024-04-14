"use client"

import { Action } from './action'
import { ActionsBlock } from './actions-block'
import { CCBlock } from './cc-block'
import { RoleList } from './role-list'
import { SelectScrollable } from './ui/select-scrollable'
import { Video } from './ui/video'

const ccPlaceholder: IRole[] = [
        {
            "id": 0,
            "roleId": 1,
            "name": "Kuzya",
            "color": "#FF5C5C",
            "text": "Lorem ipsum dolor sit amet consectetur. Sed semper nunc in mattis urna aliquam. Donec sed suspendisse sed pharetra ut lectus nunc vel sollicitudin. Sed varius nulla urna lectus tellus condimentum vehicula pellentesque pulvinar. Natoque sed purus sagittis at vestibulum facilisi nisl."
        },
        {
            "id": 1,
            "roleId": 2,
            "name": "Maria",
            "color": "#4A7CFF",
            "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        {
            "id": 2,
            "roleId": 3,
            "name": "Adolf",
            "color": "#FFD600",
            "text": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
        },
        {
            "id": 3,
            "roleId": 4,
            "name": "Lucy",
            "color": "#A7FE50",
            "text": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        },
        {
            "id": 4,
            "roleId": 3,
            "name": "Adolf",
            "color": "#FFD600",
            "text": "Et harum quidem rerum facilis est et expedita distinctio."
        },
    ]

    const getUniqueRoles = (roles: IRole[]) => {
        const roleIdSet = new Set<number>()
        const uniqueRoles: IRole[] = []

        for (const role of roles) {
            if (!roleIdSet.has(role.roleId)) {
                roleIdSet.add(role.roleId)
                uniqueRoles.push(role)
            }
        }
        return uniqueRoles
    }

export const MainPage = () => {
    return (
        <>
            <div className="w-svw h-svh z-40 flex flex-col">
                <div className="w-full h-fit bg-radial-bg flex justify-center">
                    <div className="video md:w-6/12">
                        <Video />
                    </div>
                </div>
                <div className="actionZone h-full flex flex-col px-4 py-4 overflow-y-hidden md:px-12 md:py-8 md:flex-row md:items-start">
                        <div className="cc-zone h-1/2 md:h-full md:w-3/5">
                            <CCBlock roles={ccPlaceholder}/>
                        </div>
                        <div className="user-controllers justify-between flex flex-col pt-4 h-full md:pt-0 md:w-2/5 md:pl-4">
                            <div className="">
                                <SelectScrollable />
                                <RoleList roles={getUniqueRoles(ccPlaceholder)}/>
                            </div>
                            <div className="flex justify-around pb-4 md:pb-0 md:justify-normal">
                                <ActionsBlock>
                                    <Action imageSrc={"./record.svg"} callback={() => console.log("record")}/>
                                    <Action imageSrc={"./start.svg"} callback={() => console.log("start")}/>
                                    <Action imageSrc={"./download.svg"} callback={() => console.log("download")}/>
                                </ActionsBlock>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}