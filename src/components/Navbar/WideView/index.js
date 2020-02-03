import React from 'react';
import styled from 'styled-components';
import { identity } from '@juan-utils/functions';
import { useHistory } from 'react-router-dom'


import Colors from '../../../utils/colors';
import NoSelect from '../../NoSelect';
import Link from '../../Link';
import logo from "../../../resources/images/relogoslatir/512x512px_blanco.svg";
import Icon from "../../Icon";

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
        <Link to="/what-is-latir">¿Qué es Latir?</Link>
        <NoSelect>|</NoSelect>
        <Link to="/our-projects">Nuestros Proyectos</Link>
        <NoSelect>|</NoSelect>
        <Link to="/how-to-participate">¿Cómo participar?</Link>
        <NoSelect>|</NoSelect>
        <Link to="/finance">Rendición de Cuentas</Link>
        <NoSelect>|</NoSelect>
        <Link to="/gallery">Galería</Link>
        <NoSelect>|</NoSelect>
        <Link to="/workshops">Talleres</Link>
    </LinkContainer>
)

const WideLogo = ({ onClick=identity }) => {
    return <WideLogoContainer onClick={onClick} >
        <Icon src={logo} alt="logo"/>
        <h2>
            Fundación Latir
        </h2>
    </WideLogoContainer>
}

const WideView = () => {
    const history = useHistory();
    const handleClickLogo = (e) => {
        history.push('/')
    }
    return (
        <>
            <WideLogo onClick={handleClickLogo}/>
            <Links />
        </>
    )
}

export default WideView;