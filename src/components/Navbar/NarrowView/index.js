import React from "react";
import styled from "styled-components";
import { identity } from "@juan-utils/functions";
import Colors from "../../../utils/colors";
import HamburgerButton from "../../HamburgerButton";
import Icon from "../../Icon";
import logo from "../../../resources/images/relogoslatir/512x512px_blanco.svg";

const NarrowLogoContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	font-weight: bold;
	color: ${Colors.Primary.hexString()};
	cursor: pointer;
	user-select: none;
`;

const NarrowLogo = ({ onClick = identity }) => {
	return (
		<NarrowLogoContainer onClick={onClick}>
			<Icon src={logo} alt="logo" />
		</NarrowLogoContainer>
	);
};

const HamburgerContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NarrowView = () => {
	return (
		<>
			<HamburgerContainer>
				<HamburgerButton />
			</HamburgerContainer>
			<NarrowLogo />
		</>
	);
};

export default NarrowView;
