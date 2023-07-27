import React from "react";
import styles from "./styles.module.scss";
import { Box, Divider } from "@mui/material";
import NavigationMenu from "../navigation-menu";
import { Route, Routes } from "react-router-dom";
import IssuesPage from "../issues-page";

const ProfilePage = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.top_bar}></div>
      <Divider />
      <Box className={styles.manu_router_container}>
        <NavigationMenu />
        <Box component='main' className={styles.router_container}>
          <Routes>
            <Route path='/Issues' element={<IssuesPage />} />
            <Route path='*' element={<div>Sorry no page yet...</div>} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
};
export default ProfilePage;
