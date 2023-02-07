import React from "react";
import imgSucc from "../../../images/download.png";
import useStyles from "./styles";
const Successful = () => {
  const classes = useStyles();
  return (
    <div>
      <center>
        <h3>Successful </h3>
        <img src={imgSucc} className={classes.imgSucc} />
      </center>
    </div>
  );
};

export default Successful;
