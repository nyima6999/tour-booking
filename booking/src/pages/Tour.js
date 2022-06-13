import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import QuiltedImageList from "../components/Image";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h2" marginTop={3}>
        Explore the world in San Francisco Bay
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="san francisco"
          height={325}
        />{" "}
        <QuiltedImageList />
      </Box>
    </Container>
  );
};

export default Tour;
