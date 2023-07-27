import React from "react";
import styles from "./styles.module.scss";
import {
  MenuItem,
  Switch,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TextFieldsTitleToStatus from "../../../constants/TextFieldsTitleToStatus";
import { COLORS } from "../../../constants/Colors";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    lightOrange: createColor("#F5B690"),
  },
});
const textFieldStyle = {
  "& .MuiOutlinedInput-input": {
    paddingY: 1.25,
  },
};
const menuItemStyle = {
  "& .Mui-checked": {
    "& .MuiSwitch-thumb": {
      background: `linear-gradient(to top, ${COLORS.lightOrange}, ${COLORS.lightRed})`,
    },
  },
};
const menuItemSlectedStyle = {
  "&.Mui-selected": {
    ":hover": { background: "#d2191914" },
    background: "#d2191914",
  },
};

const TitleToStatusElectricalSwitcher = () => {
  return (
    <div className={styles.title_to_status_electrical_switcher}>
      <div className={styles.text_fieldes_container}>
        {TextFieldsTitleToStatus.map((fieldData, index) => (
          <TextField
            key={index}
            sx={textFieldStyle}
            className={styles.text_fieldes}
            InputLabelProps={{
              shrink: true,
            }}
            label={fieldData.title}
            select={fieldData.type}
            defaultValue=''
            color='warning'
          >
            {fieldData.type &&
              fieldData.options.map((option, index) => (
                <MenuItem
                  key={option + index}
                  value={option}
                  sx={menuItemSlectedStyle}
                >
                  {option}
                </MenuItem>
              ))}
          </TextField>
        ))}
      </div>
      <div className={styles.switcher}>
        <ThemeProvider theme={theme}>
          <Switch defaultChecked color='lightOrange' sx={menuItemStyle} />
        </ThemeProvider>
        <span className={styles.text}>Electrical</span>
      </div>
    </div>
  );
};
export default TitleToStatusElectricalSwitcher;
