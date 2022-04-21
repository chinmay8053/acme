import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const BootstrapButton = styled(Button)({
  color: "black",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "10px 20px",
  lineHeight: 1,
  backgroundColor: "transparent",
  fontFamily: "inherit",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#223",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "#1a1c1d",
  },
});
