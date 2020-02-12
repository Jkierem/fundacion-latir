import React from 'react';
import styled from 'styled-components';
import Fonts from "../../utils/fonts";
import Button from '../../components/Button'
import logo from "../../resources/images/relogoslatir/512x512px.svg"
import Icon from "../../components/Icon"

import Colors from '../../utils/colors';
import Depth from '../../utils/depth';

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
const ActionButton = styled.a`
  width: 90%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8em;
  margin: 24px;
  border: none;
  outline: none;
  cursor: pointer;

  color: ${Colors.White.hexString};
  font-size: ${Fonts.SizeValues.Normal};
  background-color: ${Colors.getLightColorHex};
  box-shadow: ${Depth(1)};

  &:hover {
  background-color: ${Colors.getDarkColorHex};
  box-shadow: ${Depth(0)};
`

const Parrafo = () => {
    return(
      <StyleParagraph>
        Latir es una entidad sin animo de lucro presente en Colombia, que busca favorecer la construcción
        de relaciones equitativas para promover el derecho a una vida en condiciones de dignidad, a traves de
        la acción articulada entre nuestros voluntarios y las comunidades que acompañamos
      </StyleParagraph>
    )
}

const WhatIs = () => {
  return (
    <div>
      <StyleImage><Icon src={logo} size="huge"/></StyleImage>
       <Parrafo/>
       <StyleButton>
        <ActionButton href="#mision">Vision, Mision y Valores</ActionButton>
        <ActionButton href="#historia">La Historia que Comienza</ActionButton>
        <ActionButton href="#ubicacion">Donde Hemos Estado</ActionButton>
       </StyleButton>
    </div>
  )
}

export default WhatIs;