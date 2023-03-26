import Head from "next/head";

type PageHeadProps = {
	title: any;
	description?: string;
	keywords?: Array<string>;
	adId?: Array<string>;
};

export const Metadata = ({
	title,
	description,
	keywords = [],
	adId,
}: PageHeadProps): JSX.Element => {
	const scriptTags = adId?.map((ad: string) => (
		// <script
		// 	key={ad}
		// 	src={`//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${ad}`}
		// />
		<></>
	));
	return (
		<Head>
			<meta
				name='viewport'
				content='width=device-width'
			/>
			<meta charSet='utf-8' />
			<title>{title} | Gift Craker</title>
			<link
				rel='icon'
				href='https://firebasestorage.googleapis.com/v0/b/gift-craker.appspot.com/o/app%2Flogo-icon.png?alt=media&token=c6e31882-fbdc-43fe-836d-e116eab67fcc'
				type='image/x-icon'
			/>
			<link
				rel='shortcut icon'
				href='https://firebasestorage.googleapis.com/v0/b/gift-craker.appspot.com/o/app%2Flogo-icon.png?alt=media&token=c6e31882-fbdc-43fe-836d-e116eab67fcc'
				type='image/x-icon'
			/>
			{/* {scriptTags} */}
			{/* <script type='text/javascript'>
				amzn_assoc_placement = "adunit0"; amzn_assoc_tracking_id = "10276d-20";
				amzn_assoc_ad_mode = "search"; amzn_assoc_ad_type = "smart";
				amzn_assoc_marketplace = "amazon"; amzn_assoc_region = "US";
				amzn_assoc_default_search_phrase = "gift for dad";
				amzn_assoc_default_category = "Miscellaneous"; amzn_assoc_linkid =
				"bcfbf03f8d9cb071b10c830255fd38d2"; amzn_assoc_default_browse_node =
				"10272111"; amzn_assoc_design = "in_content";
			</script>
			<script src='//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US'></script> */}
			{description?.trim() !== "" && (
				<meta
					name='description'
					content={description}
					key='description'
				/>
			)}
			{keywords?.length > 0 && (
				<meta
					name='keywords'
					content={keywords?.join(",")}
				/>
			)}
		</Head>
	);
};
