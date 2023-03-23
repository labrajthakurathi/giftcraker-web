import {
	styled,
	ToggleButton as MUIToggleButton,
	ToggleButtonProps,
} from "@mui/material";
import React from "react";

const ToggleButton = (props: ToggleButtonProps) => {
	return <StyledToggleButton {...props}>{props.children}</StyledToggleButton>;
};

export default ToggleButton;

const StyledToggleButton = styled(MUIToggleButton)(
	({ theme }) => `
	border:none;
	background: ${theme.palette.common.white + "4D"};
	width:fit-content;
	color: white;
	border-radius:2px;
	transition:all 200ms ease-in;
	padding:.5rem auto; 
	text-transform: none;
	&:hover{
		cursor:pointer;
		background: ${theme.palette.common.white + "E5"};
		color: ${theme.palette.primary.main};
	}
	&.Mui-selected{
		background: ${theme.palette.common.white + "E5"};
		&:hover{
			cursor:pointer;
			background: ${theme.palette.common.white + "E5"};
			color: ${theme.palette.primary.main};
		}
	}

	@media screen and (min-width: ${theme.breakpoints.values.md}px){
		padding:.6rem 2.5rem;
		font-size:1.2rem;
	}
`
);
