import { Alert as MUIAlert, AlertProps } from "@mui/material";

export const Alert = (props: AlertProps) => {
  return (
    <MUIAlert {...props} sx={{ display: "flex", alignItems: "center" }}>
      {props.children}
    </MUIAlert>
  );
};
