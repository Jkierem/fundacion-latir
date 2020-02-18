
import React from "react";
import Section  from '../../../components/Section';
import { useDevice, isLaptop } from "../../../hooks";
import WideView from "./WideView";

const Splash = props => {
	const device = useDevice();
	const laptop = isLaptop(device);
	return (
		<WideView/>
	);
};

export default Splash;