import { Button as MuiButton , CircularProgress } from "@mui/material";
import React from "react";

const Button = ({
  title = "Button",
  variant = "contained",
  color = "primary",
  size = "medium",
  icon,
  loading = false,
  startIcon,
  endIcon,
  fullWidth,
  onClick,
  disabled,
  ...props
}) => {

  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      endIcon={
        loading ? (
          <CircularProgress color="primary" size={20} thickness={5} />
        ) : (
          endIcon
        )
      }
      disabled={loading || disabled}
      {...props}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
