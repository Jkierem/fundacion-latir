import React from 'react';
import styled from 'styled-components';
import Fonts from "../../utils/fonts"

const StyleParagraph = styled.p`
 text-align: center;
 align-items: center;
 padding-left: 10%;
 padding-right: 10%;
 font-size: ${Fonts.SizeValues.Huge};
`
const Parrafo = () => {
    return(
      <StyleParagraph>Latir es una entidad sin animo de lucro presente en Colombia, que busca favorecer la construcción
          de relaciones equitativas para promover el derecho a una vida en condiciones de dignidad, a traves de
          la acción articulada entre nuestros voluntarios y las comunidades que acompañamos
      </StyleParagraph>
    )
}

export default Parrafo;