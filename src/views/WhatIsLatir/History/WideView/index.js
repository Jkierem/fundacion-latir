import React from "react";
import styled from "styled-components";
import Paragraph from "../Paragraph";
import Background from "../Background";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`;

const WideView = () => {
	return (
		<Container>
			<Background />
			<Paragraph />
		</Container>
	);
};

export default WideView;
