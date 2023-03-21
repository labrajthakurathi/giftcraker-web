import { styled } from "@mui/material";
import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import { Typography } from "./typography";
import ErrorIcon from "@mui/icons-material/Error";

type ExtraTypoProps = {
  component: React.ElementType;
};
export const TextField = (props: TextFieldProps, ref: React.Ref<any>) => {
  return (
    <StyledMUITextField
      {...props}
      size="small"
      variant="outlined"
      error={true}
      label={<Typography variant="eyebrow1">{props.label}</Typography>}
      helperText={
        props.error && (
          <StyledErrorLabel variant="body2" component={"span"}>
            <ErrorIcon />
          </StyledErrorLabel>
        )
      }
    />
  );
};

interface ExtraProps {
  error: boolean;
}

//prettier-ignore
const StyledMUITextField = styled(MUITextField)<ExtraProps>(({ theme,error }) => `
${!error? 'padding-bottom:10px':'' }
width:100%;
  .MuiOutlinedInput-notchedOutline{
    border-color:${theme.palette.text.primary + '66'} !important;
 
  }
  .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl{
    &:hover{
      .MuiOutlinedInput-notchedOutline{
        border:1px solid ${theme.palette.text.primary};
       
      }
    }
    .MuiOutlinedInput-notchedOutline span{
        padding:0 !important;
      }
    }
    .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated{
      display:flex;
      justify-content:center;
      align-items:center;
      height:24px;
    }
 
    .MuiTypography-root.MuiTypography-eyebrow1{
      color:${theme.palette.text.primary + 'CC'} !important;
    }
    
`);

//prettier-ignore
const StyledErrorLabel = styled(Typography)<ExtraTypoProps>(({ theme }) => `
    color: ${theme.palette.alert.error[500]};
    display: inline-flex;
    align-items:center;
    gap: 6px;
    margin-top: 4px;
    > *{
        margin-left: -2px;
      },`,
)
