import Image from 'next/image'

const LogoNavigation = () => {
    return (
        <Image
            id='logo'
            src={'/atMovie.svg'}
            alt={'@Movie'}
            width={56}
            height={14}
        />
    )
}

export default LogoNavigation