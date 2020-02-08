import React from "react";
import styled from "styled-components";
import TitleContainer from "../TitleContainer";
import { HoverImage } from "../../../../components";

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
	grid-template-rows: 20vh repeat(4, 40vh);
	justify-items: center;
`;

const HoverConstraint = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`;

const NarrowView = props => {
	return (
		<StyledContainer>
			<TitleContainer>
				<h1>Para lograrlo, LATIR guia su trabajo a partir de 4 Areas</h1>
			</TitleContainer>
			<HoverConstraint>
				<HoverImage
					area="img1"
					src="https://picsum.photos/1000/1000"
					text="Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."
				/>
			</HoverConstraint>
			<HoverConstraint>
				<HoverImage
					area="img2"
					src="https://picsum.photos/1000/1000"
					text="Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."
				/>
			</HoverConstraint>
			<HoverConstraint>
				<HoverImage
					area="img3"
					src="https://picsum.photos/1000/1000"
					text="Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."
				/>
			</HoverConstraint>
			<HoverConstraint>
				<HoverImage
					area="img4"
					src="https://picsum.photos/1000/1000"
					text="Lorem1 ipsum dolor sit amet, consectetur adipiscing elit."
				/>
			</HoverConstraint>
		</StyledContainer>
	);
};

export default NarrowView;
