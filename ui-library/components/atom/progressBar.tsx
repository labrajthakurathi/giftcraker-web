import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 15,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
				"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
				"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor:
			theme.palette.mode === "light" ? theme.palette.grey[800] : "#eaeaf0",
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled("div")<{
	ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
	backgroundColor:
		theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
	zIndex: 1,
	color: "#fff",
	width: 30,
	height: 30,
	display: "flex",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	...(ownerState.active && {
		backgroundImage:
			"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
	}),
	...(ownerState.completed && {
		backgroundImage:
			"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
	}),
}));

function ColorlibStepIcon(props: StepIconProps) {
	const { active, completed, className } = props;

	const icons: { [index: string]: React.ReactElement } = {
		1: <CelebrationIcon sx={{ height: "16px" }} />,
		2: <DateRangeIcon sx={{ height: "16px" }} />,
		3: <Diversity1Icon sx={{ height: "16px" }} />,
		4: <GroupAddIcon sx={{ height: "16px" }} />,
	};

	return (
		<ColorlibStepIconRoot
			ownerState={{ completed, active }}
			className={className}
		>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}

const steps = [
	"Select campaign settings",
	"Create an ad group",
	"Create an ad",
	"Create an end",
];

export default function ProgressBar({ step }: any) {
	return (
		<Stack
			sx={{ width: "100%" }}
			spacing={4}
		>
			<Stepper
				alternativeLabel
				activeStep={step}
				connector={<ColorlibConnector />}
			>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
					</Step>
				))}
			</Stepper>
		</Stack>
	);
}
