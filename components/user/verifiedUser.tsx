import { Box, Button, styled, TextField, Typography } from "@/ui-library";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useAuth } from "@/context/authContext";
import { db, storage } from "@/firebase/clientApp";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const VerifiedUser = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
  });

  const [step, setStep] = useState(1);
  const { updateUserInfo, user } = useAuth();
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const carouselArgs = {
    showIndicators: false,
    showThumbs: false,
    showStatus: false,
  };

  const handleChange = (e: any) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleNext = async (onClickHandler: any) => {
    // await updateUserInfo(name);

    if (step === 3) {
      try {
        setLoading(true);
        let profileUrl = await uploadProfilePic();

        await setDoc(doc(db, "user_profiles", user.uid), {
          first_name: profileData.firstName,
          last_name: profileData.lastName,
          profile_pic: profileUrl,
        });
        await updateUserInfo(profileData, profileUrl);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      onClickHandler();
      setStep(step + 1);
    }
  };

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const uploadProfilePic = async () => {
    if (!image) return;

    const reader = new FileReader();
    reader.readAsDataURL(image);

    return new Promise((resolve, reject) => {
      reader.onload = (event) => {
        const img: any = new Image();
        img.src = event?.target?.result;
        img.onload = async () => {
          try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.height = 500;
            canvas.width = (img.width / img.height) * canvas.height; // adjust the width of the canvas to resize the image
            // adjust the height of the canvas to resize the image
            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

            await canvas.toBlob(
              (blob: any) => {
                const storageRef = ref(
                  storage,
                  `images/user_profile_pics/${uuidv4() + image.name}`
                );
                uploadBytes(storageRef, blob).then((snapshot) => {
                  getDownloadURL(snapshot.ref).then(async (url) => {
                    resolve(url);
                  });
                });
              },
              "image/jpeg",
              0.6
            ); // adjust the quality of the compressed image
          } catch (err) {
            reject("failed");
          }
        };
      };
    });
  };

  console.log(user);
  return (
    <Box
      sx={{
        height: "100vh",
        marginTop: "-48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

        ".carousel-root": {
          "*": {
            boxSizing: "content-box",
          },
        },
      }}
    >
      i am verified
    </Box>
  );
};

//prettier-ignore
const StyledBox = styled(Box)(({ theme }) => `
      width:100% !important;
      background:${theme.palette.brand.grey[100]};
      border-radius:16px;
      display:flex;
      justify-content:center;
      align-items:flex-start;
      flex-direction:column;
      align-self:center;
      padding:  60px 32px;
      gap:.6rem;
      `
  );
export default VerifiedUser;

// import {
//     Alert,
//     Box,
//     Button,
//     NextLink,
//     styled,
//     TextField,
//     Typography,
//   } from "@/ui-library";
//   import { Grid } from "@mui/material";
//   import React, { useState } from "react";
//   import { Carousel, CarouselProps } from "react-responsive-carousel";
//   import "react-responsive-carousel/lib/styles/carousel.min.css";
//   import NavigateNextIcon from "@mui/icons-material/NavigateNext";
//   import FileUploadIcon from "@mui/icons-material/FileUpload";
//   import { useAuth } from "@/context/authContext";

//   const VerifiedUser = () => {
//     const [name, setName] = useState("");
//     const { updateUserInfo, user } = useAuth();

//     const carouselArgs = {
//       showIndicators: false,
//       showThumbs: false,
//       showStatus: false,
//     };

//     const handleChange = (e: any) => {
//       setName(e.target.value);
//     };

//     const handleName = async (onClickHandler: any) => {
//       await updateUserInfo(name);

//       onClickHandler();
//     };

//     return (
//       <Box
//         sx={{
//           height: "100vh",
//           marginTop: "-48px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           ".carousel-root": {
//             "*": {
//               boxSizing: "content-box",
//             },
//           },
//         }}
//       >
//         <Carousel
//           {...carouselArgs}
//           renderArrowPrev={(onClickHandler, hasNext, label) => null}
//           renderArrowNext={(onClickHandler, hasNext, label) => (
//             <Button
//               variant="contained"
//               onClick={() => handleName(onClickHandler)}
//               endIcon={<NavigateNextIcon />}
//               edge="square"
//               sx={{ position: "absolute", bottom: "2.30rem", right: "32px" }}
//               disabled={name === ""}
//             >
//               Next
//             </Button>
//           )}
//         >
//           <Box
//             sx={{
//               height: "auto",
//               width: "100%",
//               justifyContent: "center",
//               alignItems: "center",
//               display: "flex",
//               bordeRadius: "16px",
//             }}
//           >
//             <StyledBox>
//               <TextField
//                 label="Full Name"
//                 type="text"
//                 name="name"
//                 required
//                 sx={{ width: "calc(100% - 110px)" }}
//                 onChange={(e) => handleChange(e)}
//               />
//             </StyledBox>
//           </Box>
//           <Box
//             sx={{
//               height: "auto",
//               width: "100%",
//               justifyContent: "center",
//               alignItems: "center",
//               display: "flex",
//               bordeRadius: "16px",
//             }}
//           >
//             <StyledBox>
//               <Button
//                 variant="text"
//                 component="label"
//                 edge="square"
//                 endIcon={<FileUploadIcon />}
//               >
//                 Upload Profile
//                 <input hidden accept="image/*" multiple type="file" />
//               </Button>
//             </StyledBox>
//           </Box>
//         </Carousel>
//       </Box>
//     );
//   };

//   //prettier-ignore
//   const StyledBox = styled(Box)(({ theme }) => `
//       width:100% !important;
//       background:${theme.palette.brand.grey[100]};
//       border-radius:16px;
//       display:flex;
//       justify-content:center;
//       align-items:flex-start;
//       flex-direction:column;
//       align-self:center;
//       padding:  32px 32px;
//       gap:.6rem;
//       `
//   );
//   export default VerifiedUser;

// import {
//   Alert,
//   Box,
//   Button,
//   NextLink,
//   styled,
//   TextField,
//   Typography,
// } from "@/ui-library";
// import { Grid } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { Carousel, CarouselProps } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import FileUploadIcon from "@mui/icons-material/FileUpload";
// import { useAuth } from "@/context/authContext";

// const VerifiedUser = () => {
//   const [profileData, setProfileData] = useState({
//     firstName: "",
//     lastName: "",
//     photoURL: "https://www.labraj.com",
//   });

//   const [step, setStep] = useState(1);
//   const { updateUserInfo, user } = useAuth();

//   const carouselArgs = {
//     showIndicators: false,
//     showThumbs: false,
//     showStatus: false,
//   };

//   const handleChange = (e: any) => {
//     setProfileData({ ...profileData, [e.target.name]: e.target.value });
//   };

//   const handleName = async (onClickHandler: any) => {
//     // await updateUserInfo(name);

//     if (step === 3) {
//       console.log(profileData);
//     } else {
//       onClickHandler();
//       setStep(step + 1);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         marginTop: "-48px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",

//         ".carousel-root": {
//           "*": {
//             boxSizing: "content-box",
//           },
//         },
//       }}
//     >
//       <Box sx={{ width: "100%", maxWidth: "500px" }}>
//         <Typography
//           variant="h3"
//           sx={{
//             display: "flex",
//             alignSelf: "flex-start",
//             marginBottom: "1rem",
//             marginLeft: ".5rem",
//             maxWidth: "450px",
//           }}
//         >
//           {"Let's complete your profile"}
//         </Typography>
//         <Carousel
//           {...carouselArgs}
//           renderArrowPrev={(onClickHandler, hasNext, label) => null}
//           renderArrowNext={(onClickHandler, hasNext, label) => (
//             <Button
//               variant="contained"
//               onClick={() => handleName(onClickHandler)}
//               endIcon={<NavigateNextIcon />}
//               edge="square"
//               sx={{ position: "absolute", bottom: "4.27rem", right: "32px" }}
//               disabled={
//                 step === 1
//                   ? profileData.firstName === ""
//                   : step === 2
//                   ? false
//                   : false
//               }
//             >
//               {step === 3 ? "Finish" : "Next"}
//             </Button>
//           )}
//         >
//           <Box
//             sx={{
//               height: "auto",
//               width: "100%",
//               justifyContent: "center",
//               alignItems: "center",
//               display: "flex",
//               bordeRadius: "16px",
//             }}
//           >
//             <StyledBox>
//               <TextField
//                 label="First Name"
//                 type="text"
//                 name="firstName"
//                 required
//                 sx={{ width: "calc(100% - 110px)" }}
//                 onChange={(e) => handleChange(e)}
//               />
//             </StyledBox>
//           </Box>
//           <Box
//             sx={{
//               height: "auto",
//               width: "100%",
//               justifyContent: "center",
//               alignItems: "center",
//               display: "flex",
//               bordeRadius: "16px",
//             }}
//           >
//             <StyledBox>
//               <TextField
//                 label="Last Name"
//                 type="text"
//                 name="lastName"
//                 required
//                 sx={{ width: "calc(100% - 110px)" }}
//                 onChange={(e) => handleChange(e)}
//               />
//             </StyledBox>
//           </Box>

//           <Box
//             sx={{
//               height: "auto",
//               width: "100%",
//               justifyContent: "center",
//               alignItems: "center",
//               display: "flex",
//               bordeRadius: "16px",
//             }}
//           >
//             <StyledBox>
//               <Button
//                 variant="text"
//                 //@ts-ignore
//                 component="label"
//                 edge="square"
//                 endIcon={<FileUploadIcon />}
//               >
//                 Upload Profile
//                 <input hidden accept="image/*" multiple type="file" />
//               </Button>
//             </StyledBox>
//           </Box>
//         </Carousel>
//       </Box>
//     </Box>
//   );
// };

// //prettier-ignore
// const StyledBox = styled(Box)(({ theme }) => `
//     width:100% !important;
//     background:${theme.palette.brand.grey[100]};
//     border-radius:16px;
//     display:flex;
//     justify-content:center;
//     align-items:flex-start;
//     flex-direction:column;
//     align-self:center;
//     padding:  60px 32px;
//     gap:.6rem;
//     `
// );
// export default VerifiedUser;

// // import {
// //     Alert,
// //     Box,
// //     Button,
// //     NextLink,
// //     styled,
// //     TextField,
// //     Typography,
// //   } from "@/ui-library";
// //   import { Grid } from "@mui/material";
// //   import React, { useState } from "react";
// //   import { Carousel, CarouselProps } from "react-responsive-carousel";
// //   import "react-responsive-carousel/lib/styles/carousel.min.css";
// //   import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// //   import FileUploadIcon from "@mui/icons-material/FileUpload";
// //   import { useAuth } from "@/context/authContext";

// //   const VerifiedUser = () => {
// //     const [name, setName] = useState("");
// //     const { updateUserInfo, user } = useAuth();

// //     const carouselArgs = {
// //       showIndicators: false,
// //       showThumbs: false,
// //       showStatus: false,
// //     };

// //     const handleChange = (e: any) => {
// //       setName(e.target.value);
// //     };

// //     const handleName = async (onClickHandler: any) => {
// //       await updateUserInfo(name);

// //       onClickHandler();
// //     };

// //     return (
// //       <Box
// //         sx={{
// //           height: "100vh",
// //           marginTop: "-48px",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           ".carousel-root": {
// //             "*": {
// //               boxSizing: "content-box",
// //             },
// //           },
// //         }}
// //       >
// //         <Carousel
// //           {...carouselArgs}
// //           renderArrowPrev={(onClickHandler, hasNext, label) => null}
// //           renderArrowNext={(onClickHandler, hasNext, label) => (
// //             <Button
// //               variant="contained"
// //               onClick={() => handleName(onClickHandler)}
// //               endIcon={<NavigateNextIcon />}
// //               edge="square"
// //               sx={{ position: "absolute", bottom: "2.30rem", right: "32px" }}
// //               disabled={name === ""}
// //             >
// //               Next
// //             </Button>
// //           )}
// //         >
// //           <Box
// //             sx={{
// //               height: "auto",
// //               width: "100%",
// //               justifyContent: "center",
// //               alignItems: "center",
// //               display: "flex",
// //               bordeRadius: "16px",
// //             }}
// //           >
// //             <StyledBox>
// //               <TextField
// //                 label="Full Name"
// //                 type="text"
// //                 name="name"
// //                 required
// //                 sx={{ width: "calc(100% - 110px)" }}
// //                 onChange={(e) => handleChange(e)}
// //               />
// //             </StyledBox>
// //           </Box>
// //           <Box
// //             sx={{
// //               height: "auto",
// //               width: "100%",
// //               justifyContent: "center",
// //               alignItems: "center",
// //               display: "flex",
// //               bordeRadius: "16px",
// //             }}
// //           >
// //             <StyledBox>
// //               <Button
// //                 variant="text"
// //                 component="label"
// //                 edge="square"
// //                 endIcon={<FileUploadIcon />}
// //               >
// //                 Upload Profile
// //                 <input hidden accept="image/*" multiple type="file" />
// //               </Button>
// //             </StyledBox>
// //           </Box>
// //         </Carousel>
// //       </Box>
// //     );
// //   };

// //   //prettier-ignore
// //   const StyledBox = styled(Box)(({ theme }) => `
// //       width:100% !important;
// //       background:${theme.palette.brand.grey[100]};
// //       border-radius:16px;
// //       display:flex;
// //       justify-content:center;
// //       align-items:flex-start;
// //       flex-direction:column;
// //       align-self:center;
// //       padding:  32px 32px;
// //       gap:.6rem;
// //       `
// //   );
// //   export default VerifiedUser;
