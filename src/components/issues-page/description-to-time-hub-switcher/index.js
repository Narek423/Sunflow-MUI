import React from "react";
import styles from "./styles.module.scss";
import {
  InputAdornment,
  Switch,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
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
const inputLableStyle = {
  shrink: true,
};
const calendIconWrapperStyle = { marginTop: "-70px" };
const inputPropStyle = {
  style: {
    height: "76px",
  },
};

const DescriptionToTimeHubSwitcher = () => {
  return (
    <div className={styles.description_to_time_hub_switcher}>
      <div className={styles.text_fieldes_container}>
        <TextField
          className={styles.text_fielde_description}
          InputLabelProps={inputLableStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <span style={calendIconWrapperStyle}>
                  <CalendarTodayOutlinedIcon fontSize='small' />
                </span>
              </InputAdornment>
            ),
          }}
          inputProps={inputPropStyle}
          multiline
          label={"Description"}
          color='warning'
        />
        <TextField
          sx={textFieldStyle}
          className={styles.text_fielde_repair_date}
          InputLabelProps={inputLableStyle}
          label={"Repair Date"}
          color='warning'
        />
        <TextField
          sx={textFieldStyle}
          className={styles.text_fielde_time_estimate_hours}
          InputLabelProps={inputLableStyle}
          type='number'
          label={"Time Estimate Hours"}
          color='warning'
        />
      </div>
      <div className={styles.switcher}>
        <ThemeProvider theme={theme}>
          <Switch defaultChecked color='lightOrange' sx={menuItemStyle} />
        </ThemeProvider>
        <span className={styles.text}>Hub</span>
      </div>
    </div>
  );
};
export default DescriptionToTimeHubSwitcher;
