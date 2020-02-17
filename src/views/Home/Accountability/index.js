import React from "react";
import styled from "styled-components";
import { Button, Icon, Section } from "../../../components";
import Item from "./Item";
import TitleContainer from "./TitleContainer";

import amaLogo from "../../../resources/images/home/amalogo.jpg";
import armonicosLogo from "../../../resources/images/home/espaciosarmonicoslogo.svg";

const ItemsContainer = styled.div`
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

const NetworkingGalleryContainer = styled.div`
	padding: 10% 0;
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
	margin: 16px;
`;

const ButtonContainer = styled.div`
	display: flex;
	position: relative;
	box-sizing: border-box;
	justify-content: center;
`;

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
						<Icon src={amaLogo} alt={"Fundación AMA"} size={"big"} />
						<Icon src={armonicosLogo} alt={"Espacios Armónicos"} size={"big"} />
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
