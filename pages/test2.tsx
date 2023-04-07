import AmazonAd from "@/components/amazonAd";
import { Metadata } from "@/components/metadata";
import React from "react";

const MyPage = () => {
	return (
		<>
			<Metadata title={"helo"} />
			<h1>Welcome to my page</h1>
			<AmazonAd />
		</>
	);
};

export default MyPage;
