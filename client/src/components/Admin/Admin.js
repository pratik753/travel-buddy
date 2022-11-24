import React from "react";
import { Container, Grow, Grid, Button } from "@material-ui/core";
import Tours from "../Tours/Tours";
import Form from "../Form/Form";
import { useEffect, useState } from "react";
import { getTours } from "../../actions/tours";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import AddTour from "./AddTour";
import ShowGuide from "./ShowGuide";
const Admin = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const [show, setShow] = useState(0);

  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getTours());
  }, [currentId, dispatch]);
  const changeMenu = (num) => {
    console.log(num);
    setShow(num);
  };
  return (
    <>
      <Grow in>
        <Container className={classes.mainContainer}>
          {/* <Tours setCurrentId={setCurrentId} /> */}
          <Button
            className={classes.btn}
            // to="/auth"
            variant="contained"
            color="primary"
            onClick={() => changeMenu(0)}
          >
            Add Tour
          </Button>
          <Button
            // component={Link}
            className={classes.btn}
            // to="/auth"
            variant="contained"
            color="primary"
            onClick={() => changeMenu(1)}
          >
            Show Guide
          </Button>
          {show == 0 && <AddTour />}
          {show == 1 && <ShowGuide />}
        </Container>
      </Grow>
    </>
  );
};
export default Admin;
