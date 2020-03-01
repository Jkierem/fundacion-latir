import React from "react";
import styled from "styled-components";
import { Section, Button } from "../../../components";
import Fonts from "../../../utils/fonts";

const Content = styled.div`
	display: flex;
	margin-top: 100px;
	flex-direction: column;
	align-items: center;
	height: 100%;
`;

const StyledButton = styled.div`
	grid-area: 4 / 3 / 5 / 6;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
`;

const StyledDesc = styled.div`
	text-align: center;
	font-size: 150%;
	padding-right: 10%;
	padding-left: 10%;
	max-width: 550px;
	margin-bottom: 40px;
`;

const WideView = props => {
	return (
		<Section fullscreen>
			<Content>
				<StyledDesc>
					Nuestro trabajo se inspira en las ideas, propuestas, sueños y acciones de nuesros
					voluntarios. ¡La fuerza de nuestor latidos es la de ustedes!
				</StyledDesc>
				<StyledButton>
					<Button onClick={() => {}}>¿Cómo funciona?</Button>

					<Button onClick={() => {}}>Únete ahora</Button>

					<Button onClick={() => {}}>Oportunidades laborales y pasantias</Button>
				</StyledButton>
			</Content>
		</Section>
	);
};

export default WideView;
