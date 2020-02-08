import React from "react";
import styled from "styled-components";
import TitleContainer from "../TitleContainer";
import Images from "../Images";

const StyledContainer = styled.div`
	display: grid;
	grid-template-areas:
		"title title title title"
		"img1 img2 img3 img4";
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 20% 1fr;
	justify-items: center;
	height: 100%;
	width: 100%;
`;

const WideView = props => {
	return (
		<StyledContainer>
			<TitleContainer>
				<h1>Para lograrlo, LATIR guia su trabajo a partir de 4 Areas</h1>
			</TitleContainer>
			<Images />
		</StyledContainer>
	);
};

export default WideView;
