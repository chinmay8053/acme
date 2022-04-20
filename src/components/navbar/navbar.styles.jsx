import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const BootstrapButton = styled(Button)({
  color: "black",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "8px 15px",
  lineHeight: 1,
  backgroundColor: "transparent",
  fontFamily: "inherit",
  borderRadius: "10px",
  // color: "white",
  "&:hover": {
    backgroundColor: "#1a1c1d",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#1a1c1d",
  },
});
