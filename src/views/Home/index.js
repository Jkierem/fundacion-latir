import React from "react";
import Splash from "./Splash";
import OurProjectsToday from "./OurProjectsToday";
import Accountability from "./Accountability";

const Home = props => {
	return (
		<div>
			<Splash />
			<OurProjectsToday />
			<Accountability />
		</div>
	);
};

export default Home;
