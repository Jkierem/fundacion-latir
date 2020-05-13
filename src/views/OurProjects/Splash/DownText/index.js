import React from "react";
import styled from "styled-components";
import Fonts from "../../../../utils/fonts";

const DownContainer = styled.div`
	display: grid;
	grid-template-columns: 0.4fr 1fr 0.4fr 1fr 0.4fr;
	grid-template-rows: repeat(2, 0.1fr) repeat(2, 1fr) 0.1fr;
	grid-column-gap: 0px;
	grid-row-gap: 10px;
`;
const TitleContainer = styled.div`
	grid-area: 2 / 2 / 3 / 5;
	justify-content: center;
	text-align: center;
	font-size: ${Fonts.SizeValues.Huge};
`;
const ImageContainer = styled.div`
	grid-area: 4 / 2 / 5 / 5;
	background-image: url(${props => props.src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	width: 100%;
`;
const ParagraphContainer = styled.div`
	grid-area: 3 / 2 / 4 / 5;
	font-size: ${Fonts.SizeValues.Big};
	text-align: left;
	justify-content: center;
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
function RightText(Props) {
	return (
		<DownContainer>
			<TitleContainer>{Props.title}</TitleContainer>
			<ImageContainer src={Props.src}></ImageContainer>
			<ParagraphContainer>{Props.paragraph}</ParagraphContainer>
		</DownContainer>
	);
}

export default RightText;
