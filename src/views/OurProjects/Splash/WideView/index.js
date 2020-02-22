import React from "react";
import styled from "styled-components";
import Description from "../Description";
import Fonts from "../../../../utils/fonts";
import RightText from "../RightText";
import LeftText from "../LeftText";

const WideContainer = styled.div`
	display: grid;
	grid-template-columns: 0.5fr repeat(5, 1fr) 0.5fr;
	grid-template-rows: 0.2fr 0.5fr 0.1fr;
	grid-column-gap: 0px;
	grid-row-gap: 10px;
	display: flex;
	flex-direction: column;
`;

const SentenceContainer = styled.div`
	grid-area: 3 / 2 / 4 / 7;
	font-size: ${Fonts.SizeValues.Huge};
	text-align: center;
	grid-area: title;
	justify-content: center;
	padding: 0% 10%;
`;
const ProjectsContainer = styled.div`
	grid-area: 6 / 2 / 7 / 7;
`;

const WideView = () => {
	return (
		<div>
			<WideContainer>
				<Description />
				<SentenceContainer>
					!Esto apenas comienza y ya tenemos dos proyectos en accion¡
				</SentenceContainer>
			</WideContainer>
			<LeftText
				title="Cuentos a la Obra"
				src="https://i.picsum.photos/id/132/1400/800.jpg"
				paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit. In dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit. In dapibus."
			/>
			<RightText
				title="Pasa la Paz"
				src="https://i.picsum.photos/id/132/1400/800.jpg"
				paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit. In dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit. In dapibus."
			/>
			<LeftText
				title="Cuentos a la Obra"
				src="https://i.picsum.photos/id/132/1400/800.jpg"
				paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit. In dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit. In dapibus."
			/>
		</div>
	);
};

export default WideView;
