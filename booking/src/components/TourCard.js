import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme } from "@mui/material";

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
          <Typography variant="body2" component="p" marginLeft={0.5}>
            5 hours
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
          }}
          marginTop={3}
        >
          <Rating
            name="read-only"
            value={4.5}
            readOnly
            precision={0.5}
            size="small"
          />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            4.5
          </Typography>
          <Typography variant="body3" component="p" marginLeft={1.5}>
            (655 reviews)
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3" marginTop={0}>
            From USD $480
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};
export default TourCard;
