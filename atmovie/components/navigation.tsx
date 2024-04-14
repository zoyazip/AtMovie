import LogoNavigation from './ui/logo-navigation'
import NavigationLink from './ui/navigation-link'
import { LinkTarget } from '../lib/enums'

const navigation = [
    {name: "How to", href: "#", current: false},
    {name: "About", href: "#", current: false}
]

const Navigation = () => {
    return (
        <>
            <div className="z-50 fixed flex justify-between items-center w-screen bg-black/99 px-4 py-4 md:px-12">
                <LogoNavigation />
                <div className='space-x-6'>
                    <NavigationLink href='#' target={LinkTarget.self}>How to</NavigationLink>
                    <NavigationLink href='#' target={LinkTarget.self}>About</NavigationLink>
                </div>
            </div>
        </>
    )
}

export default Navigation