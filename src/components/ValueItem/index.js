import React from "react";
import styled from "styled-components";

const StyledValueItem = styled.div`
	text-align: center;
	grid-area: ${props => props.area};
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	height: 100%;
	width: auto;
	margin: 16px;
`;

const MarginContainer = styled.div`
	margin: 5% 0;
`;

const ValueItem = ({ area, src, title, text, alt = "auto-alt", imgProps }) => {
	return (
		<StyledValueItem area={area}>
			<img src={src} alt={alt} {...imgProps} />
			<MarginContainer>
				<h2>{title}</h2>
			</MarginContainer>
			<p>{text}</p>
		</StyledValueItem>
	);
};

export default ValueItem;
