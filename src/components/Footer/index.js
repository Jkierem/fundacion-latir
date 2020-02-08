import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import Colors from "../../utils/colors";

import logo from "../../resources/images/relogoslatir/512x512px_blanco.svg";
import facebook from "../../resources/images/facebook.png";
import instagram from "../../resources/images/instagram.png";

const Container = styled.footer`
	display: flex;
	padding: 16px;
	background-color: ${Colors.Black.hexString};
	justify-content: flex-start;
`;

const IconLink = styled.a`
	margin: 0 5px;
`;

const LeftContent = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: flex-start;
	margin-left: auto;
`;

const Footer = () => {
	return (
		<Container>
			<Icon src={logo} alt={"logo"} size={"normal"} />
			<LeftContent>
				<IconLink href="https://www.facebook.com/Fundaci%C3%B3n-LATIR-Equidad-en-el-Mundo-488062341964425/">
					<Icon src={facebook} alt={"facebook"} size={"small"} />
				</IconLink>
				<IconLink href="https://www.instagram.com/fundacionlatir/">
					<Icon src={instagram} alt={"instagram"} size={"small"} />
				</IconLink>
			</LeftContent>
		</Container>
	);
};

export default Footer;
