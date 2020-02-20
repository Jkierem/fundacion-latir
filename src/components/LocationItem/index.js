import React from "react";
import { useDevice, isMobile } from "../../hooks";
import WideView from "./WideView";
import NarrowView from "./NarrowView";

const LocationItem = ({ src, title, text, imgToRight = true }) => {
	const device = useDevice();
	const mobile = isMobile(device);

	return (
		<div>
			{mobile ? (
				<NarrowView src={src} title={title} text={text} imgToRight={imgToRight} />
			) : (
				<WideView src={src} title={title} text={text} imgToRight={imgToRight} />
			)}
		</div>
	);
};

export default LocationItem;
