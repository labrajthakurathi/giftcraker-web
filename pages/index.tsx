import * as React from "react";
import { Box, Button, ContentWrap, TextField } from "@/ui-library";
import { GlobalStyle } from "../components/globalStyles";
import SignUpForm from "@/components/form/signUp.form";
import { Metadata } from "@/components/metadata";

export default function Home() {
  const metadataLogin = {
    title: "Home",
    description: "Home page for Reviewrly",

    keywords: ["Login", "Sign up", "Product", "Review", "Account"],
  };
  return (
    <Box>
      <Metadata {...metadataLogin} />
    </Box>
  );
}
