import React, { useState } from "react";
import styled from "styled-components";
import { identity, compose } from "@juan-utils/functions";
import Colors from "../../../utils/colors";
import Fonts from "../../../utils/fonts";
import HamburgerButton from "../../HamburgerButton";
import Icon from "../../Icon";
import Link from "../../Link";
import logo from "../../../resources/images/relogoslatir/512x512px_blanco.svg";
import { useHistory } from "react-router";

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

const MenuComponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	overflow: hidden;
	height: ${props => (props.open ? "100%" : 0)};
	width: 100vw;
	transition: 0.3s height ease-out;
	margin-top: 80px;
	font-size: ${Fonts.SizeValues.Huge};
	background-color: ${Colors.Black.hexString};

	& ${Link.Style} {
		margin: 16px;
	}

	& ${Link.InnerStyle} {
		width: 100%;
		text-align: center;
	}
`;

const Menu = ({ open, onClick }) => {
	return (
		<MenuComponent open={open}>
			<Link onClick={onClick} to="/what-is-latir">
				¿Qué es LATIR?
			</Link>
			<Link onClick={onClick} to="/our-projects">
				Nuestros Proyectos
			</Link>
			<Link onClick={onClick} to="/how-to-participate">
				¿Cómo participar?
			</Link>
			<Link onClick={onClick} to="/finance">
				Rendición de Cuentas
			</Link>
			<Link onClick={onClick} to="/gallery">
				Galería
			</Link>
			<Link onClick={onClick} to="/workshops">
				Talleres
			</Link>
		</MenuComponent>
	);
};

const NarrowView = () => {
	const history = useHistory();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleHome = () => {
		history.push("/");
	};

	return (
		<>
			<HamburgerContainer>
				<HamburgerButton open={open} onOpen={handleOpen} onClose={handleClose} />
			</HamburgerContainer>
			<NarrowLogo onClick={compose(handleClose, handleHome)} />
			<Menu open={open} onClick={handleClose} />
		</>
	);
};

export default NarrowView;
