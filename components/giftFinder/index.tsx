import { Box, useMediaQuery, useTheme } from "@/ui-library";
import React from "react";
import ProgressBar from "@/ui-library/components/atom/progressBar";

import GiftFinderCarousel from "./carousel";

const GiftFinder = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme?.breakpoints.down("md"));
	return (
		<Box
			sx={{
				height: "calc(100vh - 50px)",
				marginTop: "-50px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				gap: 4,
			}}
		>
			<Box
				sx={{
					width: "100%",
					maxWidth: isMobile ? "480px" : "680px",
					marginBotom: "24px",
				}}
			>
				<ProgressBar />
			</Box>

			<GiftFinderCarousel />
		</Box>
	);
};

export default GiftFinder;
