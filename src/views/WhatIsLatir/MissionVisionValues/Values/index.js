import React from "react";
import styled from "styled-components";
import { ValueItem } from "../../../../components";

import coherencia from "../../../../resources/images/3_mision_vision_valores/coherencia.png";
import compromiso from "../../../../resources/images/3_mision_vision_valores/compromiso.png";
import cooperacion from "../../../../resources/images/3_mision_vision_valores/cooperacion.png";
import creatividad from "../../../../resources/images/3_mision_vision_valores/creatividad.png";
import gratitud from "../../../../resources/images/3_mision_vision_valores/gratitud.png";
import integridad from "../../../../resources/images/3_mision_vision_valores/integridad.png";
import proactividad from "../../../../resources/images/3_mision_vision_valores/proactividad.png";
import vocacion from "../../../../resources/images/3_mision_vision_valores/vocacion.png";

const ValuesTitle = styled.h1`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 5% 0;
`;

const ValuesContainer = styled.div`
	grid-area: values;
	width: 100%;
	height: 100%;
	display: flex;
	padding: 0 5%;
	flex-direction: row;
	justify-content: space-around;
	align-items: baseline;
	align-content: space-around;
	flex-wrap: wrap;
	box-sizing: border-box;
`;

const ValueItemContainer = styled.div`
	position: relative;
	max-width: 25%;
	margin: 0 20px;
	flex-basis: 280px;
	flex-grow: 0;
	flex-shrink: 0;
`;

const Value = ({ src, title, text }) => {
	const props = {
		alt: title.toLowerCase(),
		text,
		title,
		src,
		imgProps: {
			width: "auto",
			height: "130px",
		},
	};
	return (
		<ValueItemContainer>
			<ValueItem {...props} />
		</ValueItemContainer>
	);
};

const Values = () => {
	return (
		<>
			<ValuesTitle>Valores</ValuesTitle>
			<ValuesContainer>
				<Value
					src={integridad}
					title="Integridad"
					text="Nos relacionamos de manera auténtica y transparente"
				/>
				<Value src={coherencia} title="Coherencia" text="Reflejamos lo que predicamos" />
				<Value src={proactividad} title="Proactividad" text="Hacemos que las cosas pasen" />
				<Value
					src={compromiso}
					title="Compromiso"
					text="Nos tomamos el tiempo necesario para hacer lo que genera el mayor bien posible"
				/>
				<Value
					src={cooperacion}
					title="Cooperación"
					text="Nos complementamos para generar un mayor impacto con lo que hacemos"
				/>
				<Value
					src={creatividad}
					title="Creatividad"
					text="Generamos nuevas ideas para producir soluciones originales y adecuadas"
				/>
				<Value
					src={vocacion}
					title="Vocación"
					text="Nos une el deseo interior por servir y acompañar donde se necesita"
				/>
				<Value
					src={gratitud}
					title="Gratitud"
					text="Expresamos nuestro aprecio y reconocimiento por aquellas personas y comunidades con quienes trabajamos, y a todos los que nos apoyan"
				/>
			</ValuesContainer>
		</>
	);
};

export default Values;
