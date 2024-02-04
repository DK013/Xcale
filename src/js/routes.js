import HomePage from "../pages/home.jsx";
import PreviewPage from "../pages/preview.jsx";

var routes = [
	{
		path: "/",
		name: "home",
		master: true,
		component: HomePage,
		detailRoutes: [
			{
				path: "/preview",
				name: "preview",
				component: PreviewPage,
			},
		],
	},
];

export default routes;
