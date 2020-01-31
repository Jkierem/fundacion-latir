import React from "react";
import styled from "styled-components";

const getSize = (props) => {
    switch (props.size) {
        case "tiny": return 16;
        case "small": return 32;
        case "normal": return 64;
        case "big": return 128;
        case "huge": return 256;
        default: return 64;
    }
};

const FigureStyled = styled.img`
    width: ${getSize}px;
    height: auto;
`

const Icon = (props) => (
    <figure>
        <FigureStyled {...props}/>
    </figure>
)

export default Icon;