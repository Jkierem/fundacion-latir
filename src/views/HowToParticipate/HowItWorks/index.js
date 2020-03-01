import React from "react";
import styled from "styled-components";
import { Section } from "../../../components";
import ItemsContainer from "./ItemsContainer";

const StyledTitle = styled.h1`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding-right: 10px;
	padding-left: 10px;
	margin: 5% 0;
`;

const HowItWorks = props => {
	return (
		<Section>
			<StyledTitle>¿Cómo funciona el voluntariado en LATIR?</StyledTitle>
			<ItemsContainer />
		</Section>
	);
};

export default HowItWorks;
