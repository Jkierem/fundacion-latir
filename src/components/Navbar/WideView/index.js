import React from 'react';
import styled from 'styled-components';
import { identity } from '@juan-utils/functions';
import { useHistory } from 'react-router-dom';

import Colors from '../../../utils/colors';
import LogoIcon from '../../LogoIcon';
import NoSelect from '../../NoSelect';

const LinkContainer = styled.nav`
    margin: 6px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
` 

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 6px;
    color: ${Colors.White.hexString()}
`

const LinkStyle = styled.a`
    padding: 6px;
    color: inherit;
    text-decoration: none;
    font-size: 1em;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
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
            <Link to="/">¿Quiénes Somos?</Link>
        </LinkWrapper>
        <NoSelect>|</NoSelect>
        <LinkWrapper>
            <Link to="/">¿Qué hacemos?</Link>
        </LinkWrapper>
        <NoSelect>|</NoSelect>
        <LinkWrapper>
            <Link to="/">¿Cómo lo hacemos?</Link> 
        </LinkWrapper>
        <NoSelect>|</NoSelect>
        <LinkWrapper>
            <Link to="/">Rendición de Cuentas</Link> 
        </LinkWrapper>
    </LinkContainer>
)

const WideLogo = ({ onClick=identity }) => {
    return <WideLogoContainer onClick={onClick} >
        {/**This is where the icon will be*/}
        <LogoIcon />
        <h2>
            Fundación Latir
        </h2>
    </WideLogoContainer>
}

const WideView = () => {
    return (
        <>
            <WideLogo />
            <Links />
        </>
    )
}

export default WideView;