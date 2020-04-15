import React from "react";
import styled from "styled-components";
import Icon from "../../../components/Icon";
import Section from "../../../components/Section";
import { Button } from "../../../components";

import logo from "../../../resources/images/relogoslatir/512x512px_blanco.svg";
import background from "../../../resources/images/1_inicio/1_por_una_vida.jpg";
import { useDevice, isLaptop } from "../../../hooks";

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
	background-position: ${props => (props.laptop ? "left" : "center")} center;
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	box-sizing: border-box;
	padding: 0 0 0 3%;
`;

const ButtonContainer = styled(Base)`
	width: 35vw;
	margin: ${props => (props.compact ? "0" : "24px 0")};
`;

const TextContainer = styled(Base)`
	width: 100%;
	font-size: ${props => props.size};
	text-align: ${props => props.textAlign || "center"};
	margin: ${props => props.margin || "0"};
`;

const Splash = () => {
	const dev = useDevice();
	const laptop = isLaptop(dev);
	return (
		<Section id={"splash"} fullscreen>
			{!laptop ? (
				<Container laptop={laptop} background={background} align="center">
					<Icon src={logo} alt="logo" size={"huge"} />
					<TextContainer size="1.3em" margin="16px 0">
						<p>Por una vida en condiciones</p>
						<p>de dignidad</p>
					</TextContainer>
					<TextContainer size="2em">Únete a LATIR</TextContainer>
					<ButtonContainer>
						<Button compact width="100%">
							Voluntariado
						</Button>
						<Button compact width="100%">
							Haz tu donación
						</Button>
					</ButtonContainer>
				</Container>
			) : (
				<Container background={background} align="flex-start">
					<ButtonContainer direction="column" align="flex-start" compact>
						<ButtonContainer compact>
							<Icon src={logo} alt="logo" size={"huge"} />
						</ButtonContainer>
						<TextContainer size="1.4em" margin="16px 0">
							<p>Por una vida en condiciones</p>
							<p>de dignidad</p>
						</TextContainer>
						<TextContainer size="2em">Únete a LATIR</TextContainer>
						<ButtonContainer>
							<Button compact width="50%">
								Voluntariado
							</Button>
							<Button compact width="50%">
								Haz tu donación
							</Button>
						</ButtonContainer>
					</ButtonContainer>
				</Container>
			)}
		</Section>
	);
};

export default Splash;
