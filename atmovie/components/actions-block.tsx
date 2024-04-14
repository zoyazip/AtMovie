import { ReactNode } from 'react'

interface ActionsBlockProps {
    children: ReactNode;
}

export const ActionsBlock = ({ children }: ActionsBlockProps) => {
    return (
        <>
            {children}
        </>
    )
}