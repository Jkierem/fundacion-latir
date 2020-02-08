import React from "react";
import { Section } from "../../../components";
import { useDevice, isLaptop } from "../../../hooks";
import WideView from "./WideView";
import NarrowView from "./NarrowView";

const Areas = props => {
	const device = useDevice();
	const laptop = isLaptop(device);
	return (
		<Section id={"areas"} fullscreen={laptop}>
			{laptop ? <WideView /> : <NarrowView />}
		</Section>
	);
};

export default Areas;
