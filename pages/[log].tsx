import LoginForm from "@/components/form/login.form";
import SignUpForm from "@/components/form/signUp.form";
import { Metadata } from "@/components/metadata";
import { Box } from "@/ui-library";
import React, { useEffect, useState } from "react";

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { log: "login" },
      },
      {
        params: { log: "sign-up" },
      },
    ],
    fallback: false,
  };
};
export async function getStaticProps(context: any) {
  const { params } = context;
  return {
    props: {
      slug: params.log,
    },
  };
}

const Login = ({ slug }: any) => {
  const [isLogin, setIsLogin] = useState<boolean>(slug === "login");

  const metadataLogin = {
    title: isLogin ? "Login" : "Sign Up",
    description: isLogin
      ? "Login to your Product Review account"
      : "Sign up to create your Product Review account",
    keywords: ["Login", "Sign up", "Product", "Review", "Account"],
  };

  useEffect(() => {
    setIsLogin(slug === "login");
  }, [slug]);

  return (
    <>
      <Metadata {...metadataLogin} />
      <Box
        sx={{
          height: "100vh",
          marginTop: "-48px",
          display: "flex",
        }}
      >
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </Box>
    </>
  );
};

export default Login;
