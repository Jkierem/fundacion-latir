import React from 'react'
import Styled from 'styled-components';

const StyledValueItem = Styled.div`
  text-align: center;
  grid-area: ${props => props.area};
  padding-bottom: 45px;
`;



const ValueItem = ({ area, src, title ,text }) => {
  return(
    <StyledValueItem area = {area}>
        <img src= {src} alt="img" />
       <h1><b>{title}</b></h1>
       <p>{text}</p>
    </StyledValueItem>
  )
}

export default ValueItem;
