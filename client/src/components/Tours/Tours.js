import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
// import NodeGeocoder from "node-geocoder";
import Tour from "./Tour/Tour";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const Tours = ({ setCurrentId }) => {
  const tours = useSelector((state) => state.tours);
  const classes = useStyles();
  const history=useHistory();
  // console.log(tours.data?.tours, "tours");
  function f1(e)
  {
    console.log("hello");
    console.log(e);
   // history.push(`/tour/:${id}`);
  }
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
          
          key={tour._id}
          item
          xs={8}
          sm={6}
          md={4}
        >
          <Tour tour={tour} setCurrentId={setCurrentId} onClick={f1}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tours;
