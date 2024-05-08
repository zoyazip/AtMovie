"use client"

import { Action } from './action'
import { ActionsBlock } from './actions-block'
import { CCBlock } from './cc-block'
import { RoleList } from './role-list'
import { SelectScrollable } from './ui/select-scrollable'
import { Video } from './ui/video'

const ccPlaceholder: IRole[] = [
        {
            id: 0,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. And I will strike down upon thee with great vengeance and furious anger, those who attempt to poison and destroy my brothers."
        },
        {
            id: 1,
            roleId: 2,
            name: "Vincent",
            colorName: "user-blue",
            color: "#4A7CFF",
            text: "You know what they call a quarter pounder with cheese in Paris?"
        },
        {
            id: 2,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "What do they call it?"
        },
        {
            id: 3,
            roleId: 2,
            name: "Vincent",
            colorName: "user-blue",
            color: "#4A7CFF",
            text: "Royale with cheese."
        },
        {
            id: 4,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "Royale with cheese."
        },
        {
            id: 5,
            roleId: 3,
            name: "Winston",
            colorName: "user-yellow",
            color: "#FFD600",
            text: "You got a corpse in a car, minus a head in a garage. Take me to it."
        },
        {
            id: 6,
            roleId: 4,
            name: "Marsellus",
            colorName: "user-green",
            color: "#A7FE50",
            text: "Mother."
        },
        {
            id: 7,
            roleId: 5,
            name: "Fabienne",
            colorName: "user-pink",
            color: "#FF71CF",
            text: "Who's Zed?"
        },
        {
            id: 8,
            roleId: 6,
            name: "Butch",
            colorName: "user-orange",
            color: "#FFB443",
            text: "Zed's dead, baby. Get in. Zed's dead."
        },
        {
            id: 9,
            roleId: 7,
            name: "Honey",
            colorName: "user-violet",
            color: "#7749FA",
            text: "I love you, pumpkin."
        },
        {
            id: 10,
            roleId: 8,
            name: "Lance",
            colorName: "user-cyan",
            color: "#57ECE3",
            text: "I love you, Honey Bunny. Everybody be cool. This is a robbery."
        },
        {
            id: 11,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "What's Fonsy like?"
        },
        {
            id: 12,
            roleId: 7,
            name: "Honey",
            colorName: "user-violet",
            color: "#7749FA",
            text: "Cool."
        },
        {
            id: 11,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "Correctomundo. And that's what we're going to be. We're going to be cool."
        },
    ]

    const getUniqueRoles = (roles: IRole[]) => {
        const roleIdSet = new Set<number>()
        const uniqueRoles: IRoleSimple[] = []

        for (const role of roles) {
            if (!roleIdSet.has(role.roleId)) {
                roleIdSet.add(role.roleId)
                const uniqueRole = {
                    name: role.name,
                    color: role.color,
                    roleId: role.roleId
                }
                uniqueRoles.push(uniqueRole)
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