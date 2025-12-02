import { useState } from "react";

const useSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };
  return { openSnackbar, snackbarMessage, showSnackbar, setOpenSnackbar };
};

export default useSnackbar;
