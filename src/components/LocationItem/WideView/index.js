import React from "react";
import Styled from "styled-components";

const StyledLocationItem = Styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "leftItem rightItem"
  "leftItem rightItem";
  grid-template-columns:  1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const StyledImage = Styled.img`
	grid-area: ${props => props.area};
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`;

const StyledDescription = Styled.div`
	grid-area: ${props => props.area};
  text-align: center;
  margin-top: 3vw;
  margin-left: 40px;
  margin-right: 40px;
  line-height: 1.6;
  font-size:1.5vw;
`;

const MarginContainer = Styled.div`
	margin: 5% 0;
`;

const WideView = ({ src, title, text, imgToRight = true }) => {
	var areaimg = "rightItem",
		areatext = "leftItem";
	if (imgToRight) {
		areaimg = "leftItem";
		areatext = "rightItem";
	}
	return (
		<StyledLocationItem>
			<StyledImage src={src} area={areaimg} />
			<StyledDescription src={src} area={areatext}>
				<MarginContainer>
					<h3>{title}</h3>
				</MarginContainer>
				<p>{text}</p>
			</StyledDescription>
		</StyledLocationItem>
	);
};

export default WideView;
