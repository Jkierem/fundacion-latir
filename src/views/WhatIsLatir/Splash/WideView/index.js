import React from "react";
import styled from "styled-components";
import Image from '../Image';
import Description from '../Description';
import Button from '../Button';

const StyledWide = styled.div`
    display: grid; 
    grid-template-columns: 0.5fr repeat(5, 1fr) 0.5fr; 
    grid-template-rows: 0.1fr 0.4fr 0.2fr 0.3fr 0.1fr; 
    grid-column-gap: 0px;
    grid-row-gap: 3px;
`
 

 const WideView = (props) => {
 return(
   <StyledWide>
      <Image/>
      <Description/>
      <Button/>
   </StyledWide>
 )
}
 
export default WideView;