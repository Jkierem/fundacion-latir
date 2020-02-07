import React from 'react'
import styled from 'styled-components';
import HoverImage from '../../HoverImage'

const StyledContainer = styled.div`
  display: grid;
  top: 50px;
  grid-template-areas: "title title title title"
  "img1 img2 img3 img4";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 1fr;
  justify-items: center;
  grid-column-gap: 11px;

`;

const Title = styled.h1`
  display: flex;
  grid-area: title;
  position: absolute;
  top: 30px;
  text-align: center;
`;


const WideView = (props) => {
  return(
    <StyledContainer>
    <Title>Para lograrlo, LATIR guia su trabajo a partir de 4 Areas</Title>
      <HoverImage area = "img1" src = "https://picsum.photos/300/500" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <HoverImage area = "img2" src = "https://picsum.photos/300/500" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <HoverImage area = "img3" src = "https://picsum.photos/300/500" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <HoverImage area = "img4" src = "https://picsum.photos/300/500" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
    </StyledContainer>
  )

}

export default WideView;
