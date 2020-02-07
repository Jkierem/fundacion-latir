import React from 'react'
import styled from 'styled-components';
import HoverImage from '../../HoverImage'

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "title"
  "img1"
  "img2"
  "img3"
  "img4";
  grid-template-columns: 4fr;
  grid-template-rows: 160px 1fr 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 11px;

`;

const Title = styled.h1`
  display: flex;
  grid-area: title;
  position: relative;
  top: 30px;
  text-align: center;
`;


const NarrowView = (props) => {
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

export default NarrowView;
