import { Box, ContentWrap, NavBar } from "@/ui-library";
import React from "react";
import { GlobalStyle } from "./globalStyles";
import Movables from "./movable";

const Page = ({ children }: any) => {
	return (
		<Box>
			<Movables />
			<NavBar />

			<GlobalStyle />
			<ContentWrap>{children}</ContentWrap>
		</Box>
	);
};

export default Page;
