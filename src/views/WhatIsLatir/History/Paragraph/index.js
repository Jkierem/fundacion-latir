import React from "react";
import styled from "styled-components";
import Fonts from "../../../../utils/fonts";

const ParagraphPosition = styled.div`
	grid-area: 2 / 2 / 4 / 5;
	font-size: ${Fonts.SizeValues.Huge};
	text-align: center;
`;

const Paragraph = () => {
	return (
		<ParagraphPosition>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam rutrum dolor, non
			fermentum tortor imperdiet vitae. Pellentesque suscipit a dolor non congue. Curabitur at
			porttitor ipsum. Nulla eu diam nisl. Donec sodales varius ante, sagittis condimentum magna
			viverra ut. Nam cursus purus et leo rhoncus interdum. Cras consectetur neque eget neque
			convallis lobortis. Fusce at sem eros. Phasellus sit amet tincidunt libero. Integer sit amet
			dapibus erat, eget auctor odio
		</ParagraphPosition>
	);
};

export default Paragraph;
