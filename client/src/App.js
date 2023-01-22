import React, { useEffect } from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/nav_bar/NavBar";
import Footer from "./components/nav_bar/Footer";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Admin from "./components/Admin/Admin";
import TourDetail from "./components/Tours/TourDetail/TourDetail";
const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTours());
  // }, []);
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/tourDetail" exact component={TourDetail} />
        </Switch>
        {/* <Footer /> */}
      </Container>
    </BrowserRouter>
  );
};

export default App;
