import React from "react";
import styled from "styled-components";

const Container = styled.div`
	grid-area: 1 / 1 / 6 / 6;
`;

const Background = () => {
	return (
		<Container>
			<img src={"https://i.picsum.photos/id/132/1400/800.jpg"} />
		</Container>
	);
};

export default Background;
