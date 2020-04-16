import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components";

const StyledButton = styled.div`
	min-width: 200px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	padding: 16px;

	@media only screen and (min-width: 768px) {
		min-width: 35%;
	}
`;

const Buttons = () => {
	return (
		<StyledButton>
			<Button>Vision, Mision y Valores</Button>
			<Button>La Historia que Comienza</Button>
			<Button>Donde Hemos Estado</Button>
		</StyledButton>
	);
};

export default Buttons;
