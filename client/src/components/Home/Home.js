import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Tours from "../Tours/Tours";
import Form from "../Form/Form";
import { useEffect, useState } from "react";
import { getTours } from "../../actions/tours";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getTours());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container className={classes.mainContainer}>
        <Tours setCurrentId={setCurrentId} />
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={12}
          item
          sm={3}
        >
          {/* <Grid item xs={12} sm={6}>
          </Grid> */}
          {/* <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid> */}
        </Grid>
      </Container>
    </Grow>
  );
};
export default Home;
