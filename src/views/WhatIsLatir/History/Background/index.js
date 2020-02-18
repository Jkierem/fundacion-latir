import React from "react";
import styled from "styled-components";

const Container = styled.div`
	grid-area: 1 / 1 / 5 / 6;
	background-image: url("https://i.picsum.photos/id/132/1400/800.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	width: 100%;
`;

const Background = () => {
	return <Container />;
};

export default Background;
