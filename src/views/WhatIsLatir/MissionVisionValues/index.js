import React from "react";
import styled from "styled-components";
import { Section } from "../../../components";
import Values from "./Values";

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 5vh 0;
`;

const StyledMissionVision = styled.div`
	display: flex;
	text-align: center;
	flex-direction: row;
	justify-content: space-around;
	align-items: baseline;
	align-content: space-around;
	flex-wrap: wrap;
	margin: 5% 0;
`;

const StyledText = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 5%;
	max-width: 80%;
	text-align: center;
`;

const VerticalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	min-width: 320px;
	margin: 16px 0;
	flex-basis: 50%;
`;

const Mission = () => {
	return (
		<VerticalContainer>
			<h1>Mision</h1>
			<StyledText>
				Promover el derecho de las comunidades a una vida en condiciones de dignidad, favoreciendo
				la construcción de relaciones equitativas que promueven la transformación social
			</StyledText>
		</VerticalContainer>
	);
};

const Vision = () => {
	return (
		<VerticalContainer>
			<h1>Vision</h1>
			<StyledText>
				Imaginamos un mundo en el que los seres humanos, individual y colectivamente, tienen la
				oportunidad de crear sus propias historias desde la construcción de relaciones dignas,
				inclusivas y equitativas
			</StyledText>
		</VerticalContainer>
	);
};

const MissionVisionValues = () => {
	return (
		<Section id="mission-vision">
			<StyledContainer>
				<StyledMissionVision>
					<Mission />
					<Vision />
				</StyledMissionVision>
				<Values />
			</StyledContainer>
		</Section>
	);
};

export default MissionVisionValues;
