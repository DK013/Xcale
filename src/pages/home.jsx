import React, { useEffect } from "react";
import {
	Page,
	Link,
	Toolbar,
	Block,
	f7,
	Navbar,
	NavTitle,
	NavLeft,
	NavTitleLarge,
	Tabs,
  Tab,
} from "framework7-react";
import logo from "../assets/image/logo.png";

const HomePage = ({ f7router }) => {
	useEffect(() => {
		f7router.navigate("/preview");
	});

	return (
		<Page name="home" pageContent={false}>
			<Navbar transparent>
				<NavLeft>
					<img src={logo} className="align-middle max-h-[56px]" />
				</NavLeft>
			</Navbar>
			<Toolbar tabbar top className="rounded-full w-2/3">
				<Link
					tabLink="#imagetab"
					className="rounded-full"
					tabLinkActive>
					Image
				</Link>
				<Link tabLink="#videotab" className="rounded-full">
					Video
				</Link>
			</Toolbar>

			<Tabs animated>
				<Tab id="imagetab" className="page-content" tabActive>Image</Tab>
				<Tab id="videotab" className="page-content" tabActive>Video</Tab>
			</Tabs>
		</Page>
	);
};
export default HomePage;
