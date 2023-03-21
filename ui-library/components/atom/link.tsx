import { styled } from "@mui/material";
import Link from "next/link";
import { Typography } from "./typography";

export const NextLink = (props: any) => {
  return (
    <Link {...props}>
      <StyledTypo variant="body2" sx={props.sx}>
        {props.children}
      </StyledTypo>
    </Link>
  );
};

//prettier-ignore
const StyledTypo = styled(Typography)(({ theme }) => `
    width:fit-content;
    border-bottom: 1px solid ${theme.palette.text.primary};
`
);
