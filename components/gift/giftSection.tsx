import { Box, Typography } from "@/ui-library";
import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loading from "../loading";

const GiftSection = ({ adId }: any) => {
	const [isMobile, setIsMobile] = useState(false);
	const ourpickcol =
		adId.length > 0 && Math.ceil(Math.random() * adId.length + 1);
	const ourpickrow =
		adId.length > 0 && Math.ceil(Math.random() * adId.length - 1);
	useEffect(() => {
		const userAgent = window.navigator.userAgent;
		const isMobileDevice =
			/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent);

		setIsMobile(isMobileDevice);
	}, []);

	return (
		<StyledBoxWrapper
			ourpickcol={ourpickcol || 0}
			ourpickrow={ourpickrow || 0}
		>
			<Typography
				variant='h3'
				sx={{ maxWidth: "720px" }}
			>
				{"Here's what we think, they will like"}
			</Typography>
			{adId.length === 0 ? (
				<Loading />
			) : (
				<>
					{adId?.map((ad: any) => {
						return (
							<StyledBox
								className='ad-stripe'
								sx={{
									width: isMobile ? "calc(100% + 36px)" : "100%",
								}}
								key={ad}
							>
								<>{ad}</>
								<div id={`amzn-assoc-ad-${ad}`}></div>
							</StyledBox>
						);
					})}
				</>
			)}
		</StyledBoxWrapper>
	);
};

export default GiftSection;

type ExtraProps = {
	ourpickcol: number;
	ourpickrow: number;
};
//prettier-ignore
const StyledBox = styled(Box)(({ theme }) => `
height:118px;
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
        padding:0 !important;
        margin:0 !important
		padding-right:20px !important;
		padding-left:20px !important;
		background:red;
		opacity:0.8;	
        height:fit-content;
	}
	
`);

//prettier-ignore
const StyledBoxWrapper= styled(Box)<ExtraProps>(({theme,ourpickcol,ourpickrow})=>`

.ad-stripe:nth-child(${ourpickcol}){
    .amzn-native-product:nth-child(${ourpickrow}){
		opacity:0.9 !important;
		&:after{
			content:'Our Pick';
			height:16px;
			width:80px;
			background:${theme.palette.brand.red.main} !important;
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
    
}
    
`)
