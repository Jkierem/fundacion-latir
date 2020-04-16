import React from "react";
import styled from "styled-components";
import { Button, Section, Icon } from "../../../components";
import { useHistory } from "react-router-dom";
import Fonts from "../../../utils/fonts";

const GalleriesContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	text-align: center;
	flex-direction: row;
	justify-content: space-around;
	align-items: baseline;
	align-content: space-around;
	flex-wrap: wrap;
	margin: 5% 0 0;
`;

const GalleryContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	min-width: 320px;
	margin: 16px 0;
	flex-basis: 50%;
`;

const TitleContainer = styled.div`
	width: auto;
	color: black;
	font-size: ${Fonts.SizeValues.Normal};
	text-align: center;
	padding: 5%;
`;

const ButtonContainer = styled.div`
	position: relative;
	padding: 5% 30%;
`;

const Gallery = () => {
	const history = useHistory();
	return (
		<Section id={"gallery"}>
			<GalleriesContainer>
				<GalleryContainer>
					<TitleContainer>
						<h2>Galería de Herramientas</h2>
					</TitleContainer>
					<Icon src="https://picsum.photos/130/130" alt="Galería de Herramientas" size="huge" />
				</GalleryContainer>
				<GalleryContainer>
					<TitleContainer>
						<h2>Galería de Historias</h2>
					</TitleContainer>
					<Icon src="https://picsum.photos/130/130" alt="Galería de Historias" size="huge" />
				</GalleryContainer>
			</GalleriesContainer>
			<ButtonContainer>
				<Button
					compact
					width="100%"
					onClick={() => {
						history.push("/gallery");
					}}
				>
					Ir a la galería
				</Button>
			</ButtonContainer>
		</Section>
	);
};

export default Gallery;
