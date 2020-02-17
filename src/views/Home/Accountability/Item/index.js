import React from "react";
import styled from "styled-components";
import TitleContainer from "../TitleContainer";
import Fonts from "../../../../utils/fonts";

const ItemContainer = styled.div`
	position: relative;
	margin: 0 2%;
	flex-basis: 280px;
`;

const TextContainer = styled.div`
	width: auto;
	color: black;
	font-size: ${Fonts.SizeValues.Normal};
	text-align: center;
	padding: 5%;
`;

const StyledItem = styled.div`
	text-align: center;
	align-items: center;
	justify-content: space-around;
	margin: 16px;
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

export default Item;
