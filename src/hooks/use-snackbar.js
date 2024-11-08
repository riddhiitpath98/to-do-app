import { useSnackbar } from "notistack";

const useSnackBar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackbar = ( variant , message) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 3000,
    });
  };

  return {
    handleSnackbar,
  };
};

export default useSnackBar;