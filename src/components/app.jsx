import React, { useState, useEffect } from "react";

import { f7, f7ready, App, View } from "framework7-react";

import routes from "../js/routes";
import store from "../js/store";
import { getDevice } from "framework7/lite-bundle";

const MyApp = () => {
	const device = getDevice();
	// Framework7 Parameters
	const f7params = {
		name: "Xcale", // App name
		theme: "ios", // Automatic theme detection
		colors: {
			primary: "#038387",
		},
		darkMode: true,
		// App store
		store: store,
		id: "com.westenets.xcale",
		// App routes
		routes: routes,
		input: {
			scrollIntoViewOnFocus: device.cordova,
			scrollIntoViewCentered: device.cordova,
		},
	};

	f7ready(() => {
		// Call F7 APIs here
	});

	return (
		<App {...f7params}>
			{/* Your main view, should have "view-main" class */}
			<View
				main
				className="safe-areas"
				url="/"
				browserHistory
				browserHistorySeparator=""
				browserHistoryAnimateOnLoad
				masterDetailBreakpoint={1008}
				reloadDetail
			/>
		</App>
	);
};
export default MyApp;
