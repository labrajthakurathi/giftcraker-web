import {
	styled,
	ToggleButtonGroup,
	ToggleButtonGroupProps,
} from "@mui/material";
import React, { useState } from "react";

const ToggleGroup = (props: ToggleButtonGroupProps) => {
	const [value, setValue] = useState(props.value);

	return (
		<StyledToggleGroup
			{...props}
			color='primary'
			aria-label='Platform'
			onChange={(event, value) => {
				if (value) {
					setValue(value);
					props.onChange && props.onChange(event, value);
				}
			}}
			value={value}
			sx={{
				width: "100%",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-between",
				alignItems: "center",
				gap: 1,
				border: "0px",
			}}
		>
			{props.children}
		</StyledToggleGroup>
	);
};

export default ToggleGroup;

const StyledToggleGroup = styled(ToggleButtonGroup)(
	({ theme }) => `
.MuiToggleButtonGroup-grouped:not(:first-of-type),.MuiToggleButtonGroup-grouped:not(:last-of-type){
	margin-left: 0px;
    border-left: 0px solid transparent;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

}
`
);
