interface NavigationLinkProps {
    children: React.ReactNode,
    href: string,
    target: string,
    onClick?: () => {}
}

const NavigationLink = ({children, href, target, onClick}: NavigationLinkProps) => {
    return (
        <a className='text-white hover:font-medium' href={href} target={target}>{children}</a>
    )
}

export default NavigationLink