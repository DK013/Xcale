import React from "react";
import {
	Page,
	Navbar,
	NavTitle,
	NavTitleLarge,
	Link,
	Toolbar,
	Block,
} from "framework7-react";

const PreviewPage = () => {
	return (
		<Page name="preview">
			<Navbar transparent>
				<NavTitle>
					Preview
				</NavTitle>
			</Navbar>
			<Block>This is the preview page</Block>
		</Page>
	);
};
export default PreviewPage;
