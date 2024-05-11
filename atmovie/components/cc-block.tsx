import { ScrollableArea } from './ui/scrollable-area'

interface CCBlockProps {
    film: IFilm
}

export const CCBlock = ({ film }: CCBlockProps) => {
    return (
        <>
            <ScrollableArea film={film}/>
        </>
    )
}