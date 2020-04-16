import React from "react";
import { Section } from "../../../components";
import styled from "styled-components";
import Image from "./Image";
import Description from "./Description";
import ButtonGroup from "./ButtonGroup";

const StyledWide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	padding: 0px 24px;
`;

const Splash = props => {
	return (
		<Section fullscreen id="splash">
			<StyledWide>
				<Image />
				<Description />
				<ButtonGroup />
			</StyledWide>
		</Section>
	);
};

export default Splash;
