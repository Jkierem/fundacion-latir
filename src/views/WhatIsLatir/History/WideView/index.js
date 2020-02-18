import React from "react";
import styled from "styled-components";
import Paragraph from "../Paragraph";
import Background from "../Background";
import Fonts from "../../../../utils/fonts";

const Container = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 1.3fr 0.4fr 1.3fr 0.5fr;
	grid-template-rows: 0.8fr repeat(2, 1fr) 0.8fr 0.2fr 1.5fr 0.2fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`;

const SubText = styled.div`
	grid-area: 6 / 2 / 7 / 3;
	font-size: ${Fonts.SizeValues.Huge};
	text-align: center;
`;
const SubImage = styled.div`
	grid-area: 6 / 4 / 7 / 5;
	background-image: url("https://i.picsum.photos/id/12/1400/800.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	width: 100%;
`;

const WideView = () => {
	return (
		<div>
			<Container>
				<Background />
				<Paragraph />
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

export default WideView;
