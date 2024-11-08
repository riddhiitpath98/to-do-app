import { paperClasses } from "@mui/material";

export const componentsStyle = (theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
        contained: {
          color: theme.palette.common.white,
        },
        outlined: {},
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.MuiPickersDay-root.Mui-selected": {
            color: theme.palette.common.white,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          margin: 0,
        },
      },
    },
    MuiDialogActions: { styleOverrides: { root: { padding: "16px 24px" } } },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          [`&.${paperClasses.elevation1}`]: {
            boxShadow:
              "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: 8.5,
          paddingLeft: 8,
        },
      },
    },
  };
};
