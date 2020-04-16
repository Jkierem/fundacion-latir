import React from "react";
import styled from "styled-components";
import Fonts from "../../../../utils/fonts";

const ItemContainer = styled.div`
	position: relative;
	margin: 3% 2%;
	flex-basis: 280px;
	text-align: center;
	align-items: center;
	justify-content: space-around;
`;

const TextContainer = styled.div`
	width: auto;
	color: black;
	font-size: ${Fonts.SizeValues.Big};
	text-align: center;
	padding: 5%;
`;

const TitleContainer = styled.div`
	width: auto;
	color: black;
	font-size: ${Fonts.SizeValues.Largest};
	text-align: center;
	padding: 5%;
`;

const Item = ({ title, text }) => {
	return (
		<ItemContainer>
			<TitleContainer>
				<h2>{title}</h2>
			</TitleContainer>
			<TextContainer>
				<p>{text}</p>
			</TextContainer>
		</ItemContainer>
	);
};

export default Item;
