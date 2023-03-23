import { Box, Button, styled, useMediaQuery, useTheme } from "@/ui-library";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Occasion from "@/components/occasion";
import { useGlobal } from "@/context/globalContext";

const GiftFinderCarousel = ({ setIsDisplayName }: any) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme?.breakpoints.down("md"));
	const [step, setStep] = useState(1);

	const [loading, setLoading] = useState(false);

	const carouselArgs = {
		showIndicators: false,
		showThumbs: false,
		showStatus: false,
	};

	const handleNext = async (onClickHandler: any) => {
		if (step === 3) {
			try {
				setLoading(true);

				setLoading(false);
				setIsDisplayName(true);
			} catch (err) {
				console.log(err);
			}
		} else {
			onClickHandler();
			setStep(step + 1);
		}
	};

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
			<Box sx={{ width: "100%", maxWidth: isMobile ? "480px" : "680px" }}>
				<Carousel
					{...carouselArgs}
					renderArrowPrev={(onClickHandler, hasNext, label) => null}
					renderArrowNext={(onClickHandler, hasNext, label) => (
						<Button
							loading={loading}
							variant='contained'
							onClick={() => handleNext(onClickHandler)}
							endIcon={<NavigateNextIcon />}
							sx={{ position: "absolute", bottom: "0.27rem", right: 0 }}
						>
							{step === 3 ? "Finish" : "Next"}
						</Button>
					)}
				>
					<StyledBox>
						<Occasion />
					</StyledBox>
					<StyledBox>
						<Occasion />
					</StyledBox>

					<StyledBox>
						<Occasion />
					</StyledBox>
					<StyledBox>
						<Occasion />
					</StyledBox>
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
    borde-radius: 16px; 
    padding-bottom:60px;
      `
  );
export default GiftFinderCarousel;
