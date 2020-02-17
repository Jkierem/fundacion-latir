import React from "react";
import styled from "styled-components";
import Section from "../../../components/Section";
import Icon from "../../../components/Icon";
import { Button } from "../../../components";
import Fonts from "../../../utils/fonts";
import amaLogo from "../../../resources/images/home/amalogo.jpg";
import armonicosLogo from "../../../resources/images/home/espaciosarmonicoslogo.svg";

const TitleContainer = styled.header`
	color: gray;
	font-size: ${Fonts.SizeValues.Huge};
	display: flex;
	flex-direction: column;
	text-align: center;
	grid-area: title;
	justify-content: center;
	width: 100%;
	height: auto;
	align-content: center;
`;

const TextContainer = styled.div`
	width: auto;
	color: black;
	font-size: ${Fonts.SizeValues.Normal};
	text-align: center;
	padding: 5%;
`;

const ItemsContainer = styled.div`
	grid-area: items;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: baseline;
	align-content: space-around;
	flex-wrap: wrap;
	box-sizing: border-box;
`;

const ItemContainer = styled.div`
	position: relative;
	flex-wrap: flex;
	margin: 0 2%;
	flex-basis: 280px;
	flex-grow: 0;
	flex-shrink: 0;
`;
const StyledItem = styled.div`
	text-align: center;
	align-items: center;
	justify-content: space-around;
`;
const Base = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || "column"};
	justify-content: ${props => props.justify || "center"};
	align-items: ${props => props.align || "center"};
	font-size: initial;
`;
const NetworkingGalleryContainer = styled(Base)`
	padding: 10% 0;
	/* position: relative;
	height: auto;
	box-sizing: border-box; */
	grid-area: items;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: baseline;
	align-content: space-around;
	flex-wrap: wrap;
	box-sizing: border-box;
`;
const NetworkingContainer = styled.div`
	position: relative;
	flex-wrap: flex;
`;
const ButtonContainer = styled.div`
	display: flex;
	position: relative;
	box-sizing: border-box;
	justify-content: center;
`;
const Item = ({ title, text }) => {
	return (
		<ItemContainer>
			<StyledItem>
				<TitleContainer>
					<h2>{title}</h2>
				</TitleContainer>
				<TextContainer>
					<p>{text}</p>
				</TextContainer>
			</StyledItem>
		</ItemContainer>
	);
};

const Accountability = () => {
	return (
		<Section id={"accountability"}>
			<ItemsContainer>
				<Item title="4" text="Comunidades acompañadas" />
				<Item title="11" text="Sedes educativas rurales beneficiarias" />
				<Item title="692" text="Niños, niñas y adolecentes han vividido nuestros talleres" />
				<Item title="2,720" text="Vidas han sido impactadas" />
				<Item title="735" text="Libros han sido donados" />
				<Item title="22" text="Voluntarios se han movilizado" />
			</ItemsContainer>
			<NetworkingGalleryContainer>
				<NetworkingContainer>
					<TitleContainer>
						<h2>Redes y Organizaciones Asociadas</h2>
					</TitleContainer>
					<ItemsContainer>
						<Icon src={amaLogo} alt={"Fundación AMA"} size={"huge"} />
						<Icon src={armonicosLogo} alt={"Espacios Armónicos"} size={"huge"} />
					</ItemsContainer>
				</NetworkingContainer>
				<NetworkingContainer>
					<TitleContainer>
						<h2>Galeria de Historias y Herramientas</h2>
					</TitleContainer>
					<ButtonContainer>
						<Button>Ir a Galería</Button>
					</ButtonContainer>
				</NetworkingContainer>
			</NetworkingGalleryContainer>
		</Section>
	);
};

export default Accountability;
