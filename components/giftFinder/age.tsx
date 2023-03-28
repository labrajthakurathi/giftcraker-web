import { useGlobal } from "@/context/globalContext";
import { db } from "@/firebase/clientApp";
import { Typography } from "@/ui-library";
import ToggleButton from "@/ui-library/components/atom/toggleButton";
import ToggleGroup from "@/ui-library/components/atom/toggleGroup";
import { ThemeContextInterface } from "@/ui-library/interfaces";
import { ThemeContext } from "@/ui-library/themeContext/themeContext";
import { styled } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

const Age = () => {
	const themeContext: ThemeContextInterface = useContext(ThemeContext);
	const theme = themeContext.currentTheme;
	const [tags, setTags] = useState<any>([]);
	const { setTrigger, qa, setQa } = useGlobal();

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newOption: string
	) => {
		setTrigger(true);
		setQa({ ...qa, age: newOption });
	};

	useEffect(() => {
		getFirebaseData();
	}, []);

	const getFirebaseData = async () => {
		const docRef = doc(db, "tags", "age");
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
				mb={1.5}
			>
				{"What's the "}
				<StyledSpan
					style={{ borderBottom: `3px solid ${theme.palette.brand.red.main}` }}
				>
					Occasion
				</StyledSpan>
				?
			</Typography>
			<ToggleGroup
				value={qa?.age}
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
		</>
	);
};

export default Age;

//prettier-ignore
const StyledSpan=styled('span')(({theme})=>`
display:inline-flex;
border-bottom:4px solid ${theme.palette.brand.red.main};
`)
