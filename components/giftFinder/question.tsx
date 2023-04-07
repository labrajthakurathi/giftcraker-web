import { Itopic, useGlobal } from "@/context/globalContext";
import { Box, Typography } from "@/ui-library";
import Spinner from "@/ui-library/components/atom/spinner";
import ToggleButton from "@/ui-library/components/atom/toggleButton";
import ToggleGroup from "@/ui-library/components/atom/toggleGroup";
import { styled } from "@mui/material";
import React from "react";

type QuestionInterface = {
	topic: Itopic;
	title: string;
};
const Question = ({ topic, title }: QuestionInterface) => {
	const { setTrigger, setQa, qa, tags } = useGlobal();

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newOption: string
	) => {
		setTrigger(true);
		setQa({ ...qa, [topic]: newOption });
	};

	return (
		<>
			<Typography
				variant='h2'
				mb={2}
			>
				{title}
				<StyledSpan>{topic}</StyledSpan> ?
			</Typography>

			{tags?.[topic]?.length === 0 ? (
				<Loading />
			) : (
				<ToggleGroup
					value={qa?.[topic]}
					onChange={handleChange}
					exclusive
				>
					{tags?.[topic]?.map((tag: any) => (
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

export default Question;

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
const StyledSpan = styled('span')(({theme})=>`
    text-transform:capitalize;
	display:inline-flex;
	border-bottom:4px solid ${theme.palette.brand.red.main};

`)
