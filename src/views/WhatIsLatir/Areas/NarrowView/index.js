import React from "react";
import styled from "styled-components";
import TitleContainer from "../TitleContainer";
import Images from "../Images";

const StyledContainer = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-areas:
		"title"
		"img1"
		"img2"
		"img3"
		"img4";
	grid-template-columns: 4fr;
	grid-template-rows: 25vh repeat(4, 40vh);
	justify-items: center;
`;

const PaddedTitle = styled.h1`
	padding: 0 10%;
`;

const NarrowView = props => {
	return (
		<StyledContainer>
			<TitleContainer>
				<PaddedTitle>Para lograrlo, LATIR guia su trabajo a partir de 4 Areas</PaddedTitle>
			</TitleContainer>
			<Images />
		</StyledContainer>
	);
};

export default NarrowView;
