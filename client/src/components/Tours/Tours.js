import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
// import NodeGeocoder from "node-geocoder";
import Tour from "./Tour/Tour";
import useStyles from "./styles";

const Tours = ({ setCurrentId }) => {
  const tours = useSelector((state) => state.tours);
  const classes = useStyles();
  // console.log(tours.data?.tours, "tours");
  return !tours.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={10}
    >
      {tours.map((tour) => (
        <Grid
          // className={classes.gridStyle}
          // className={classes.tourCont}
          key={tour._id}
          item
          xs={8}
          sm={6}
          md={4}
        >
          <Tour tour={tour} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tours;
