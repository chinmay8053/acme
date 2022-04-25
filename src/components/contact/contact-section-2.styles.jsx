import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgb(146 17 17 / 97%)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(146 17 17 / 97%)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "lightRed",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(146 17 17 / 97%)",
    },
  },
});
