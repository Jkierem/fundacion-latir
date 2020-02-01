import React from "react";
import styled from "styled-components";

const getSize = ({ size }) => {
    switch (size) {
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

/**
 * @typedef {{
 *  src: string;
 *  alt: string;
 *  size?: string;
 *  }} IconProps
 * @param {IconProps} props
 * @description An icon element that returns an icon with the specified size. The default size is 'normal' (64px)
 * @returns {JSX.Element} figure html tag
 */
const Icon = ({ src, alt, size='normal' }) => (
    <figure>
        <FigureStyled src={ src } alt={ alt } size={ size }/>
    </figure>
)

export default Icon;