import {
	Button as MUIButton,
	ButtonProps,
	CircularProgress,
	styled,
} from "@mui/material";
import React from "react";
import { Typography } from "./typography";

interface Props extends ButtonProps {
	loading?: boolean;
	edge?: "rounded" | "square";
}

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef((props: Props, ref: React.Ref<any>) => {
	const loading: boolean = props?.loading || false;
	const edge = props?.edge;
	return (
		<StyledMUIButton
			{...props}
			loading={loading}
			edge={edge}
			ref={ref}
		>
			<Typography variant='button2'>{props.children}</Typography>
		</StyledMUIButton>
	);
});

interface ExtraProps {
	loading: boolean;
	edge: "rounded" | "square" | undefined;
}
//prettier-ignore
const StyledMUIButton = styled(MUIButton)<ExtraProps>(({ theme,loading ,edge}) => `
  ${loading ? 'opacity: .6;' : ''}
    text-transform:none!important;    
    border-radius:${edge === 'square' ?'4px':'24px'};
    .MuiTypography-root.MuiTypography-button2{
      display:flex;
    }
    &.MuiButton-text{
    
      &:hover{
       background-color:${theme.palette.text.primary +'1A'}
      }
    }
    .MuiButton-endIcon.MuiButton-iconSizeMedium{
      display:${loading ? "none" :""};
    }
    &.MuiButton-contained {
      padding:10px 16px;
      background-color:${theme.palette.brand.red.main};
      
      .MuiTypography-root,path{
        color: ${theme.palette.brand.grey[100]};
      }
      &:hover{
       background-color:${theme.palette.brand.red.main + 'D9'};
      }
      @media screen and (min-width: ${theme.breakpoints.values.md}px){
        padding:14px 32px;
      }
      
    }
    &.MuiButton-outlined{
      padding:12px 16px;
      border:2px solid ${theme.palette.brand.red.main};
      &:hover{
        background-color:${theme.palette.brand.red.main +'1A'}
      }
    }
    &.Mui-disabled{
    opacity: 0.5;
  }
 
`
);
