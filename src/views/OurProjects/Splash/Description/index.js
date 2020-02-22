import React from "react";
import styled from "styled-components";
import Fonts from "../../../../utils/fonts";
const DescriptionContainer = styled.div`
	grid-area: 2 / 3 / 3 / 6;
	text-align: left;
	grid-area: title;
	justify-content: center;
	font-size: ${Fonts.SizeValues.Huge};
`;

const Description = () => {
	return (
		<DescriptionContainer>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus libero aliquam tempus
			facilisis. Pellentesque convallis, nisl viverra hendrerit varius, lectus odio rhoncus leo, in
			pellentesque dui elit vitae tortor. Integer eleifend velit vitae sapien finibus placerat.
			Maecenas ultricies mattis diam. Morbi eu augue ex. Sed quis nisi consequat, aliquet augue
			quis, porta risus.
		</DescriptionContainer>
	);
};

export default Description;
