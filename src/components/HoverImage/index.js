import React from "react";
import styled from "styled-components";
import Fonts from "../../utils/fonts";
import Colors from "../../utils/colors";

const StyledImg = styled.div`
	display: flex;
	position: relative;
	cursor: pointer;
	overflow: hidden;
	width: ${props => props.width || "100%"};
	height: 100%;
	justify-content: center;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${props => props.src});
	grid-area: ${props => props.area};
`;

const Content = styled.div`
	position: absolute;
	background-color: rgba(
		${props => (props.color || Colors.Opaque).rgb().join(",")},
		${props => props.opacity || "0.9"}
	);
	opacity: 0;
	width: 100%;
	height: 100%;
	transition: all 400ms ease-out;
	text-align: center;

	${StyledImg}:hover & {
		opacity: 1;
	}
`;

const StyledText = styled.p`
	display: flex;
	font-size: ${Fonts.SizeValues.Huge};
	height: 0;
	opacity: 1;
	transition-delay: 0s;
	transition-duration: 0.4s;
	justify-content: center;
	align-items: center;
	padding: 0 5%;

	${Content}:hover & {
		opacity: 1;
		height: 100%;
	}
`;

const Img = styled.img`
	max-height: 0;
	max-width: 0;
	opacity: 0;
`;

const HoverImage = ({ area, src, text, alt, color, ...rest }) => {
	return (
		<StyledImg area={area} src={src} {...rest}>
			<Img src={src} alt={alt} />
			<Content color={color}>
				<StyledText>{text}</StyledText>
			</Content>
		</StyledImg>
	);
};

export default HoverImage;
