import React from "react";
import Styled from "styled-components";

const StyledLocationItem = Styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "leftItem leftItem"
  "rightItem rightItem";
  grid-template-columns:  1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const StyledImage = Styled.img`
	grid-area: leftItem;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  width: ${props => props.width || "100%"};
`;

const StyledDescription = Styled.div`
	grid-area: rightItem;
  margin-top: 10px;
`;

const MarginContainer = Styled.div`
	margin: 5% 0;
`;

const NarrowView = ({ src, title, text }) => {
	return (
		<>
			<MarginContainer>
				<h2>{title}</h2>
			</MarginContainer>
			<StyledLocationItem>
				<StyledImage src={src} />
				<StyledDescription>
					<p>{text}</p>
				</StyledDescription>
			</StyledLocationItem>
		</>
	);
};

export default NarrowView;
