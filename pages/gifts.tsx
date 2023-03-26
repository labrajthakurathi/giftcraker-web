import * as React from "react";
import { Box, Typography } from "@/ui-library";
import { Metadata } from "@/components/metadata";
import Badge from "@/ui-library/components/atom/badge";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/clientApp";
import Spinner from "@/ui-library/components/atom/spinner";

export default function Gifts() {
	const [adId, setAdId] = useState([]);

	const metadataLogin = {
		title: "Home",
		description: "Home page for Reviewrly",

		keywords: ["Login", "Sign up", "Product", "Review", "Account"],
		adId: adId,
	};
	console.log(adId);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const userAgent = window.navigator.userAgent;
		const isMobileDevice =
			/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent);

		setIsMobile(isMobileDevice);
		getFirebaseData();
	}, []);

	const getFirebaseData = async () => {
		const docRef = doc(db, "links", "dad");
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			setAdId(docSnap.data().adId);
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	};

	return (
		<Box>
			<Metadata {...metadataLogin} />
			<Badges />
			<Box>
				<Typography variant='h2'>Here what we think, they will like</Typography>
				{adId.length === 0 ? (
					<Loading />
				) : (
					<>
						{/* {adId?.map((ad) => {
							return (
								<StyledBox
									sx={{
										width: isMobile ? "calc(100% + 36px)" : "100%",
									}}
								>
									<div id={`adunit0`}></div>
								</StyledBox>
							);
						})} */}
						<StyledBox
							sx={{
								width: isMobile ? "calc(100% + 36px)" : "100%",
							}}
						></StyledBox>
					</>
				)}
			</Box>
		</Box>
	);
}

const Badges = () => {
	return (
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
			<Badge label='item1' />
			<Badge label='item2' />
			<Badge label='item3' />
			<Badge label='item4' />
			<Badge label='item5' />
		</Box>
	);
};

const Loading = () => {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "200px",
			}}
		>
			<Spinner />
		</Box>
	);
};
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
	}
`
);
