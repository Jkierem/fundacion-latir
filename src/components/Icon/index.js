import React from "react";
import styled from "styled-components";

const getSize = size => {
	switch (size) {
		case "tiny":
			return 16;
		case "small":
			return 32;
		case "normal":
			return 64;
		case "big":
			return 128;
		case "huge":
			return 256;
		default:
			return 64;
	}
};

const FigureStyled = styled.img`
	${({ alignment, size }) => {
		if (alignment === "row") {
			return `
				width: ${getSize(size)}px;
				height: auto;
			`;
		} else if (alignment === "column") {
			return `
				height: ${getSize(size)}px;
				width: auto;
			`;
		}
	}}
`;

/**
 * @typedef {{
 *  src: string;
 *  alt: string;
 *  size?: "tiny"|"small"|"normal"|"big"|"huge";
 * 	alignment: "row"|"column"
 *  }} IconProps
 * @param {IconProps} props
 * @description An icon element that returns an icon with the specified size. The default size is 'normal' (64px)
 * @returns {JSX.Element} figure html tag
 */
const Icon = ({ src, alt, size = "normal", alignment = "row" }) => (
	<figure>
		<FigureStyled src={src} alt={alt} size={size} alignment={alignment} />
	</figure>
);

export default Icon;
