"use client"

import { Action } from './action'
import { ActionsBlock } from './actions-block'
import { CCBlock } from './cc-block'
import { RoleList } from './role-list'
import { SelectScrollable } from './ui/select-scrollable'
import { Video } from './ui/video'
import { PulpFiction } from '@/lib/PulpFiction'


const Films: IFilm[] = [
    PulpFiction,
]



export const MainPage = () => {
    return (
        <>
            <div className="w-svw h-svh z-40 flex flex-col">
                <div className="w-full h-fit bg-radial-bg flex justify-center">
                    <div className="video md:w-6/12">
                        <Video film={Films[0]}/>
                    </div>
                </div>
                <div className="actionZone h-full flex flex-col px-4 py-4 overflow-y-hidden md:px-12 md:py-8 md:flex-row md:items-start">
                        <div className="cc-zone h-1/2 md:h-full md:w-3/5">
                            <CCBlock film={Films[0]}/>
                        </div>
                        <div className="user-controllers justify-between flex flex-col pt-4 h-full md:pt-0 md:w-2/5 md:pl-4">
                            <div className="">
                                <SelectScrollable films={Films}/>
                                <RoleList cast={Films[0].cast}/>
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