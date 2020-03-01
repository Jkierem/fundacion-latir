import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: 600px;
	padding-right: 60px;
	padding-left: 80px;
	padding-bottom: 60px;
	margin: auto;
`;

const PaddedTitle = styled.h2`
	padding-bottom: 20px;
	padding-top: 15px;
`;

const ItemLink = ({ title, text, target, href, link }) => {
	return (
		<>
			<li>
				<PaddedTitle>{title}</PaddedTitle>
			</li>
			<p>
				{text}{" "}
				<a target={target} href={href}>
					{" "}
					{link}{" "}
				</a>{" "}
			</p>
		</>
	);
};

const Item = ({ title, text, src = "" }) => {
	return (
		<>
			<li>
				<PaddedTitle>{title}</PaddedTitle>
			</li>
			<p>{text}</p>
		</>
	);
};

const ItemsContainer = () => {
	return (
		<StyledContainer>
			<ItemLink
				title="¡Nos interesa conocerte!"
				text="Lo primero que privilegiamos es saber de ti aquello que nos quieras compartir sobre tus interes, gustos, los conocimientos que quieres poner al servicio y los cambios que sueñas inspirar. Para hello hemos diseñado el siguiente "
				target="_blank"
				href="tryit.asp?filename=trycss_text"
				link="formulario"
			/>
			<Item
				title="Conécta con nuestro equipo de trabajo"
				text="Una vez conocemos sobre ti y tus expectativas y reconocemos tu disponibilidad, te invitamos a conectar con el equipo de trabajo con el que aprenderás, aportarás y pondrás al sevicio de nuestra casusa toda tu creatividad Según el área a la cual te vincules, tendrás reuniones de trabajo semanales, quincenales o mensuales"
			/>
			<Item
				title="Capacitémonos y entrenémonos"
				text="Para avanzar en el sueño de servir cada vez mejor, realizamos espacios de capacitación en aquello que toos los miembros de LATIR deben saber, y nos entrenamos en algunas habilidades especificas de las que puedes aprender o enseñar desde lo que sabes. Esto último quiere decir que  puedes compartir y enseñar tu conocimiento con el equipo, para lo cual abriremos una convocatoria cuando llegue el momento."
			/>
		</StyledContainer>
	);
};

export default ItemsContainer;
