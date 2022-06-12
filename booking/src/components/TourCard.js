import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://images.pexels.com/photos/306381/pexels-photo-306381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="nigara falls"
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {" "}
            Immerse into the falls
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
          }}
        >
          <AccessTime sx={{ width: 14 }} />
          <Typography variant="body2" component="p">
            5 hours
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};
export default TourCard;
