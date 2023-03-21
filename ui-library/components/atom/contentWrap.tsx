import { Box, BoxProps, styled } from "@mui/material";

import React from "react";

export const ContentWrap = (props: BoxProps) => {
  return <StyledContentWrap {...props}>{props.children}</StyledContentWrap>;
};

//prettier-ignore
const StyledContentWrap = styled(Box)(({ theme }) => `
margin: 0 auto;
  padding: 0 12px;
  width: calc(100% - 24px);

  @media screen and (min-width: ${theme.breakpoints.values.sm}px) { //screen size small screen
    padding: 0 24px;
    width: calc(100% - 48px);
  }
  
  @media screen and (min-width: ${theme.breakpoints.values.md}px) { //screen size small desktop 905
    padding: 0;
    width: calc(100% - 80px);
  }
  @media screen and (min-width: ${theme.breakpoints.values.lg}px) { //medium desktop 1240
    
    padding: 0 150px;
    width:calc(100% - 200px)
  }
  @media screen and (min-width: ${theme.breakpoints.values.xl}px) { //large desktop 1440
    padding: 0;
    max-width: 1416px;
  }
`,
)
