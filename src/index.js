import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ConfigureStore from "./store";
import i18nInitializer from "./i18n";

import "./reset.css";
import "./index.css";

const store = ConfigureStore();
i18nInitializer(store);

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById("root")
);
