import React, { useEffect } from "react";

const AmazonAd = ({ adData }: any) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.async = true;
		script.src = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US";
		document?.getElementById(adData.amzn_assoc_placement)?.appendChild(script);
	}, [adData.amzn_assoc_placement]);

	return <div id={adData.amzn_assoc_placement}></div>;
};

export default AmazonAd;
