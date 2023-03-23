import * as React from "react";
import { Box } from "@/ui-library";
import { Metadata } from "@/components/metadata";
import GiftFinder from "@/components/giftFinder";

export default function Home() {
	const metadataLogin = {
		title: "Home",
		description: "Home page for Reviewrly",

		keywords: ["Login", "Sign up", "Product", "Review", "Account"],
	};
	return (
		<Box>
			<Metadata {...metadataLogin} />
			<GiftFinder />
		</Box>
	);
}
