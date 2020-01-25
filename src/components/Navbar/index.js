import React from 'react'
import Colors from '../../utils/colors';
import styled from 'styled-components';
import { useDevice, isLaptop } from '../../hooks';
import WideView from './WideView';
import NarrowView from './NarrowView';

const NavbarStyled = styled.div`
    display: grid;
    ${ props => 
        props.wide ? 
            "grid-template-columns: 3fr 10fr":
            "grid-template-columns: 1fr 3fr 1fr"
    };
    background-color: ${Colors.Black.hexString()};
    position: fixed;
    width: 100%;
    min-height: 64px;
    max-height: 64px;
    color: ${Colors.White.hexString()};
    font-weight: normal;
`

const Navbar = () => {
    const device = useDevice();
    const laptop = isLaptop(device)
    return (
        <NavbarStyled wide={laptop}>
            { 
                laptop ? 
                <WideView />
                :
                <NarrowView />
            }
        </NavbarStyled>
    )
}

export default Navbar