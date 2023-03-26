import { Box, useMediaQuery, useTheme } from "@/ui-library";
import React from "react";
import Bubble from "./bubble";
import { uuid } from "uuidv4";

const Movables = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme?.breakpoints.down("md"));
	let items = isMobile ? 200 : 400;
	let arry = [...Array(items)];

	return (
		<Box
			sx={{
				height: isMobile ? "calc(100vh - 100px)" : "100vh",
				overflow: "hidden",
				position: "absolute",
				width: "100%",
				top: 0,
				left: 0,
				zIndex: -9999,
				opacity: 0.4,
			}}
		>
			{arry.map(() => (
				<Bubble key={uuid()} />
			))}
		</Box>
	);
};

export default Movables;
