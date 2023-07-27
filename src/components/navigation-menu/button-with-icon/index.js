import { React } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import ThemeSwitch from "../../theme-switch";

function ButtonWithIcon({ open, button }) {
  const location = useLocation();

  const clickedButton = location.pathname === `/profile/${button.name}`;

  const navigate = useNavigate();

  const listItemStyle = { display: "block" };
  const buttonStyle = {
    justifyContent: open ? "initial" : "center",
    px: 2.5,
  };
  const iconStyle = {
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
  };

  const buttontextStyle = {
    opacity: open ? 1 : 0,
    color: clickedButton ? "white" : "black",
  };

  return (
    <>
      <ListItem disablePadding sx={listItemStyle}>
        <ListItemButton
          className={
            !clickedButton ? styles.menu_button : styles.menu_button_clicked
          }
          onClick={() => {
            navigate(button.name);
          }}
          sx={buttonStyle}
        >
          <ListItemIcon sx={iconStyle}>
            {button.icon(clickedButton)}
          </ListItemIcon>
          <ListItemText primary={button.name} sx={buttontextStyle} />
        </ListItemButton>
        {button.name === "Appearance" && (
          <div className={styles.theme_switch_wrapper}>
            {open && <ThemeSwitch />}
          </div>
        )}
      </ListItem>
    </>
  );
}

export default ButtonWithIcon;
