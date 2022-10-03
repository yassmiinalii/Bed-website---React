import { Stack, Typography,Box } from "@mui/material";
import React from "react";
import errorImage from "../assets/images/error.svg";

const style = {
  maxWidth: "240px",
};

const NotFound = () => {
  return (
    <Stack spacing={4} alignItems="center" pt={20} sx={{ height: "100vh" }}>
      <Box>
        <img src={errorImage} alt="cart empty" style={style} />
      </Box>

      <Typography variant="h4"> 404 - Page Not Found!</Typography>
    </Stack>
  );
};

export default NotFound;