import React, { useState } from "react";
import styles from "./styles.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const textFieldPadding = {
  "& .MuiOutlinedInput-input": {
    paddingY: 1.3,
  },
};

const LogInTextField = ({ username, setUsername, password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.textField_wrapper}>
      <TextField
        sx={textFieldPadding}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        color='warning'
        id='usernameId'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <PermIdentityOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant='outlined'
        placeholder='Username'
      />
      <TextField
        sx={textFieldPadding}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type={showPassword ? "text" : "password"}
        color='warning'
        id='passwordId'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <LockOutlinedIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant='outlined'
        placeholder='Password'
      />
    </div>
  );
};
export default LogInTextField;
