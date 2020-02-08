import React from "react";
import { AppContainer } from "./components";
import { Route, Switch } from "react-router-dom";
import {
	Accountability,
	Allies,
	Donate,
	Finance,
	Gallery,
	Home,
	HowToParticipate,
	OurProjects,
	WhatIsLatir,
	Workshops,
} from "./views";

const App = () => {
	return (
		<AppContainer>
			<Switch>
				<Route path={"/accountability"}>
					<Accountability />
				</Route>
				<Route path={"/allies"}>
					<Allies />
				</Route>
				<Route path={"/donate"}>
					<Donate />
				</Route>
				<Route path={"/finance"}>
					<Finance />
				</Route>
				<Route path={"/gallery"}>
					<Gallery />
				</Route>
				<Route path={"/how-to-participate"}>
					<HowToParticipate />
				</Route>
				<Route path={"/our-projects"}>
					<OurProjects />
				</Route>
				<Route path={"/what-is-latir"}>
					<WhatIsLatir />
				</Route>
				<Route path={"/workshops"}>
					<Workshops />
				</Route>
				<Route path={"/"}>
					<Home />
				</Route>
			</Switch>
		</AppContainer>
	);
};

export default App;
