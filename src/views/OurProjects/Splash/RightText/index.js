import React from "react";
import styled from "styled-components";
import Fonts from "../../../../utils/fonts";

const RightContainer = styled.div`
	display: grid;
	grid-template-columns: 0.4fr 0.8fr 0.4fr 1fr 0.4fr;
	grid-template-rows: repeat(2, 0.1fr) 1fr 0.1fr;
	grid-column-gap: 0px;
	grid-row-gap: 20px;
`;
const TitleContainer = styled.div`
	grid-area: 2 / 4 / 3 / 5;
	justify-content: center;
	text-align: center;
	font-size: ${Fonts.SizeValues.Huge};
`;
const ImageContainer = styled.div`
	grid-area: 2 / 2 / 4 / 3;
	background-image: url(${props => props.src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	width: 100%;
`;
const ParagraphContainer = styled.div`
	grid-area: 3 / 4 / 4 / 5;
	font-size: ${Fonts.SizeValues.Big};
	text-align: right;
	justify-content: center;
`;

/**
 * @typedef {{
 *  title: string;
 *  src: string;
 *  paragraph: string;
 * }} RightTextProps
 * @param {RightTextProps} props
 * @description Container with down text for our proyects.
 */
function RightText(Props) {
	return (
		<RightContainer>
			<TitleContainer>{Props.title}</TitleContainer>
			<ImageContainer src={Props.src}></ImageContainer>
			<ParagraphContainer>{Props.paragraph}</ParagraphContainer>
		</RightContainer>
	);
}

export default RightText;
