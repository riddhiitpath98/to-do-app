import {
    Box,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import useToggleState from "../../hooks/use-toggle";
  import { ICONS } from "../../assets";
  
  export default function CustomInput({
    label,
    fullWidth,
    name,
    type = "text",
    variant,
    size = "small",
    error,
    helperText,
    inputProps,
    ...props
  }) {
    const { state, toggle } = useToggleState();
  
    return (
      <Box sx={{ width: "100%" }}>
        <Typography variant="subtitle2">{label}</Typography>
        <TextField
          fullWidth
          name={name}
          size={size}
          type={type === "password" && state ? "text" : type}
          {...props}
          variant={variant}
          error={Boolean(error)}
          helperText={helperText}
          inputProps={inputProps}
          InputProps={{
            endAdornment:
              type === "password" ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggle}
                    edge="end"
                  >
                    {state ? <ICONS.VisibilityOff /> : <ICONS.Visibility />}
                  </IconButton>
                </InputAdornment>
              ) : null,
          }}
        />
      </Box>
    );
  }
  