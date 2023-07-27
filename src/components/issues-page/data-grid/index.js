import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styles from "./styles.module.scss";

const GradientOpenWithIcon = ({ children }) => (
  <>
    <svg width={0} height={0}>
      <linearGradient id='linearColors' x1={1} y1={0} x2={1} y2={1}>
        <stop offset={0} stopColor='#E7463F' />
        <stop offset={1} stopColor='#EF8439' />
      </linearGradient>
    </svg>
    {children}
  </>
);

const deleteOutlineIconStyle = {
  ":hover": {
    background: "#d2191914",
    borderRadius: 2,
    cursor: "pointer",
  },
};

function DataGridCustom({ rows, setRows, setSaveChanges }) {
  const menuItemSlectedStyle = {
    "& .MuiDataGrid-virtualScrollerContent": {
      marginY: !rows.length ? 5 : 0,
    },

    "& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium": {
      path: {
        fill: "url(#linearColors)",
      },
    },

    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: 600,
    },

    "& .MuiDataGrid-row.Mui-selected": {
      ":hover": { background: "#d2191914" },
      background: "#d2191914",
    },

    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
      outline: "none !important",
    },
  };

  const removeRow = (rowId) => {
    const updatedRows = rows.filter((row) => row.id !== rowId);
    setRows(updatedRows);
    setSaveChanges(updatedRows);
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 160,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 280,

      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 240,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      width: 190,
      editable: true,
    },
    {
      field: "actions",
      headerName: "",
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div className={styles.recycle_bin_icon_wrapper}>
            <DeleteOutlineIcon
              sx={deleteOutlineIconStyle}
              index={params.row.id}
              onClick={() => removeRow(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <Box>
      <GradientOpenWithIcon>
        <DataGrid
          className={styles.grid}
          rows={rows}
          sx={menuItemSlectedStyle}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 2,
              },
            },
          }}
          pageSizeOptions={[2, 5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </GradientOpenWithIcon>
    </Box>
  );
}

export default DataGridCustom;
