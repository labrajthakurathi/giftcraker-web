import { useGlobal } from "@/context/globalContext";
import { Typography, useMediaQuery } from "@/ui-library";
import ToggleButton from "@/ui-library/components/atom/toggleButton";
import ToggleGroup from "@/ui-library/components/atom/toggleGroup";
import { ThemeContextInterface } from "@/ui-library/interfaces";
import { ThemeContext } from "@/ui-library/themeContext/themeContext";
import React, { useContext } from "react";

const Occasion = () => {
	const themeContext: ThemeContextInterface = useContext(ThemeContext);
	const theme = themeContext.currentTheme;
	const [option, setOption] = React.useState("Wedding");
	const { setTrigger } = useGlobal();
	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: string
	) => {
		setTrigger(true);
		setOption(newAlignment);
	};

	return (
		<>
			<Typography
				variant='h2'
				mb={1.5}
			>
				What's the {""}
				<span
					style={{ borderBottom: `3px solid ${theme.palette.brand.red.main}` }}
				>
					Occasion
				</span>
				?
			</Typography>
			<ToggleGroup
				value={option}
				onChange={handleChange}
				exclusive
			>
				<ToggleButton
					value={"Birthday"}
					sx={{ marginLeft: "-1px" }}
				>
					Birthday
				</ToggleButton>
				<ToggleButton value={"Wedding"}>Wedding</ToggleButton>
				<ToggleButton value={"Mother"}>Mother's Day</ToggleButton>
				<ToggleButton value={"Father"}>Father's Day</ToggleButton>
				<ToggleButton value={"House"}>House Warming</ToggleButton>
				<ToggleButton value={"Date"}>Date</ToggleButton>
				<ToggleButton value={"Casual"}>Casual visit</ToggleButton>
				<ToggleButton value={"Promotion"}>Promotion</ToggleButton>
				<ToggleButton value={"Party"}>Party</ToggleButton>
			</ToggleGroup>
		</>
	);
};

export default Occasion;
