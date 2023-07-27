import React from "react";

import styles from "./styles.module.scss";
import { CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <div className={styles.loading_container}>
      <CircularProgress color='warning' />
    </div>
  );
};

export default LoadingSpinner;
