import React, { useState } from "react";
import styles from "./styles.module.scss";
import { COLORS } from "../../constants/Colors";
import {
  Button,
  Card,
  CardContent,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paths from "../../constants/Paths";
import TitleToStatusElectricalSwitcher from "./title-to-status-electrical-switcher";
import DescriptionToTimeHubSwitcher from "./description-to-time-hub-switcher";
import IssueContact from "./issue-contact";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    orangeRed: createColor("#E9513E"),
  },
});

const buttonStyle = {
  "&.MuiButton-root": {
    background: `linear-gradient(to top, ${COLORS.lightOrange}, ${COLORS.lightRed})`,
  },
};

const cardStyle = {
  minWidth: 275,
  boxShadow: "2px 2px 2px #ebecee",
  borderRadius: "16px",
  marginY: 2,
};

const IssuesPage = () => {
  const [saveChanges, setSaveChanges] = useState(
    JSON.parse(sessionStorage.getItem("backendData"))
  );
  const [dateUpdate, setDateUpdate] = useState("");
  const navigate = useNavigate();

  const handleSaveChanges = () => {
    sessionStorage.setItem("backendData", JSON.stringify(saveChanges));
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.login_save_buttons_container}>
        <ThemeProvider theme={theme}>
          <Button
            className={styles.button_outlined}
            variant='outlined'
            color='orangeRed'
            onClick={() => {
              localStorage.clear();
              sessionStorage.setItem("token", "");
              navigate(`/${Paths.LOGIN_PATH}`);
            }}
          >
            Log Out
          </Button>
        </ThemeProvider>
        <Button
          className={styles.button_contained}
          sx={buttonStyle}
          variant='contained'
          onClick={() => {
            handleSaveChanges();
            setDateUpdate(new Date().toString().slice(0, 25));
          }}
        >
          Save Changes
        </Button>
      </div>
      <div className={styles.card_container}>
        <Card sx={cardStyle}>
          <CardContent className={styles.card_content}>
            <div className={styles.create_issue_container}>
              <div className={styles.create_issue_title}>Create an Issue</div>
              <div className={styles.date}>Last updated on {dateUpdate}</div>
              <TitleToStatusElectricalSwitcher />
              <DescriptionToTimeHubSwitcher />
              <div className={styles.issue_contact_title}>Issue Contact</div>
              <IssueContact setSaveChanges={setSaveChanges} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default IssuesPage;
