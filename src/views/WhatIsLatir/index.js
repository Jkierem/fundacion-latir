import React from "react";
import Areas from "./Areas";
import MissionVisionValues from "./MissionVisionValues";
import Splash from "./Splash";
import History from "./History";
import WhereHaveBeen from "./WhereHaveBeen";

const WhatIsLatir = props => {
	return (
		<div>
			<Splash />
			<Areas />
			<MissionVisionValues />
			<History />
			<WhereHaveBeen />
		</div>
	);
};

export default WhatIsLatir;
