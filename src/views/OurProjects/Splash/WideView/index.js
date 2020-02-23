import React from "react";
import styled from "styled-components";
import Description from "../Description";
import Fonts from "../../../../utils/fonts";
import RightText from "../RightText";
import LeftText from "../LeftText";
import { Button } from "../../../../components";

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

const ButtonGroupContainer = styled.div`
	display: grid;
	grid-template-columns: 0.8fr 0.5fr 0.7fr 1fr 0.2fr;
	grid-template-rows: repeat(2, 0.1fr) 0.2fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	dislpay: flex;
`;
const Button1 = styled.div`
	grid-area: 1 / 3 / 2 / 4;
`;
const Button2 = styled.div`
	grid-area: 2 / 2 / 3 / 3;
	text-align: center;
`;
const Button3 = styled.div`
	grid-area: 2 / 4 / 3 / 5;
	text-align: center;
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
			<ButtonGroupContainer>
				<Button1>
					<Button>Conoce Nuestro Impacto</Button>
				</Button1>
				<Button2>
					<Button>Quiero Unirme</Button>
				</Button2>
				<Button3>
					<Button>Quiero Donar</Button>
				</Button3>
			</ButtonGroupContainer>
		</div>
	);
};

export default WideView;
