import React from "react";
import styled from "styled-components";
import Section from "../Section";
import Icon from "../Icon";
import Button from "../Button";
import { useHistory } from "react-router-dom";

import logo from "../../resources/images/relogoslatir/512x512px.svg";

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const ViewPlaceholder = props => {
	const history = useHistory();
	return (
		<Section fullscreen>
			<Content>
				<Icon src={logo} size={"huge"} />
				<h1>Esta página está en construcción. ¡Conócela pronto!</h1>
				<Button
					onClick={() => {
						history.goBack();
					}}
				>
					Regresar
				</Button>
			</Content>
		</Section>
	);
};

export default ViewPlaceholder;
