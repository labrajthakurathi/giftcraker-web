import { useEffect, useRef } from "react";

const AmazonAd = () => {
	const adRef = useRef(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US";
		script.async = true;
		script.onload = () => {
			const adHtml = `
        <script type="text/javascript">
          amzn_assoc_placement = "adunit0";
          amzn_assoc_tracking_id = "10276d-20";
          amzn_assoc_ad_mode = "manual";
          amzn_assoc_ad_type = "smart";
          amzn_assoc_marketplace = "amazon";
          amzn_assoc_region = "US";
          amzn_assoc_linkid = "92bd9edd9b58d1c6dcf5b2bb2e99a752";
          amzn_assoc_asins = "B07T73WZS6,B0B5XJTGDT,B007BVNF4O,B0B1QCGY57,B092RFHRVW";
          amzn_assoc_search_bar = "true";
          amzn_assoc_title = "My Amazon Picks";
        </script>
   
        <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
      `;
			adRef.current.innerHTML = adHtml;
		};
		adRef.current.appendChild(script);
		return () => {
			adRef.current.removeChild(script);
		};
	}, []);

	return <div ref={adRef} />;
};

export default AmazonAd;
