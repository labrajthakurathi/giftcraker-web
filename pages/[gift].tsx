import React from "react";
import { Box, Button } from "@/ui-library";
import { Metadata } from "@/components/metadata";
import { useEffect, useState } from "react";
import { defaultGiftPageMetadata } from "@/constants";
import Badges from "@/components/gift/badges";
import GiftSection from "@/components/gift/giftSection";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import useFirebaseFetchData from "@/hooks/useFirebaseFetchData";

export const getStaticPaths = async () => {
	const res: any = await useFirebaseFetchData("urls", "gift");
	let data = res.urld;

	const paths = data.map((item: string) => {
		return {
			params: { gift: item },
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
};
export async function getStaticProps(context: any) {
	const { params } = context;
	const isDefault = params.gift;
	let dta;

	if (params.gift !== "gifts") {
		dta = await useFirebaseFetchData("dataFromUrl", params.gift);
	}

	return {
		props: {
			data: isDefault ? null : dta,
			isDefault,
		},
	};
}
const Gifts = ({ data, isDefault }: any) => {
	const [adId, setAdId] = useState([]);
	const metaObj = isDefault ? defaultGiftPageMetadata : data?.metaData;

	const metadata = {
		...metaObj,
		adId: adId,
	};

	useEffect(() => {
		const populateData = async () => {
			if (isDefault) {
				let res: any = await useFirebaseFetchData("links", "wedding");
				setAdId(res?.adId);
			} else {
				setAdId(data?.adId);
			}
		};
		populateData();
	}, []);

	return (
		<Box>
			<Metadata {...metadata} />
			<Button
				variant='text'
				startIcon={
					<KeyboardBackspaceIcon sx={{ fontSize: "2rem !important" }} />
				}
				sx={{ mt: 5, mb: 1 }}
			>
				Gift Finder
			</Button>
			<Badges
				isDefault={isDefault}
				propsData={data}
			/>
			<GiftSection adId={adId} />
		</Box>
	);
};

export default Gifts;
