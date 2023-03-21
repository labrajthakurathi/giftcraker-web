import { Typography as MUITypography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  fullScreen?: boolean;
  spinnerText?: string;
}

export const Typography = (props: Props) => {
  return <MUITypography {...props} />;
};
