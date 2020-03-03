import React from "react";
import styled from "styled-components";
import Fonts from "../../../../utils/fonts";
import DownText from "../DownText";
import { Button } from "../../../../components";

const InfoContainer = styled.div`
	grid-area: 2 / 2 / 3 / 3;
	display: flex;
	align-items: stretch | flex-start;
	flex-direction: column;
`;
const TitleContainer = styled.div`
	grid-area: 1 / 2 / 2 / 3;
	font-size: ${Fonts.SizeValues.Largest};
	text-align: center;
`;
const SubTextContainer = styled.div`
	grid-area: 4 / 2 / 5 / 3;
	font-size: ${Fonts.SizeValues.Huge};
	text-align: center;
	padding-top: 1%;
`;
const FirstButton = styled.div`
	grid-area: 3 / 2 / 4 / 3;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
`;
const SecondButton = styled.div`
	grid-area: 5 / 2 / 6 / 3;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
`;

const PrincipalContainer = styled.div`
	display: grid;
	grid-template-columns: 0.1fr 1fr 0.1fr;
	grid-template-rows: 0.05fr 1fr repeat(3, 0.04fr) 0.1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`;

function NarrowView(Props) {
	return (
		<PrincipalContainer>
			<TitleContainer>¿Desde donde puedo ser voluntario?</TitleContainer>
			<InfoContainer>
				<DownText
					title="Desde mi casa"
					src="https://i.picsum.photos/id/132/1400/800.jpg"
					paragraph="Puedo ayudar con diseño, manejo de redes, marketing digital, gestion de proyectos
                , diseño de metodologias u otros conocimientos especificos desde la comodidad de mi casa.
                "
				/>
				<DownText
					title="Desde Bogota"
					src="https://i.picsum.photos/id/132/1400/800.jpg"
					paragraph="Puedo ayudar en acciones puntuales que se desarrollan en la ciudad, como sistematizar
                libros y donaciones materiales. Planear talleres, gestionar recursos, elaborar informes,
                diseñar piezas audiovisuales, y, en general, aportar desde mi saber especifico."
				/>
				<DownText
					title="En Terreno"
					src="https://i.picsum.photos/id/132/1400/800.jpg"
					paragraph="Tengo disposicion para viajar a terreno y acompañar sus acciones siempre que cuente con la disponibilidad
                de tiempo. Me comprometo a hacer parte del diseño, implementacion y evaluacion de las acciones que acompañe."
				/>
			</InfoContainer>
			<FirstButton>
				<Button>Quiero unirme a LATIR</Button>
			</FirstButton>
			<SubTextContainer>Trabaja o haz tu práctica en LATIR</SubTextContainer>
			<SecondButton>
				<Button>Ver postulaciones</Button>
			</SecondButton>
		</PrincipalContainer>
	);
}

export default NarrowView;
