import React from "react";
import styled from "styled-components";
import { Section } from "../../../components";
import Item from "./Item";

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
	background-color: #e3f3f0;
	padding: 2% 15%;
`;

const Accountability = () => {
	return (
		<Section id={"accountability"}>
			<ItemsContainer>
				<Item title="4" text="Comunidades acompañadas" />
				<Item title="11" text="Sedes educativas rurales beneficiarias" />
				<Item title="22" text="Voluntarios se han movilizado" />
				<Item title="2,720" text="Vidas han sido impactadas" />
				<Item title="692" text="Niños, niñas y adolecentes han vividido nuestros talleres" />
				<Item title="735" text="Libros han sido donados" />
			</ItemsContainer>
		</Section>
	);
};

export default Accountability;
