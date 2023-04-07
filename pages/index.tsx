import * as React from "react";
import { Box } from "@/ui-library";
import { Metadata } from "@/components/metadata";
import GiftFinder from "@/components/giftFinder";
import { useGlobal } from "@/context/globalContext";
import useFirebaseData from "@/hooks/useFirebaseFetchData";

export default function Home() {
	const { setTags, tags } = useGlobal();
	const metadataLogin = {
		title: "Home",
		description: "Home page for Reviewrly",
		keywords: ["Login", "Sign up", "Product", "Review", "Account"],
	};
	React.useEffect(() => {
		setTagsFromFirebase();
	}, []);

	const setTagsFromFirebase = async () => {
		let tags: any = await useFirebaseData("tags", "all");
		setTags({ ...tags });
	};
	console.log(tags);
	return (
		<Box>
			<Metadata {...metadataLogin} />
			<GiftFinder />
		</Box>
	);
}
