import React, { useState } from "react";
import Colors from "../../utils/colors";
import styled from "styled-components";
import { identity } from "@juan-utils/functions";

const Bar = styled.div`
	width: 40px;
	height: 5px;
	background-color: ${Colors.White.hexString()};
	margin: 5px 0;
	border-radius: 5px;
	transition: 0.4s;

	${props => {
		if (props.open) {
			switch (props.position) {
				case "top":
					return "transform: rotate(-45deg) translate(-9px, 11px);";
				case "mid":
					return "opacity: 0;";
				case "bot":
				default:
					return "transform: rotate(45deg) translate(-9px, -12px);";
			}
		}
		return "transform: rotate(0deg) translate(0px, 0px);";
	}}
`;

const BarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5px;
	margin-left: 6px;
	cursor: pointer;
`;

const HamburgerButton = ({ onOpen = identity, onClose = identity, open }) => {
	const [isOpen, setOpen] = useState(open || false);
	const toggleOpen = () => setOpen(!isOpen);
	const handleClick = e => {
		toggleOpen();
		isOpen ? onClose(e, isOpen) : onOpen(e, isOpen);
	};

	return (
		<BarContainer onClick={handleClick}>
			<Bar position="top" open={isOpen} />
			<Bar position="mid" open={isOpen} />
			<Bar position="bot" open={isOpen} />
		</BarContainer>
	);
};

export default HamburgerButton;
