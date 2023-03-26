import AmazonAd from "@/components/amazonAd";

const HomePage = () => {
	const adData = {
		amzn_assoc_placement: "adunit0",
		amzn_assoc_tracking_id: "10276d-20",
		amzn_assoc_ad_mode: "search",
		amzn_assoc_ad_type: "smart",
		amzn_assoc_marketplace: "amazon",
		amzn_assoc_region: "US",
		amzn_assoc_default_search_phrase: "gift for dad",
		amzn_assoc_default_category: "Miscellaneous",
		amzn_assoc_linkid: "bcfbf03f8d9cb071b10c830255fd38d2",
		amzn_assoc_default_browse_node: "10272111",
		amzn_assoc_design: "in_content",
	};

	return (
		<div>
			<h1>Welcome to my Next.js app!</h1>
			<AmazonAd adData={adData} />
		</div>
	);
};

export default HomePage;
