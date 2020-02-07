import React from 'react'
import styled from 'styled-components';
import { useDevice, isLaptop } from '../../hooks';
import WideView from './WideView';
import NarrowView from './NarrowView';

const StyledAreaContainer = styled.div`
  position: relative;
  
`;


const AreaContainer = (props) => {
    const device = useDevice();
    const laptop = isLaptop(device)
    return (
        <StyledAreaContainer>
            {
                laptop ?
                <WideView />
                :
                <NarrowView />
            }
        </StyledAreaContainer>
    )

}

export default AreaContainer;
