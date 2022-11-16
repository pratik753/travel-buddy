import React from "react";
import { Container, Grow, Grid, Button } from "@material-ui/core";
import Tours from "../Tours/Tours";
import Form from "../Form/Form";
import { useEffect, useState } from "react";
import { getTours } from "../../actions/tours";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import AddTour from "./AddTour";
const Admin = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getTours());
  }, [currentId, dispatch]);
  return (
    <>
      <Grow in>
        <Container className={classes.mainContainer}>
          {/* <Tours setCurrentId={setCurrentId} /> */}
          <Button
            className={classes.btn}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Add Tour
          </Button>
          <Button
            // component={Link}
            className={classes.btn}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Add Guide
          </Button>
          <AddTour />
        </Container>
      </Grow>
    </>
  );
};
export default Admin;
