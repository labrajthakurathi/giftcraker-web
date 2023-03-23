import { Box as MUIBox, BoxProps } from "@mui/material";

interface Props extends BoxProps {
	fullScreen?: boolean;
	spinnerText?: string;
}

export const Box = (props: Props) => {
	return <MUIBox {...props} />;
};
