import * as React from "react";
import { Box, Button } from "@/ui-library";
import { Metadata } from "@/components/metadata";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/clientApp";
import { defaultGiftPageMetadata } from "@/constants";
import Badges from "@/components/gift/badges";
import GiftSection from "@/components/gift/giftSection";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const getStaticPaths = async () => {
	let dta;
	const docRef = doc(db, "urls", "gift");
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		dta = docSnap.data()?.urld;
	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}

	const paths = dta.map((item: string) => {
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
	let dta;

	if (params.gift !== "gifts") {
		const docRef = doc(db, "dataFromUrl", params.gift);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			dta = docSnap.data();
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}

	return {
		props: {
			data: params.gift === "gifts" ? null : dta,
			isDefault: params.gift === "gifts" ? true : false,
		},
	};
}

export default function Gifts({ data, isDefault }: any) {
	const [adId, setAdId] = useState([]);
	const [propsData, setPropsData] = useState(data);

	const metaObj = isDefault ? defaultGiftPageMetadata : data?.metaData;
	console.log({ data });
	const metadata = {
		...metaObj,
		adId: adId,
	};
	useEffect(() => {
		getFirebaseData();
	}, []);

	const getFirebaseData = async () => {
		if (isDefault) {
			const docRef = doc(db, "links", "dad");
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setAdId(docSnap.data().adId);
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		} else {
			setAdId(propsData?.adId);
		}
	};

	return (
		<Box>
			<Metadata {...metadata} />
			<Button
				variant='text'
				startIcon={
					<KeyboardBackspaceIcon sx={{ fontSize: "2rem !important" }} />
				}
				sx={{ mt: 6, mb: 1 }}
			>
				Gift Finder
			</Button>
			<Badges
				isDefault={isDefault}
				propsData={propsData}
			/>
			<GiftSection adId={adId} />
		</Box>
	);
}
