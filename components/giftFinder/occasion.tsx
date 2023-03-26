import { useGlobal } from "@/context/globalContext";
import { db } from "@/firebase/clientApp";
import { Box, Typography } from "@/ui-library";
import Spinner from "@/ui-library/components/atom/spinner";
import ToggleButton from "@/ui-library/components/atom/toggleButton";
import ToggleGroup from "@/ui-library/components/atom/toggleGroup";
import { ThemeContextInterface } from "@/ui-library/interfaces";
import { ThemeContext } from "@/ui-library/themeContext/themeContext";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

const Occasion = () => {
	const themeContext: ThemeContextInterface = useContext(ThemeContext);
	const theme = themeContext.currentTheme;
	const [option, setOption] = useState("birthday");
	const [tags, setTags] = useState<any>([]);
	const { setTrigger } = useGlobal();
	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: string
	) => {
		setTrigger(true);
		setOption(newAlignment);
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
				mb={1.5}
			>
				{"What's the"}
				<span
					style={{ borderBottom: `3px solid ${theme.palette.brand.red.main}` }}
				>
					Occasion
				</span>
				?
			</Typography>

			{tags.length === 0 ? (
				<Loading />
			) : (
				<ToggleGroup
					value={option}
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
