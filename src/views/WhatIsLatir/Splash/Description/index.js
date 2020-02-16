import React from "react";
import styled from "styled-components";
import Fonts from '../../../../utils/fonts'

const StyledDescription = styled.div`
    grid-area: 3 / 2 / 4 / 7;
    font-size: ${Fonts.SizeValues.Huge};
    text-align: center;
`
const Description = () => {
    return (
        <StyledDescription>Latir es una entidad sin animo de lucro presente en Colombia, que busca favorecer la construcción
        de relaciones equitativas para promover el derecho a una vida en condiciones de dignidad, a traves de
        la acción articulada entre nuestros voluntarios y las comunidades que acompañamos</StyledDescription>
    )
};

export default Description