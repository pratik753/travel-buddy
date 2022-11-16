import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import memories from "../../images/memories.png";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import decode from "jwt-decode";

const Footer = () => {
  const classes = useStyles();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    // JWT
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };
  return (
    <AppBar className={classes.footerBar} position="static" color="inherit">
      <div className={classes.brandFooterContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h6"
          align="center"
        >
          Travel Buddy
        </Typography>
        <div>
          <Typography className={classes.subheading} align="center">
            © 2022 by Coder.
          </Typography>
        </div>
      </div>
      <Toolbar className={classes.toolbar}>
        <Button
          component={Link}
          to="/admin"
          variant="contained"
          color="primary"
        >
          Admin
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
