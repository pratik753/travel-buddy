import React from "react";
import useStyles from "./styles";
// import logo from "../../../images/memories.png";
import { Grid } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import { useSelector } from "react-redux";
const DayCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <div className={classes.featureBox}>
        <LanguageIcon className={classes.iconFeature} />
        {/* <h3 className={classes.smallHeading}>Explore the world</h3> */}
        <h3 className={classes.smallHeading}>
          Day: {data?.day} Type: {data?.type}
        </h3>

        <p className={classes.paragraph}>{data?.description}</p>
        <p className={classes.paragraph}>
          {`Lat: ${data?.coordinates[0]} , Long: ${data?.coordinates[1]}`}
        </p>
      </div>
    </Grid>
  );
};

export default DayCard;
