import { styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "./box";
import CloseIcon from "@mui/icons-material/Close";

const Badge = ({ label }: any) => {
	const [visibility, setVisibility] = useState(true);
	return visibility ? (
		<StyledBox>
			{label}
			<SmallBox onClick={() => setVisibility(false)}>
				<CloseIcon sx={{ height: "12px" }} />
			</SmallBox>
		</StyledBox>
	) : null;
};

export default Badge;

//prettier-ignore
const StyledBox = styled(Box)(({ theme }) => `
    background:${theme.palette.brand.grey[200]};
    color:${theme.palette.common.black};
    width:fit-content;
    padding:10px;
    padding: .75rem 3rem;
    border-radius:1.5rem;
    text-transform: capitalize;
    position:relative;
   
`
);

//prettier-ignore
const SmallBox = styled(Box)(({ theme }) => `
position:absolute;
height:20px;
width:20px;
background:${theme.palette.brand.red.main};
display:flex;
justify-content:center;
align-items:center;
right:-6px;
top:-6px;
border-radius:50%;
transition:all 100ms ease-in;
&:hover{
    cursor:pointer;
}
&:active{
    transform:scale(0.9)
}
`
);
