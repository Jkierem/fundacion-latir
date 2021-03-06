import React from "react";
import styled from "styled-components";
import { Icon, Section } from "../../../components";
import Fonts from "../../../utils/fonts";

import amaLogo from "../../../resources/images/home/amalogo.jpg";
import armonicosLogo from "../../../resources/images/home/espaciosarmonicoslogo.svg";

const TitleContainer = styled.div`
	font-size: ${Fonts.SizeValues.Normal};
	align-items: center;
	text-align: center;
	padding: 4% 0 1%;
	box-sizing: border-box;
`;

const NetworkingContainer = styled.div`
	width: 40%;
	height: 100%;
	display: flex;
	text-align: center;
	flex-direction: row;
	justify-content: space-around;
	align-items: baseline;
	align-content: space-around;
	flex-wrap: wrap;
	margin: 3% auto;
	white-space: nowrap;
`;

const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex-basis: 50%;
	box-sizing: border-box;
`;

const Networking = () => {
	return (
		<Section id={"networking"}>
			<TitleContainer>
				<h2>Redes y Organizaciones Asociadas</h2>
			</TitleContainer>
			<NetworkingContainer>
				<IconContainer>
					<Icon src={amaLogo} alt={"Fundación AMA"} size={"big"} />
				</IconContainer>
				<IconContainer>
					<Icon src="https://picsum.photos/130/130" alt={"Espacios Armónicos"} size={"big"} />
				</IconContainer>
			</NetworkingContainer>
		</Section>
	);
};
export default Networking;
