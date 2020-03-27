import React from "react";
import styled from "styled-components";
import { Section } from "../../../components";
import Fonts from "../../../utils/fonts";
import Colors from "../../../utils/colors";

const UpperSegment = styled.div`
	width: 100%;
	height: 100vh;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url("https://picsum.photos/1024/1024");
	background-size: cover;
	font-size: ${Fonts.SizeValues.Huge};
	color: ${Colors.White.hexString};
	padding: 0 10%;
	box-sizing: border-box;
`;

const LowerSegment = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	flex-wrap: wrap-reverse;
	flex-direction: row;
	justify-content: space-around;
	margin: 60px 0;
	font-size: ${Fonts.SizeValues.Big};
`;

const Container = styled.section`
	height: 100%;
	margin: 16px 0px;
`;

const HalfWidth = styled.div`
	width: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 32px;
`;

const HistoryComponent = props => {
	return (
		<Section id="history">
			<Container>
				<UpperSegment>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam rutrum dolor, non
					fermentum tortor imperdiet vitae. Pellentesque suscipit a dolor non congue. Curabitur at
				</UpperSegment>
				<LowerSegment>
					<HalfWidth>
						<img src="https://picsum.photos/400/400" alt="history" />
					</HalfWidth>
					<HalfWidth>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam rutrum dolor, non
						fermentum tortor imperdiet vitae. Pellentesque suscipit a dolor non congue. Curabitur at
						porttitor ipsum. Nulla eu diam nisl. Donec sodales varius ante, sagittis condimentum
						magna
					</HalfWidth>
				</LowerSegment>
			</Container>
		</Section>
	);
};

export default HistoryComponent;
