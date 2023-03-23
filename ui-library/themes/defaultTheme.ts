import { ThemeOptions, createTheme } from "@mui/material/styles";

import { Theme } from "@mui/material";

const theme: ThemeOptions = {
	// Spacing usage:
	// theme.spacing(2); // `${8 * 2}px` = '16px'
	// theme.spacing(3); // `${8 * 3}px` = '24px'
	// padding: theme.spacing(1, 2, 3, 1), // '8px 16px 24px 8px'
	spacing: 8, // scaling factor in px
	palette: {
		common: {
			white: "#FBFBFB", // Grey 50
			black: "#211F1F", // Grey 900
		},
		warning: {
			main: "#FF3A44",
		},
		neutral: {
			pureBlack: "#000",
			pureWhite: "#fff",
		},
		alert: {
			error: {
				main: "#CF1727",
				100: "#FFCCD3",
				200: "#F4989B",
				300: "#EC7073",
				400: "#F74C50",
				500: "#FD3835",
				600: "#EE2D34",
				700: "#DC212E",
				800: "#CF1727",
				900: "#C0001A",
			},
			acceptance: {
				main: "#007a0a",
				100: "#c4e5c1",
				200: "#9dd499",
				300: "#75c46f",
				400: "#54b850",
				500: "#31ab2d",
				600: "#279d24",
				700: "#178b18",
				800: "#007a0a",
				900: "#005c00",
			},
		},
		brand: {
			blue: {
				main: "#314CB6",
			},
			red: {
				main: "#EB5353",
			},

			grey: {
				main: "#211F1F",
				50: "#FBFBFB",
				100: "#F5F5F5",
				200: "#EEEEEE",
				300: "#D1D1D1",
				400: "#B4B3B3",
				500: "#979696",
				600: "#7A7979",
				700: "#5D5C5C",
				800: "#403E3E",
				900: "#211F1F",
			},
		},
	},
	typography: {
		fontFamily: '"Expanded", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		htmlFontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		fontWeightExtraBold: 800,

		// Headings (special use)
		xlh1: {
			fontFamily: '"ExpandedExtraBold","Helvetica", "Arial", sans-serif',
			fontSize: "5.714rem", // 80px
			lineHeight: 1, //80px
			letterSpacing: "-0.03em",
			"@media (min-width:905px)": {
				fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
				fontSize: "10.714rem", // 150px
				lineHeight: 0.933, // 140px
			},
		},
		xlh2: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "3.714rem", // 52px
			lineHeight: 1,
			letterSpacing: "-0.03em",
			"@media (min-width:905px)": {
				fontSize: "8.571rem", // 120px
				lineHeight: 0.9, // 108px
			},
		},
		xlh3: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "3rem", // 42px
			lineHeight: 1.143, // 48px
			letterSpacing: "-0.03em",
			"@media (min-width:905px)": {
				fontSize: "7.142rem", // 100px
				lineHeight: 1, // 100px
			},
		},
		xlh4: {
			fontFamily: '"ExpandedExtraBold","Helvetica", "Arial", sans-serif',
			fontSize: "3rem", // 42px
			lineHeight: 1.143, // 48px
			letterSpacing: "-0.03em",
			"@media (min-width:905px)": {
				fontSize: "4.286rem", // 60px
				lineHeight: 1.167, // 70px
			},
		},

		// Headings
		h1: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "3rem", // 3 * 14px = 42px
			lineHeight: 1,
			letterSpacing: "-0.015em",
			"@media (min-width:905px)": {
				fontSize: "5.714rem", // 80px
				lineHeight: 1.2, // 96px
				letterSpacing: "-0.025em",
			},
		},
		h2: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "2.571rem", // 36px
			lineHeight: 1.167, // 36px * 1.167 ~= 42px
			letterSpacing: "-0.015em",
			"@media (min-width:905px)": {
				fontSize: "5rem", // 70px
				lineHeight: 1.2, // 84px
				letterSpacing: "-0.025em",
			},
		},
		h3: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "2.286rem", // 32px
			lineHeight: 1.188, // 38px
			letterSpacing: "-0.015em",
			"@media (min-width:905px)": {
				fontSize: "3.571rem", // 50px
				lineHeight: 1.2, // 60px
				letterSpacing: "-0.02em",
			},
		},
		h4: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "2rem", // 28px
			lineHeight: 1.214, // 34px
			letterSpacing: "0em",
			"@media (min-width:905px)": {
				fontSize: "2.857rem", // 40px
				lineHeight: 1.2, // 48px
				letterSpacing: "-0.02em",
			},
		},
		h5: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.714rem", // 24px
			lineHeight: 1.167, // 28px
			letterSpacing: "0em",
			"@media (min-width:905px)": {
				fontFamily: '"ExpandedDemiBold", "Helvetica", "Arial", sans-serif',
				fontSize: "2.286rem", // 32px
				lineHeight: 1.1875, // 38px
				letterSpacing: "-0.025em",
			},
		},
		h6: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.429rem", // 20px
			lineHeight: 1.3, // 26px
			letterSpacing: "0em",
			"@media (min-width:905px)": {
				fontSize: "1.571rem", // 22px
				lineHeight: 1.182, // 26px
				letterSpacing: "-0.025em",
			},
		},

		// Sub Headings
		subtitleLarge: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.286rem", // 18px
			lineHeight: 1.222, // 22px
			letterSpacing: "0em",
		},
		subtitle1: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.143rem", // 16px
			lineHeight: 1.375, // 22px
			letterSpacing: "0em",
		},
		subtitle2: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "0.857rem", // 12px
			lineHeight: 1.333, // 16px
			letterSpacing: "0em",
		},

		// Body
		bodyXl: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.286rem", // 18px
			lineHeight: 1.222, // 22px
			letterSpacing: "0em",
			"@media (min-width:905px)": {
				fontSize: "1.714rem", // 24px
				lineHeight: 1.166, // 28px
				letterSpacing: "-0.01em",
			},
		},
		bodyLarge: {
			fontSize: "1.143rem", // 16px
			lineHeight: 1.375, // 22px
			letterSpacing: "0em",
			"@media (min-width:905px)": {
				fontSize: "1.286rem", // 18px
				lineHeight: 1.222, // 22px
				letterSpacing: "-0.01em",
			},
		},
		body1: {
			fontSize: "1.143rem", // 16px
			lineHeight: 1.375, // 22px
			letterSpacing: "0.01em",
		},
		body2: {
			fontSize: "0.857rem", // 12px
			lineHeight: 1.333, // 16px
			letterSpacing: "0.01em",
		},
		overline: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.143rem", // 16px
			textTransform: "none",
			lineHeight: 1.1875, // 19px
			"@media (min-width:905px)": {
				fontSize: "1.429rem", // 20px
				lineHeight: 1.2, // 24px
			},
		},

		// Button
		button1: {
			fontFamily: '"ExpandedDemiBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.429rem", // 20px
			lineHeight: 1, // 20px
			letterSpacing: "0em",
		},
		button2: {
			fontFamily: '"ExpandedDemiBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.143rem", // 16px
			lineHeight: 1.25, // 20px
			letterSpacing: "0em",
		},

		// Utility
		navLink: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.071rem", // 15px
			lineHeight: 1.2, // 18px
			letterSpacing: "0.025em",
		},
		link: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1rem", // 14px
			lineHeight: 1.286, // 18px
			letterSpacing: "0.025em",
		},
		input: {
			fontFamily: '"ExpandedDemiBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.143rem", // 16px
			lineHeight: 1, // 16px
			letterSpacing: "0.01em",
			"@media (min-width:905px)": {
				fontFamily: '"Expanded", "Helvetica", "Arial", sans-serif',
				fontSize: "1.286rem", // 18px
				lineHeight: 1.222, // 22px
				letterSpacing: "0em",
			},
		},
		formErrorMessage: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "0.714rem", // 10px
			lineHeight: 1.4, // 14px
			letterSpacing: "0.02em",
		},
		caption: {
			fontSize: "0.643rem", // 9px
			lineHeight: 1.556, // 14px
			letterSpacing: "0.02em",
		},

		// Eyebrows
		eyebrow1: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "0.857rem", // 12px
			lineHeight: 1.333, // 16px
			letterSpacing: "0em",
		},
		eyebrow2: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "0.714rem", // 10px
			lineHeight: 1.4, // 14px
			letterSpacing: "0.3em",
		},

		// Spec Sheet
		rowTitle: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.429rem", // 20px
			lineHeight: 1.2, // 24px
			letterSpacing: "-0.02em",
		},
		subRowTitle: {
			fontFamily: '"ExpandedBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.143rem", // 16px
			lineHeight: 1.25, // 20px
			letterSpacing: "0em",
		},
		item: {
			fontFamily: '"ExpandedDemiBold", "Helvetica", "Arial", sans-serif',
			fontSize: "1.143rem", // 14px
			lineHeight: 1.25, // 20px
			letterSpacing: "0em",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 905,
			lg: 1240,
			xl: 1440,
		},
	},
	transitions: {
		duration: {
			standard: 500,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					fontSize: "14px",
				},
				body: {
					scrollbarColor: "#000 ##00000020",
					"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
						backgroundColor: "#00000020",
						width: "2px",
						borderRadius: 30,
					},
					"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
						borderRadius: 30,
						backgroundColor: "#000",
						minHeight: 24,
					},
					"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
						{
							backgroundColor: "#959595",
						},
					"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
						{
							backgroundColor: "#959595",
						},
					"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
						{
							backgroundColor: "#959595",
						},
					"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
						backgroundColor: "#2b2b2b",
					},
					boxSizing: "border-box",
				},
			},
		},
		//   MuiTypography: {
		//     styleOverrides: {
		//       gutterBottom: {
		//         marginBottom: 28,
		//       },
		//       h1: {
		//         "&.MuiTypography-gutterBottom": {
		//           marginBottom: 50,
		//         },
		//       },
		//       h2: {
		//         "&.MuiTypography-gutterBottom": {
		//           marginBottom: 50,
		//         },
		//       },
		//       h3: {
		//         "&.MuiTypography-gutterBottom": {
		//           marginBottom: 50,
		//         },
		//       },
		//     },
		//   },
		//   MuiInputLabel: {
		//     styleOverrides: {
		//       root: {
		//         color: "#211F1F",
		//       },
		//       shrink: {
		//         transform: "translate(0, 1.5px) scale(1)",
		//       },
		//     },
		//   },
		//   MuiInputBase: {
		//     styleOverrides: {
		//       input: {
		//         padding: "15px 0 10px",
		//       },
		//     },
		//   },
		//   MuiBackdrop: {
		//     styleOverrides: {
		//       root: {
		//         backgroundColor: "rgba(0, 0, 0, 0.75)",
		//       },
		//     },
		//   },
		//   MuiAccordion: {
		//     styleOverrides: {
		//       root: {
		//         "&$expanded": {
		//           margin: 0,
		//         },
		//       },
		//     },
		//   },
		//   MuiAccordionSummary: {
		//     styleOverrides: {
		//       root: {
		//         padding: 0,
		//       },
		//       content: {
		//         margin: "10px 0",
		//         transition: "none",
		//         "&$expanded": {
		//           margin: "10px 0",
		//         },
		//       },
		//     },
		//   },
		//   MuiAccordionDetails: {
		//     styleOverrides: {
		//       root: {
		//         padding: "0 0 10px",
		//       },
		//     },
		//   },
		//   MuiNativeSelect: {
		//     styleOverrides: {
		//       root: {
		//         paddingTop: "12px",
		//       },
		//     },
		//   },
	},
};

export const DefaultTheme: Theme = createTheme(theme);
