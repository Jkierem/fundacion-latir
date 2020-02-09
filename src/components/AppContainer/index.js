import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Content = styled.main`
	width: 100%;
	height: 90%;
	margin: 0;
	padding-top: 80px;
`;

const Container = styled.div`
	font-family: Helvetica;
`;

const AppContainer = props => {
	return (
		<Container>
			<Navbar />
			<Content>{props.children}</Content>
			<Footer />
		</Container>
	);
};

export default AppContainer;
