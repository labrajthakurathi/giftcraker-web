import { useGlobal } from "@/context/globalContext";
import { db } from "@/firebase/clientApp";
import { Box, Typography } from "@/ui-library";
import Spinner from "@/ui-library/components/atom/spinner";
import ToggleButton from "@/ui-library/components/atom/toggleButton";
import ToggleGroup from "@/ui-library/components/atom/toggleGroup";
import { ThemeContextInterface } from "@/ui-library/interfaces";
import { ThemeContext } from "@/ui-library/themeContext/themeContext";
import { styled } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

const Occasion = () => {
	const themeContext: ThemeContextInterface = useContext(ThemeContext);
	const theme = themeContext.currentTheme;
	const [tags, setTags] = useState<any>([]);
	const { setTrigger, setQa, qa } = useGlobal();

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newOption: string
	) => {
		setTrigger(true);
		setQa({ ...qa, occasion: newOption });
	};

	useEffect(() => {
		getFirebaseData();
	}, []);

	const getFirebaseData = async () => {
		const docRef = doc(db, "tags", "occasion");
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			setTags(docSnap.data().tags);
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	};

	return (
		<>
			<Typography
				variant='h2'
				mb={2}
			>
				{"What's the "}
				<StyledSpan>Occasion</StyledSpan>?
			</Typography>

			{tags.length === 0 ? (
				<Loading />
			) : (
				<ToggleGroup
					value={qa?.occasion}
					onChange={handleChange}
					exclusive
				>
					{tags.map((tag: any) => (
						<ToggleButton
							value={tag}
							key={tag}
						>
							{tag}
						</ToggleButton>
					))}
				</ToggleGroup>
			)}
		</>
	);
};

export default Occasion;

const Loading = () => {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "200px",
			}}
		>
			<Spinner />
		</Box>
	);
};

//prettier-ignore
const StyledSpan=styled('span')(({theme})=>`
display:inline-flex;
border-bottom:4px solid ${theme.palette.brand.red.main};
`)
