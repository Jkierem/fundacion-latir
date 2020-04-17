import React from "react";
import styled from "styled-components";
import { Section } from "../../../components";
import Fonts from "../../../utils/fonts";
import Colors from "../../../utils/colors";
import historia from "../../../resources/images/2_que_es_latir/5_historia.jpg";

const Text = styled.div`
	width: 100%;
	min-height: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: ${Fonts.SizeValues.Huge};
	color: ${Colors.Black.hexString};
	padding: 0 10%;
	box-sizing: border-box;
	opacity: 1;
	z-index: 1;

	&::after {
		content: "";
		background-color: ${Colors.Pastel.Green.rgba(0.4)};
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}

	& > p {
		margin: 16px;
	}
`;

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${historia});
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.5;
	z-index: -2;
`;

const Container = styled.section`
	position: relative;
	height: 100%;
	margin: 16px 0px;
`;

const HistoryComponent = props => {
	return (
		<Section id="history" fullscreen>
			<Container>
				<Background />
				<Text>
					<p>
						En el 2017 empezaron a tejerse convicciones para trabajar por el sueño de construir una
						Colombia más equitativa y en paz
					</p>

					<p>
						Todo comenzó en Nariño, al sur de Colombia. Ante la fuerza de la comunidad de San Roque,
						en Policarpa, y la determinación de sus habitantes para buscar la garantía de sus
						derechos, en Agosto del 2017 creamos LATIR, y emprendimos el camino de soñar y
						transformarnos
					</p>

					<p>
						Para el 2019, tras hacer una pausa y evaluar desde dónde podíamos generar un mayor
						impacto, decidimos trasladarnos a Bogota, donde activamos fuertemente nuestras redes, y
						nuestro sueño empezó a latir con más fuerza que nunca
					</p>

					<p>
						Es así como desde julio del 2019, hemos implementado un proyecto al mes en zonas rurales
						de Cundinamarca y Boyacá. Y nuestro impulso sigue creciendo
					</p>
				</Text>
			</Container>
		</Section>
	);
};

export default HistoryComponent;
