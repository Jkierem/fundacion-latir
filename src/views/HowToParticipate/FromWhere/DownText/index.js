import React from "react";
import styled from "styled-components";
import Fonts from "../../../../utils/fonts";

const DownContainer = styled.div`
	display: grid;
	grid-template-columns: 0.1fr 0.8fr 0.1fr;
	grid-template-rows: 1.4fr 0.2fr 0.8fr;
	grid-column-gap: 0px;
	grid-row-gap: 10px;
	flex: 1;
`;
const TitleContainer = styled.div`
	grid-area: 2 / 2 / 3 / 3;
	justify-content: center;
	text-align: center;
	font-size: ${Fonts.SizeValues.Huge};
`;
const ImageContainer = styled.div`
	grid-area: 1 / 2 / 2 / 3;
	background-image: url(${props => props.src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	width: 100%;
`;
const ParagraphContainer = styled.div`
	grid-area: 3 / 2 / 4 / 3;
	font-size: ${Fonts.SizeValues.Normal};
	text-align: center;
`;

/**
 * @typedef {{
 *  title: string;
 *  src: string;
 *  paragraph: string;
 * }} DownTextProps
 * @param {DownTextProps} props
 * @description Container with down text for our proyects.
 */
function DownText(Props) {
	return (
		<DownContainer>
			<ImageContainer src={Props.src}></ImageContainer>
			<TitleContainer>{Props.title}</TitleContainer>
			<ParagraphContainer>{Props.paragraph}</ParagraphContainer>
		</DownContainer>
	);
}

export default DownText;
