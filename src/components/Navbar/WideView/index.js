import React from 'react';
import styled from 'styled-components';
import { identity } from '@juan-utils/functions';

import Colors from '../../../utils/colors';
import LogoIcon from '../../LogoIcon';
import NoSelect from '../../NoSelect';
import Link from '../../Link';

const LinkContainer = styled.nav`
    margin: 6px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
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

const Links = () => (
    <LinkContainer>
        <Link to="/">¿Quiénes Somos?</Link>
        <NoSelect>|</NoSelect>
        <Link to="/">¿Qué hacemos?</Link>
        <NoSelect>|</NoSelect>
        <Link to="/">¿Cómo lo hacemos?</Link> 
        <NoSelect>|</NoSelect>
        <Link to="/">Rendición de Cuentas</Link> 
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