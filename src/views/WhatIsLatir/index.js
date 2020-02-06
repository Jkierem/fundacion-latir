import React from "react";
import Areas from "./Areas";
import MissionVisionValues from "./MissionVisionValues";

import styled from "styled-components";
import Button from '../../components/Button'
import logo from "../../resources/images/relogoslatir/512x512px.svg"
import Icon from "../../components/Icon"
import Fonts from "../../utils/fonts"
 
const StyleParagraph = styled.p`
 text-align: center;
 align-items: center;
 padding-left: 10%;
 padding-right: 10%;
 font-size: ${Fonts.SizeValues.Huge};
`
const StyleButton = styled.div`
 text-align: center;
 align-items: center;
 padding-left: 30%;
 padding-right: 30%;
`
const StyleImage = styled.div`
 padding-top: 20px;
 padding-bottom: 20px;
 text-align: center;
 align-items: center;
 
`
 
const Parrafo = () => {
 return(
   <StyleParagraph>Latir es una entidad sin animo de lucro presente en Colombia, que busca favorecer la construcción
       de relaciones equitativas para promover el derecho a una vida en condiciones de dignidad, a traves de
       la acción articulada entre nuestros voluntarios y las comunidades que acompañamos
   </StyleParagraph>
 )
}
 
const WhatIsLatir = (props) => {
 return(
   <div>
       <StyleImage><Icon src={logo} size="huge"/></StyleImage>
       <Parrafo/>
       <StyleButton>
         <Button style={{width: "90%"}}>Vision, Mision y Valores</Button>
         <Button style={{width: "90%"}}>La Historia que Comienza</Button>
         <Button style={{width: "90%"}}>Donde Hemos Estado</Button>
       </StyleButton>
   </div>
 )
}
 
export default WhatIsLatir;
