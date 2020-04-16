import React from "react";
import Splash from "./Splash";
import OurProjectsToday from "./OurProjectsToday";
import Accountability from "./Accountability";
import Gallery from "./Gallery";
import Networking from "./Networking";

const Home = props => {
	return (
		<div>
			<Splash />
			<OurProjectsToday />
			<Accountability />
			<Gallery />
			<Networking />
		</div>
	);
};

export default Home;
