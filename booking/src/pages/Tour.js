import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import QuiltedImageList from "../components/Image";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h2" marginTop={3}>
        Explore the world in San Francisco
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="san francisco"
          height={325}
        />{" "}
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography variant="h6" component="h2" marginTop={3}>
          About this ticket
        </Typography>{" "}
        <Typography variant="paragraph" component="p" marginTop={3}>
          Wander through an ancient coastal redwood forest and explore the
          artistic bayside enclave of Sausalito on this half-day tour from San
          Francisco. Travel across the Golden Gate Bridge to visit Muir Woods,
          home to some of the oldest and tallest trees on Earth. Then, soak up
          stellar views of the San Francisco skyline and browse art galleries
          along the Sausalito waterfront. At the end of your tour choose between
          getting dropped off at either of the two departure points or taking
          the Sausalito ferry back to San Francisco Read more about Muir Woods &
          Sausalito Half-Day Tour (Return by Bus or Ferry from Sausalito)
        </Typography>
      </Box>
    </Container>
  );
};

export default Tour;
