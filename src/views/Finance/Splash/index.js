import React from "react";
import styled from "styled-components";
import Section from "../../../components/Section";
import { Button } from "../../../components";
import Fonts from "../../../utils/fonts";
import background from "../../../resources/images/8_rendicion_de_cuentas/1_integridad_y_transparencia.png";
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
	background-image: url(${background});
	background-position: ${props => (props.laptop ? "left" : "center")} center;
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	box-sizing: border-box;
	padding: 0 5%;
`;

const ElementsContainer = styled(Base)`
	width: 45%;
`;

const ButtonContainer = styled(Base)`
	align-items: center;
	margin: ${props => (props.compact ? "0" : "24px 0")};
	padding: ${props => props.padding || "0"};
`;

const TextContainer = styled(Base)`
	width: 100%;
	font-size: ${Fonts.SizeValues.Huge};
	text-align: ${props => props.textAlign || "center"};
	margin: ${props => props.margin || "0"};
	padding: 10% 0;
	word-wrap: break-word;
`;

const SplashContent = () => {
	return (
		<>
			<TextContainer margin="16px 0">
				La integridad hace parte de nuestros valores, y con ella viven la autenticidad y
				transparencia. Es por ello que la rendición de cuentas es un elemento fundamental para
				nosotros en la construcción de un país que ofrezca condiciones de vida digna a su población
			</TextContainer>
			<ButtonContainer>
				<Button compact width="100%">
					Gestion Social e Impacto
				</Button>
				<Button compact width="100%">
					Gestion Financiera
				</Button>
				<Button compact width="100%">
					Principios para Rendicion de Cuentas
				</Button>
			</ButtonContainer>
		</>
	);
};

const Splash = () => {
	const dev = useDevice();
	const laptop = isLaptop(dev);
	return (
		<Section id={"splash"} fullscreen>
			{!laptop ? (
				<Container laptop={laptop} align="center">
					<SplashContent />
				</Container>
			) : (
				<Container align="flex-start">
					<ElementsContainer>
						<SplashContent />
					</ElementsContainer>
				</Container>
			)}
		</Section>
	);
};

export default Splash;
