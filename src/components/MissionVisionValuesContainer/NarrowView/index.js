import React from 'react'
import Styled from 'styled-components';
import  ValueItem from '../../ValueItem'

const StyledContainer = Styled.div`
display: grid;
width: 100%;
height: 100%;
grid-template-areas: "Img1 Img1 Img1 Img1"
"mission mission mission mission"
"vision vision vision vision"
"valuesTitle valuesTitle valuesTitle valuesTitle"
"val1 val1 val1 val1"
"val2 val2 val2 val2"
"val3 val3 val3 val3"
"val4 val4 val4 val4"
"val5 val5 val5 val5"
"val6 val6 val6 val6"
"val7 val7 val7 val7"
"val8 val8 val8 val8";
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 0.3fr 1fr 1fr 0.3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const StyledBanner = Styled.img`
  display: flex;
  grid-area: Img1;
  max-width: 100%;
`;

const StyledMission = Styled.div`
  display: flex;
  padding-top: 25px;
  grid-area: mission;
  text-align: center;
`;

const StyledVision = Styled.div`
  display: flex;
  padding-top: 25px;
  grid-area: vision;
  text-align: center;
`;


const ValuesTitle = Styled.h1`
  margin-top: 30px;
  grid-area: valuesTitle;
  text-align: center;
  max-height: 50px;
  font-size: 40px;
`;

const StyledTitle = Styled.h1`
  font-size: 40px;
`;

const StyledText = Styled.p`
  margin-left: 100px;
  margin-right: 100px;
  text-align: center;
`;


const Mission = (props) => {
  return(
    <div>
    <StyledTitle><b>Mision</b></StyledTitle>
    <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula convallis gravida. Integer at magna quis velit rhoncus scelerisque iaculis in mauris. Vivamus nec molestie nisi.</StyledText>
    </div>
  )
}

const Vision = (props) => {
  return(
    <div>
    <StyledTitle><b>Vision</b></StyledTitle>
    <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula convallis gravida. Integer at magna quis velit rhoncus scelerisque iaculis in mauris. Vivamus nec molestie nisi. </StyledText>
    </div>
  )
}


const NarrowView = (props) => {
  return(
    <StyledContainer>
      <StyledBanner src = "https://picsum.photos/seed/picsum/2000/200"/>
      <StyledMission>
        <Mission/>
      </StyledMission>
      <StyledVision>
        <Vision/>
      </StyledVision>
      <ValuesTitle>Valores</ValuesTitle>
      <ValueItem  area = "val1" src = "https://picsum.photos/130/130" title = "Integridad" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <ValueItem  area = "val2" src = "https://picsum.photos/130/130" title = "Coherencia" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <ValueItem  area = "val3" src = "https://picsum.photos/130/130" title = "Proactividad" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <ValueItem  area = "val4" src = "https://picsum.photos/130/130" title = "Compromiso" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <ValueItem  area = "val5" src = "https://picsum.photos/130/130" title = "Cooperacion" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <ValueItem  area = "val6" src = "https://picsum.photos/130/130" title = "Creativedad" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <ValueItem  area = "val7" src = "https://picsum.photos/130/130" title = "Vocacion" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
      <ValueItem  area = "val8" src = "https://picsum.photos/130/130" title = "Gratitud" text = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."/>
    </StyledContainer>
  )
}

export default NarrowView;
