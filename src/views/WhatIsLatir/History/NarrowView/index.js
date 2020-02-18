import React from "react";
import styled from "styled-components";
import Paragraph from "../Paragraph";
import Background from "../Background";

const Container = styled.div`
	display: grid;
	grid-template-columns: 0.2fr 1fr 0.2fr;
	grid-template-rows: 0.2fr 2fr 0.2fr 0.05fr 0.8fr 0.05fr 0.8fr 0.1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`;

const NarrowBackgroud = styled.div`
	grid-area: 1 / 1 / 4 / 4;
`;
const NarrowParagraph = styled.div`
	grid-area: 2 / 2 / 3 / 3;
`;

const SubText = styled.div`
	grid-area: 7 / 2 / 8 / 3;
	justify-content: justify;
`;

const SubImage = styled.div`
	grid-area: 5 / 2 / 6 / 3;
	background-image: url("https://i.picsum.photos/id/132/1400/800.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	width: 100%;
`;

const NarrowView = () => {
	return (
		<div>
			<Container>
				<NarrowBackgroud>
					<Background />
				</NarrowBackgroud>
				<NarrowParagraph>
					<Paragraph />
				</NarrowParagraph>
				<SubImage />
				<SubText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam rutrum dolor, non
					fermentum tortor imperdiet vitae. Pellentesque suscipit a dolor non congue. Curabitur at
					porttitor ipsum. Nulla eu diam nisl. Donec sodales varius ante, sagittis condimentum magna
					viverra ut. Nam cursus purus et leo rhoncus interdum. Cras consectetur neque eget neque
					convallis lobortis. Fusce at sem eros. Phasellus sit amet tincidunt libero. Integer sit
					amet dapibus erat, eget auctor odio
				</SubText>
			</Container>
		</div>
	);
};

export default NarrowView;
