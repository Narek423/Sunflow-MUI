import { useState, React } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import NavigationMenuButtons from "../../constants/NavigationMenuButtons";
import ButtonWithIcon from "./button-with-icon";
import TextButton from "./text-button";

const drawerWidth = 252;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 13px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function NavigationMenu() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerStyle = {
    "& .MuiDrawer-paperAnchorLeft": {
      height: "91.2vh",
      marginTop: "65px",
      overflowY: !open ? "hidden" : "",
    },
    "& .MuiList-padding": {
      paddingTop: "40px",
    },
  };

  return (
    <>
      <Drawer
        variant='permanent'
        open={open}
        onMouseOver={handleDrawerOpen}
        onMouseOut={handleDrawerClose}
        sx={drawerStyle}
      >
        <List>
          {NavigationMenuButtons.map((button, index) => (
            <div key={button.name + index}>
              {button.icon && open && <Divider />}
              {button.icon ? (
                <ButtonWithIcon open={open} button={button} />
              ) : (
                <TextButton open={open} button={button} index={index} />
              )}
            </div>
          ))}
          <Divider />
        </List>
      </Drawer>
    </>
  );
}

export default NavigationMenu;
