import React, { useState } from 'react'
import styled from 'styled-components'
import { useDeviceType, Devices} from '../../utils';
import { identity } from '@juan-utils/functions';

const NavbarComponent = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #bbdefb;
    position: fixed;
    width: 100%;
    min-height: 75px;
    padding-left: 10px;
    padding-right: 10px;
`

const Bar = styled.div`
    width: 40px;
    height: 5px;
    background-color: ${ props => props.color || "white"};
    margin: 5px 0;
    border-radius: 5px;
    transition: 0.4s;

    ${ props =>{
            if(props.open){
                switch(props.position){
                    case "top":
                        return 'transform: rotate(-45deg) translate(-9px, 11px);'
                    case "mid":
                        return 'opacity: 0;'
                    case "bot":
                    default:
                        return 'transform: rotate(45deg) translate(-9px, -12px);'
                }
            }
            return 'transform: rotate(0deg) translate(0px, 0px);'
        }
    }
`

const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 10px;
    cursor: pointer;
`

const HamburgerButton = ({ onClick=identity }) => {
    const [ isOpen , setOpen ] = useState(false)
    const toggleOpen = () => setOpen(!isOpen)
    const handleClick = (e) => {
        toggleOpen();
        onClick(e,isOpen)
    }
    return (
        <BarContainer onClick={handleClick}>
            <Bar position="top" open={isOpen} />
            <Bar position="mid" open={isOpen} />
            <Bar position="bot" open={isOpen} />
        </BarContainer>
    );
}

const LatirIcon = () => <div>Hello</div>

const isLaptop = (device) => Devices.Laptop === device

const Navbar = () => {
    const device = useDeviceType();
    return (
        <NavbarComponent>
            { isLaptop(device) ? 
                <LatirIcon />
                : <HamburgerButton />
            }
        </NavbarComponent>
    )
}

export default Navbar