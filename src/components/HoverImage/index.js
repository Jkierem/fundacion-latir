import React from 'react'
import styled from 'styled-components';

const StyledImg = styled.div`
  display: flex;
  position:relative;
  clear: both;
  display:block;
  cursor:pointer;
  overflow:hidden;
  width: 300px;
  height: 500px;
  ${ props =>{  switch(props.grid){
                  case "img1":
                    return 'grid-area: img1;'
                  case "img2":
                    return 'grid-area: img2;'
                  case "img3":
                    return 'grid-area: img3;'
                  case "img4":
                    return 'grid-area: img4;'
                }
             }
  }
`;


const Content = styled.div`
  display: flex;
  opacity:0;
  font-size:170%;
  position:absolute;
  top:0;
  left:0;
  color:#000000;
  background-color:rgba(200,200,200,0.5);
  width: 300px;
  height: 500px;;
  -webkit-transition: all 400ms ease-out;
  -moz-transition: all 400ms ease-out;
  -o-transition: all 400ms ease-out;
  -ms-transition: all 400ms ease-out;
  transition: all 400ms ease-out;
  text-align:center;
  ${StyledImg}:hover & {
    opacity:1;
  }
`;

const StyledText = styled.div`
  display: flex;
  height:0;
  opacity:1;
  transition-delay: 0s;
  transition-duration: 0.4s;
  ${Content}:hover & {
    opacity:1;
    transform: translateY(250px);
    -webkit-transform: translateY(250px);
  }
`;

const HoverImage = ({ grid, src, text }) => {
  return(
    <StyledImg grid = {grid} >
        <img src= {src} alt="img" />
        <Content>
          <StyledText>{text}</StyledText>
        </Content>
    </StyledImg>
  )
}

export default HoverImage;
