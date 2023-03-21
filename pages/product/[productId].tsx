import { Metadata } from "@/components/metadata";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item: any) => {
    return {
      params: { productId: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.productId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};

const Product = ({ user }: any) => {
  const metadataLogin = {
    title: user?.name,
    description: "Sign up to create your Product Review account",
    keywords: ["Login", "Sign up", "Product", "Review", "Account"],
  };

  return (
    <>
      <Metadata {...metadataLogin} />
      <h1>hello {user.name}</h1>
    </>
  );
};

export default Product;
