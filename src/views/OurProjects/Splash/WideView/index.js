import React from "react";
import styled from "styled-components";
import Description from "../Description";
import Fonts from "../../../../utils/fonts";
import RightText from "../RightText";
import LeftText from "../LeftText";

const WideContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const SentenceContainer = styled.div`
	font-size: ${Fonts.SizeValues.Huge};
	text-align: center;
	grid-area: title;
	justify-content: center;
	padding: 3% 10%;
`;

const DescriptionContainer = styled.div`
	padding: 3% 20%;
`;

const WideView = () => {
	return (
		<div>
			<WideContainer>
				<DescriptionContainer>
					<Description />
				</DescriptionContainer>
				<SentenceContainer>
					!Esto apenas comienza y ya tenemos dos proyectos en accion¡
				</SentenceContainer>
			</WideContainer>
			<LeftText
				title="Cuentos a la Obra"
				src="https://i.picsum.photos/id/132/1400/800.jpg"
				paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit. "
			/>
			<RightText
				title="Pasa la Paz"
				src="https://i.picsum.photos/id/132/1400/800.jpg"
				paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id rhoncus leo. 
                Sed venenatis nulla ut sollicitudin euismod. Nulla et pharetra lorem. Fusce aliquet ex vitae 
                condimentum blandit."
			/>
		</div>
	);
};

export default WideView;
