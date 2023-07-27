import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import LogInTextField from "./text-field";
import { Button, Checkbox } from "@mui/material";
import { COLORS } from "../../constants/Colors";
import handleLoginButtonClick from "../../utils/handleLoginButtonClick";
import { useNavigate } from "react-router-dom";
import Paths from "../../constants/Paths";
import LoadingSpinner from "../loading-spinner";

const checkboxStyle = {
  color: "#E84D3E",
  "&.Mui-checked": {
    color: "#E84D3E",
  },
  "& .MuiSvgIcon-root": { fontSize: 18 },
};

const buttonStyle = {
  "&.MuiButton-root": {
    background: `linear-gradient(to top, ${COLORS.lightOrange}, ${COLORS.lightRed})`,
  },
  textTransform: "none",
};

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [keepLogedin, setKeepLogedin] = useState(true);
  const navigate = useNavigate();
  const { PROFILE_PATH } = Paths;

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  useEffect(() => {
    if (token) navigate(`/${PROFILE_PATH}`);
  });

  return token ? (
    <LoadingSpinner />
  ) : (
    <div className={styles.main_container}>
      <div className={styles.login_logo_main_container}>
        <div className={styles.login_logo_wrapper}>
          <img className={styles.logo} src='/assets/sunflow-logo.svg' alt='' />
          <h1 className={styles.title}>Log in to your account</h1>
          {error && <div className={styles.error}>{error}</div>}
          <LogInTextField
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
          <div className={styles.checkboxe_wrapper}>
            <Checkbox
              {...label}
              checked={keepLogedin}
              onChange={() => setKeepLogedin(!keepLogedin)}
              sx={checkboxStyle}
            />
            <div className={styles.checkboxe_text}>Keep me logged in</div>
          </div>
          <Button
            className={styles.button}
            sx={buttonStyle}
            variant='contained'
            onClick={() =>
              handleLoginButtonClick({
                username,
                password,
                setError,
                navigate,
                keepLogedin,
              })
            }
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LogInPage;
