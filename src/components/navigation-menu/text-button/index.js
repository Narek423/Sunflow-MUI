import { React } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import NavigationMenuButtons from "../../../constants/NavigationMenuButtons";

function TextButton({ open, button, index }) {
  const location = useLocation();

  const clickedButton =
    location.pathname === `/profile/${button.name}1`.replace(" ", "%20");

  const navigate = useNavigate();

  const listItemStyle = { display: "block" };
  const listItemButtonStyle = {
    justifyContent: open ? "initial" : "center",
    px: 2.5,
    marginBottom: NavigationMenuButtons[index + 1]?.icon ? "11px" : "",
  };
  const textStyle = {
    opacity: open ? 1 : 0,
    color: clickedButton ? "white" : "black",
    "& .MuiListItemText-primary": {
      fontSize: "14px",
      fontFamily: "Roboto Flex",
      fontWight: 400,
      lineHeight: "16px",
      marginLeft: "52px",
    },
  };

  return (
    <ListItem disablePadding sx={listItemStyle}>
      <ListItemButton
        className={
          clickedButton && open
            ? styles.menu_button_clicked
            : styles.menu_button
        }
        onClick={() => {
          navigate(`${button.name}1`);
        }}
        sx={listItemButtonStyle}
      >
        <ListItemText primary={button.name} sx={textStyle} />
      </ListItemButton>
    </ListItem>
  );
}

export default TextButton;
