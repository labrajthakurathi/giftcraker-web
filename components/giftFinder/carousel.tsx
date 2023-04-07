import { Box, Button, styled, useMediaQuery, useTheme } from "@/ui-library";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";
import { Itopic, useGlobal } from "@/context/globalContext";
import Question from "./question";

const GiftFinderCarousel = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme?.breakpoints.down("md"));
	const { step, setStep, qa } = useGlobal();
	const [loading, setLoading] = useState(false);

	let router = useRouter();
	const carouselArgs = {
		showIndicators: false,
		showThumbs: false,
		showStatus: false,
	};

	const handleNext = async (onClickHandler: any) => {
		console.log(qa);
		if (step === 3) {
			try {
				router.push("/gifts");
			} catch (err) {
				console.log(err);
			}
		} else {
			onClickHandler();
			setStep(step + 1);
		}
	};

	type Section = {
		topic: Itopic;
		title: string;
	};

	const sections: Array<Section> = [
		{ topic: "occasion", title: "What's the " },
		{ topic: "age", title: "What's the " },
		{ topic: "relationship", title: "What's the " },
	];

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				".carousel-root": {
					"*": {
						boxSizing: "content-box",
						textAlign: "left",
					},
				},
			}}
		>
			<Box sx={{ width: "100%", maxWidth: isMobile ? "480px" : "720px" }}>
				<Carousel
					{...carouselArgs}
					renderArrowPrev={(onClickHandler, hasNext, label) => null}
					renderArrowNext={(onClickHandler, hasNext, label) => (
						<Button
							variant='contained'
							edge='square'
							onClick={() => handleNext(onClickHandler)}
							endIcon={<NavigateNextIcon />}
							sx={{ position: "absolute", bottom: "0.27rem", right: 0 }}
						>
							{step === 3 ? "Finish" : "Next"}
						</Button>
					)}
				>
					{sections.map((section: Section) => (
						<StyledBox>
							<Question
								key={section?.topic}
								topic={section?.topic}
								title={section?.title}
							/>
						</StyledBox>
					))}
				</Carousel>
			</Box>
		</Box>
	);
};

//prettier-ignore
const StyledBox = styled(Box)(({ theme }) => `
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    border-radius: 16px; 
    padding-bottom:60px;
      `
  );
export default GiftFinderCarousel;
