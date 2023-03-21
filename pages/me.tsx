import User from "@/components/user";
import UnverifiedUser from "@/components/user/unverifiedUser";
import { useAuth } from "@/context/authContext";
import { auth } from "@/firebase/clientApp";
import { Box, Button } from "@/ui-library";
import React, { useEffect, useState } from "react";

// const Fk = () => {
//   const [user, loading, error] = useAuthState(auth);
//   return user;
// };

// export const getStaticPaths = async () => {
//   const user = await Fk();

//   return {
//     paths: [
//       {
//         params: { index: "2FXgbS0mXEUtQbq5ZHyiayZRFpw2" },
//       },
//     ],
//     fallback: false,
//   };
// };
// export async function getStaticProps(context: any) {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { user } = useAuth();
//   const { params } = context;
//   return {
//     props: {
//       slug: user,
//     },
//   };
// }

const Me = ({ slug }: any) => {
  const { user, updateUserInfo } = useAuth();
  const [isVerified, setIsVerified] = useState(user.emailVerified);

  return <User />;
};

export default Me;
