import React from 'react'
import Colors from '../../utils/colors';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { useDeviceType, isLaptop} from '../../utils';
import { identity } from '@juan-utils/functions';
import HamburgerButton from '../HamburgerButton';

const NavbarComponent = styled.nav`
    display: grid;
    ${ props => 
        props.wide ? 
            "grid-template-columns: 1fr 2fr 1fr":
            "grid-template-columns: 1fr 3fr 1fr"
    };
    background-color: ${Colors.Black.hexString()};
    position: fixed;
    width: 100%;
    min-height: 75px;
    color: ${Colors.White.hexString()};
    font-weight: normal;
`

const PlaceholderIcon = styled.div`
    width: 40px;
    height: 40px;
    margin: 6px 12px;
    background-color: ${Colors.Primary.hexString()};
`

const WideLogoContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    font-weight: bold;
    color: ${Colors.Primary.hexString()};
    cursor: pointer;
    user-select: none;
`

const NarrowLogoContainer = styled(WideLogoContainer)`
    justify-content: center;
`

const LinkContainer = styled.div`
    margin: 6px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
` 

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0px 6px;
    color: ${Colors.White.hexString()}
`

const LinkStyle = styled.a`
    padding: 6px;
    color: inherit;
    text-decoration: none;
    font-size: 1.17em;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const Link = ({ to , children }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(to);
    }
    return <LinkStyle onClick={handleClick}>{children}</LinkStyle>
}

const Links = () => (
    <LinkContainer>
        <LinkWrapper>
            <Link to="/">Quienes Somos?</Link>
        </LinkWrapper>
        <div>|</div>
        <LinkWrapper>
            <Link to="/">Que hacemos?</Link>
        </LinkWrapper>
        <div>|</div>
        <LinkWrapper>
            <Link to="/">Como lo hacemos?</Link> 
        </LinkWrapper>
        <div>|</div>
        <LinkWrapper>
            <Link to="/">Rendicion de Cuentas</Link> 
        </LinkWrapper>
    </LinkContainer>
)

const WideLogo = ({ onClick=identity }) => {
    return <WideLogoContainer onClick={onClick} >
        {/**This is where the icon will be*/}
        <PlaceholderIcon />
        <h2>
            Fundación Latir
        </h2>
    </WideLogoContainer>
}

const NarrowLogo = ({ onClick=identity }) => {
    return <NarrowLogoContainer onClick={onClick} >
        {/**This is where the icon will be*/}
        <PlaceholderIcon />
    </NarrowLogoContainer>
}

const WideView = () => {
    return (
        <>
            <WideLogo />
            <Links />
        </>
    )
}

const HamburgerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const NarrowView = () => {
    return <>
        <HamburgerContainer>
            <HamburgerButton />
        </HamburgerContainer>
        <NarrowLogo />
    </>
}

const Navbar = () => {
    const device = useDeviceType();
    const laptop = isLaptop(device)
    return (
        <NavbarComponent wide={laptop}>
            { 
                laptop ? 
                <WideView />
                :
                <NarrowView />
            }
        </NavbarComponent>
    )
}

export default Navbar