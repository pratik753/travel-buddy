import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Tours from "../Tours/Tours";
import Form from "../Form/Form";
import { useEffect, useState } from "react";
import { getTours } from "../../actions/tours";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import Footer from "../nav_bar/Footer";
import TourDetail from "../Tours/TourDetail/TourDetail";
const Home = () => {
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
        <Tours setCurrentId={setCurrentId} />
        {/* <TourDetail /> */}
        </Container>
      </Grow>
      <Footer />
    </>
  );
};
export default Home;
