import React from "react";
import styled from "styled-components";
import Section from "../../../components/Section";
import { Button } from "../../../components";
import { useDevice, isLaptop } from "../../../hooks";

const Base = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || "column"};
	justify-content: ${props => props.justify || "center"};
	align-items: ${props => props.align || "center"};
	font-size: initial;
`;

const Container = styled(Base)`
	padding: ${props => (props.laptop ? "0 20%" : "0 5%")};
	position: relative;
	height: 100%;
	box-sizing: border-box;
`;

const TitleContainer = styled.header`
	color: black;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	text-align: center;
	grid-area: title;
	justify-content: center;
	width: 100%;
	height: auto;
	align-content: center;
	padding: ${props => props.padding || "15px 0"};
`;

const TextContainer = styled(Base)`
	width: 100%;
	color: ${props => props.color};
	font-size: ${props => props.size};
	text-align: ${props => props.textAlign || "justify"};
	margin: ${props => props.margin || "0"};
	padding: ${props => (props.laptop ? "25px 0" : "10px 0")};
`;

const ColumnsContainer = styled.div`
	display: flex;
`;

const Column = styled.div`
	flex: 1;
	padding: 10px 10px;
`;

const ReferenceContainer = styled.sup`
	font-size: small;
	vertical-align: super;
`;

const ReferenceInfoContainer = styled.p`
	align-self: flex-start;
	font-size: small;
`;

const OurProjectsToday = () => {
	const dev = useDevice();
	const laptop = isLaptop(dev);
	return (
		<Section id={"ourprojectstoday"} fullscreen>
			<Container align="center" laptop={laptop}>
				<TitleContainer>
					<h2>Nuestros proyectos hoy</h2>
				</TitleContainer>
				<TextContainer size="normal" color="black" laptop={laptop}>
					<p>
						A 2016, Colombia es el séptimo país más desigual del mundo.
						<ReferenceContainer>1</ReferenceContainer>
					</p>
				</TextContainer>
				<TextContainer size="normal" color="black" laptop={laptop}>
					<p>
						El derecho de las personas a una vida en condiciones de dignidad se ve fuertemente
						vulnerado, y su posibilidad de elegir el camino que sueñan se trunca en medio de un
						contexto difícil.
					</p>
				</TextContainer>
				<TextContainer size="normal" color="black" laptop={laptop}>
					<p>
						Para atender esta situación soñamos gran cantidad de proyectos, de los cuales hoy
						implementamos dos:
					</p>
				</TextContainer>

				<ColumnsContainer>
					<Column>
						<TitleContainer>
							<h3>Cuentos a la obra</h3>
						</TitleContainer>
						<TextContainer size="normal" color="black" laptop={laptop}>
							<p>Por el derecho de niños, niñas y adolecentes a una educación de calidad.</p>
						</TextContainer>
					</Column>
					<Column>
						<TitleContainer>
							<h3>Pasa la paz</h3>
						</TitleContainer>
						<TextContainer size="normal" color="black" laptop={laptop}>
							<p>Para fortalecer las habilidades sociales hacia la construcción de paz.</p>
						</TextContainer>
					</Column>
				</ColumnsContainer>

				<Button>Cuéntame más</Button>

				<ReferenceInfoContainer>1) Índice de Gini, 2016.</ReferenceInfoContainer>
			</Container>
		</Section>
	);
};

export default OurProjectsToday;
