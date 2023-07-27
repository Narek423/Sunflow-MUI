import { useState, React } from "react";
import styles from "./styles.module.scss";
import {
  Button,
  MenuItem,
  StyledEngineProvider,
  TextField,
} from "@mui/material";
import { COLORS } from "../../../constants/Colors";
import { v4 as uuidv4 } from "uuid";
import DataGridCustom from "../data-grid";

const textFieldStyle = {
  "& .MuiOutlinedInput-input": {
    paddingY: 1.25,
  },
};
const buttonStyle = {
  "&.MuiButton-root": {
    background: `linear-gradient(to top, ${COLORS.lightOrange}, ${COLORS.lightRed})`,
  },
};

const menuItemStyle = {
  "&.Mui-selected": {
    ":hover": { background: "#d2191914" },
    background: "#d2191914",
  },
};

const IssueContact = ({ setSaveChanges }) => {
  const storigeData = JSON.parse(sessionStorage.getItem("backendData")) || [];
  const [role, setRole] = useState("");
  const [user, setUser] = useState("");
  const [rows, setRows] = useState(storigeData);

  const selectRoleOptions = ["Admin", "Standard", "User"];
  const selectUserOptions = ["John", "Jacob", "Jennifer"];

  const addRow = () => {
    if (user && role) {
      const updatedRows = [
        ...rows,
        {
          id: uuidv4(),
          email: "Joe.Abraham@joeabraham.com",
          name: user,
          phone: "123-456-7890",
          role: role,
        },
      ];
      setRows(updatedRows);
      setSaveChanges(updatedRows);
    }
  };

  return (
    <>
      <div className={styles.issue_contact_container}>
        <div className={styles.text_fieldes_container}>
          <TextField
            sx={textFieldStyle}
            className={styles.text_fielde_select_role}
            InputLabelProps={{
              shrink: true,
            }}
            label={"Select Role"}
            select
            defaultValue=''
            value={role}
            onChange={(e) => setRole(e.target.value)}
            color='warning'
          >
            {selectRoleOptions.map((option, index) => (
              <MenuItem key={option + index} value={option} sx={menuItemStyle}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={textFieldStyle}
            className={styles.text_fielde_select_user}
            InputLabelProps={{
              shrink: true,
            }}
            label={"Select User"}
            select
            defaultValue=''
            value={user}
            onChange={(e) => setUser(e.target.value)}
            color='warning'
          >
            {selectUserOptions.map((option, index) => (
              <MenuItem key={option + index} value={option} sx={menuItemStyle}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={styles.button_wrapper}>
          <Button
            className={styles.button_contained}
            sx={buttonStyle}
            variant='contained'
            onClick={addRow}
          >
            Assign
          </Button>
        </div>
      </div>
      <div className={styles.grid_wrapper}>
        <StyledEngineProvider injectFirst>
          <DataGridCustom
            rows={rows}
            setRows={setRows}
            setSaveChanges={setSaveChanges}
          />
        </StyledEngineProvider>
      </div>
    </>
  );
};
export default IssueContact;
