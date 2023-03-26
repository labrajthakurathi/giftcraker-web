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

//prettier-ignore
const StyledToggleButton = styled(MUIToggleButton)(({ theme }) => `
	border:none;
	background: ${theme.palette.common.white + "4D"};
	color: white;
	border-radius:30px !important;
	transition:all 200ms ease-in;
	margin:0px !important;
	padding:10px!important;
	width:calc(33.33% - 28px);
	text-transform: capitalize;

	&::after{
		content:'';
		display:block;
		height:5px;
		width:5px;
		background:${theme.palette.brand.blue.main};
		position:absolute;
		right:18px;
		top:8px;
		border-radius:3px;
	}
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
