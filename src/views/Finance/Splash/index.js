import React from "react";
import styled from "styled-components";
import Section from "../../../components/Section";
import { Button } from "../../../components";
import Fonts from "../../../utils/fonts";

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
	background-image: url(https://picsum.photos/130/130);
	background-position: ${props => (props.laptop ? "left" : "center")} center;
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	box-sizing: border-box;
	padding: 0 5%;
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
`;

const Splash = () => {
	const dev = useDevice();
	const laptop = isLaptop(dev);
	return (
		<Section id={"splash"} fullscreen>
			{!laptop ? (
				<Container laptop={laptop} align="center">
					<TextContainer margin="16px 0">
						<p>
							La integridad hace parte de nuestros valores, y con ella viven la autenticidad y
							transparencia. Es por ello que la rendición de cuentas es un elemento fundamental para
							nosotros en la construcción de un país que ofrezca condiciones de vida digna a su
							población
						</p>
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
				</Container>
			) : (
				<Container align="flex-start">
					<div direction="column" align="flex-start" compact>
						<TextContainer margin="16px 0">
							<p>La integridad hace parte de nuestros valores,</p>
							<p>y con ella viven la autenticidad y transparencia.</p>
							<p>Es por ello que la rendición de cuentas es un</p>
							<p>elemento fundamental para nosotros en la</p>
							<p>construcción de un país que ofrezca condiciones</p>
							<p> de vida digna a su población</p>
						</TextContainer>
						<ButtonContainer padding="0 15%">
							<Button compact width="100%">
								Gestión Social e Impacto
							</Button>
							<Button compact width="100%">
								Gestión Financiera
							</Button>
							<Button compact width="100%">
								Principios para Rendición de Cuentas
							</Button>
						</ButtonContainer>
					</div>
				</Container>
			)}
		</Section>
	);
};

export default Splash;
