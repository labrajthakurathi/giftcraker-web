import * as React from "react";
import { Box, Typography } from "@/ui-library";
import { Metadata } from "@/components/metadata";
import Badge from "@/ui-library/components/atom/badge";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/clientApp";
import { useGlobal } from "@/context/globalContext";
import Loading from "@/components/loading";
import { defaultGiftPageMetadata } from "@/constants";

export const getStaticPaths = async () => {
	return {
		paths: [
			{
				params: { gift: "gift" },
			},
			{
				params: { gift: "gift-for-dad" },
			},
		],
		fallback: false,
	};
};
export async function getStaticProps(context: any) {
	const { params } = context;
	let dta;

	if (params.gift !== "gift") {
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
			data: params.gift === "gift" ? null : dta,
			isDefault: params.gift === "gift" ? true : false,
		},
	};
}

export default function Gifts({ data, isDefault }: any) {
	const [adId, setAdId] = useState([]);
	const [isMobile, setIsMobile] = useState(false);
	const [propsData, setPropsData] = useState(data);
	const { qa } = useGlobal();
	const metaObj = isDefault ? defaultGiftPageMetadata : propsData?.metadata;

	const metadata = {
		...metaObj,
		adId: adId,
	};

	useEffect(() => {
		const userAgent = window.navigator.userAgent;
		const isMobileDevice =
			/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent);

		setIsMobile(isMobileDevice);
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
			<Box
				sx={{
					display: "flex",
					gap: 1,
					mt: 8,
					mb: 2,
					flexWrap: "wrap",
					maxWidth: "500px",
				}}
			>
				{isDefault
					? Object.values(qa).map((item) => (
							<Badge
								label={item}
								key={item}
							/>
					  ))
					: propsData?.tags.map((tag: any) => (
							<Badge
								label={tag}
								key={tag}
							/>
					  ))}
			</Box>
			<Box>
				<Typography variant='h2'>
					{"Here's what we think, they will like"}
				</Typography>
				{adId.length === 0 ? (
					<Loading />
				) : (
					<>
						{adId?.map((ad) => {
							return (
								<StyledBox
									sx={{
										width: isMobile ? "calc(100% + 36px)" : "100%",
									}}
									key={ad}
								>
									<div id={`amzn-assoc-ad-${ad}`}></div>
								</StyledBox>
							);
						})}
					</>
				)}
			</Box>
		</Box>
	);
}

//prettier-ignore
const StyledBox = styled(Box)(({ theme }) => `
overflow:scroll;
	*{
		color:black;
	}
	.amzn-native-brand{
	display:none;
	}
	.amzn-native-header-text{
		display:none;
	}
	.amzn-native-product{
		color:black !important;
		border-radius:8px;
		padding-right:20px !important;
		padding-left:20px !important;
		background:red;
		opacity:0.8;	
	}
	.amzn-native-product:nth-child(2){
		opacity:0.9;
		&:after{
			content:'Our Pick';
			height:16px;
			width:80px;
			background:${theme.palette.brand.red.main};
			position:absolute;
			top:0px;
			right:0;
			z-index:9999;
			display:block;
			border-radius:12px;
			display:flex;
			justify-content:center;
			align-items:center;
			color:white;
			font-size:10px;
		
		}
	}`
);
