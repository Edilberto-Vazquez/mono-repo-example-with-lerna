import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const Theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: "#ff4400",
    },
  },
});
export default Theme;
