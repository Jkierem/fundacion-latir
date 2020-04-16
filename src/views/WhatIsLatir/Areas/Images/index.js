import React from "react";
import styled from "styled-components";
import { HoverImage } from "../../../../components";
import Colors from "../../../../utils/colors";

import gestion from "../../../../resources/images/2_que_es_latir/1_gestion_del_conocimiento.jpg";
import acompanamiento from "../../../../resources/images/2_que_es_latir/2_acompanamiento_situado.jpg";
import incidencia from "../../../../resources/images/2_que_es_latir/3_incidencia.jpg";
import desarrollo from "../../../../resources/images/2_que_es_latir/4_desarrollo_institucional.jpg";

const HoverConstraint = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`;

const Images = () => {
	return (
		<>
			<HoverConstraint>
				<HoverImage
					area="img1"
					src={gestion}
					text="Gestión del Conocimiento"
					color={Colors.Pastel.Violet}
				/>
			</HoverConstraint>
			<HoverConstraint>
				<HoverImage
					area="img2"
					src={acompanamiento}
					text="Acompañamiento Situado"
					color={Colors.Pastel.Yellow}
				/>
			</HoverConstraint>
			<HoverConstraint>
				<HoverImage area="img3" src={incidencia} text="Incidencia" color={Colors.Pastel.Green} />
			</HoverConstraint>
			<HoverConstraint>
				<HoverImage
					area="img4"
					src={desarrollo}
					text="Desarrollo Institucional"
					color={Colors.Pastel.Orange}
				/>
			</HoverConstraint>
		</>
	);
};

export default Images;
