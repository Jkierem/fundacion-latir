import React from "react";
import { Section } from "../../../components";
import { useDevice, isLaptop } from "../../../hooks";
import WideView from "./WideView";
import NarrowView from "./NarrowView";

const Splash = props => {
	const device = useDevice();
	const laptop = isLaptop(device);
	return (
		<Section id={"splash"} fullscreen={laptop}>
			{laptop ? <WideView /> : <NarrowView />}
		</Section>
	);
};

export default Splash;
