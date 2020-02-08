import React from "react";
import styled from "styled-components";
import { HoverImage } from "../../../../components";

import gestion from "../../../../resources/images/home/1_gestion_del_conocimiento.png";
import acompanamiento from "../../../../resources/images/home/2_acompanamiento_situado.png";
import incidencia from "../../../../resources/images/home/3_incidencia.png";
import desarrollo from "../../../../resources/images/home/4_desarrollo_institucional.png";
import Colors from "../../../../utils/colors";

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
