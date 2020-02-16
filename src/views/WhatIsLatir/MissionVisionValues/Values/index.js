import React from "react";
import styled from "styled-components";
import { ValueItem } from "../../../../components";

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
	return (
		<ValueItemContainer>
			<ValueItem src={src} title={title} text={text} alt={title.toLowerCase()} />
		</ValueItemContainer>
	);
};

const Values = () => {
	return (
		<>
			<ValuesTitle>Valores</ValuesTitle>
			<ValuesContainer>
				<Value
					src="https://picsum.photos/130/130"
					title="Integridad"
					text="Nos relacionamos de manera auténtica y transparente"
				/>
				<Value
					src="https://picsum.photos/130/130"
					title="Coherencia"
					text="Reflejamos lo que predicamos"
				/>
				<Value
					src="https://picsum.photos/130/130"
					title="Proactividad"
					text="Hacemos que las cosas pasen"
				/>
				<Value
					src="https://picsum.photos/130/130"
					title="Compromiso"
					text="Nos tomamos el tiempo necesario para hacer lo que genera el mayor bien posible"
				/>
				<Value
					src="https://picsum.photos/130/130"
					title="Cooperación"
					text="Nos complementamos para generar un mayor impacto con lo que hacemos"
				/>
				<Value
					src="https://picsum.photos/130/130"
					title="Creatividad"
					text="Generamos nuevas ideas para producir soluciones originales y adecuadas"
				/>
				<Value
					src="https://picsum.photos/130/130"
					title="Vocación"
					text="Nos une el deseo interior por servir y acompañar donde se necesita"
				/>
				<Value
					src="https://picsum.photos/130/130"
					title="Gratitud"
					text="Expresamos nuestro aprecio y reconocimiento por aquellas personas y comunidades con quienes trabajamos, y a todos los que nos apoyan"
				/>
			</ValuesContainer>
		</>
	);
};

export default Values;
