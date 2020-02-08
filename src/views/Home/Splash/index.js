import React from "react";
import styled from "styled-components";
import Icon from "../../../components/Icon";
import Section from "../../../components/Section";
import { Button } from "../../../components";

import logo from "../../../resources/images/relogoslatir/512x512px_blanco.svg";
import background from "../../../resources/images/home/splash.png";

const Base = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || "column"};
	justify-content: ${props => props.justify || "center"};
	align-items: ${props => props.align || "center"};
	font-size: initial;
`;

const Container = styled(Base)`
	position: relative;
	height: 100%;
	background-image: url(${props => props.background});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	font-size: 2em;
	text-align: center;
`;

const ButtonContainer = styled(Base)`
	width: 40vw;
`;

const Splash = () => {
	return (
		<Section id={"splash"} fullscreen>
			<Container background={background}>
				<Icon src={logo} alt="logo" size={"huge"} />
				<p>Por una vida en condiciones de dignidad</p>
				<p>Únete a LATIR</p>
				<ButtonContainer direction="row">
					<Button width="50%">Voluntariado</Button>
					<Button width="50%">Haz tu donación</Button>
				</ButtonContainer>
			</Container>
		</Section>
	);
};

export default Splash;
