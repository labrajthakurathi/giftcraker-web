import { Box, ContentWrap, NavBar } from "@/ui-library";
import React from "react";
import { GlobalStyle } from "./globalStyles";

const Page = ({ children }: any) => {
  return (
    <Box>
      <NavBar />
      <GlobalStyle />
      <ContentWrap sx={{}}>{children}</ContentWrap>
    </Box>
  );
};

export default Page;
