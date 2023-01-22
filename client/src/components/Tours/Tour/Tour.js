import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
} from "@material-ui/core/";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
// import calendar_today from "@material-ui/icons/calendar_today";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost,getOneTour } from "../../../actions/tours";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
const Tour = ({ tour, setCurrentId }) => {
  const dispatch = useDispatch();
  const history=useHistory();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const Likes = () => {
    if (tour.likes.length > 0) {
      return tour.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {tour.likes.length > 2
            ? `You and ${tour.likes.length - 1} other`
            : `${tour.likes.length} like${tour.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;
          {tour.likes.length}
          {tour.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };
  function f1(e)
  {
    console.log("hi",tour.id);
    dispatch(getOneTour(tour.id));
    history.push(`/tour/:${tour.id}`);

  }
  console.log(tour, "tour");
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card} onClick={f1}>
      <CardActionArea>
        <div>
          {/* <div className={classes.cardOverlay}></div> */}
          <CardMedia
            component="img"
            className={classes.cardPicture}
            // height="140"
            object-fit="cover"
            height="100%"
            width="100%"
            image="https://www.natours.dev/img/tours/tour-2-cover.jpg"
            alt="green iguana"
          />
          <h3 className={classes.headingText}>
            <span className={classes.headingSpan}>{tour.name}</span>
          </h3>
        </div>
        <CardContent>
          <h4
            className={classes.subHeading}
          >{`${tour?.difficulty.toUpperCase()} ${tour?.duration}-DAY TOUR`}</h4>
          <p className={classes.para}>{tour?.summary}</p>
          <div className={classes.mainIconDiv}>
            <div className={classes.iconDiv}>
              <LocationOnOutlined className={classes.iconColor} />
              <span>{tour?.startLocation?.description}</span>
            </div>
            <div className={classes.iconDiv}>
              <CalendarTodayOutlinedIcon className={classes.iconColor} />
              <span>{tour?.startLocation?.description}</span>
            </div>
          </div>
          <div className={classes.mainIconDiv}>
            <div className={classes.iconDiv}>
              <FlagOutlinedIcon className={classes.iconColor} />
              <span>{tour?.startLocation?.description}</span>
            </div>
            <div className={classes.iconDiv}>
              <PermIdentityOutlinedIcon className={classes.iconColor} />
              <span>{tour?.startLocation?.description}</span>
            </div>
          </div>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.cardFooter}>
          <p className={classes.paraFooter}>
            <span className={classes.price}>$2997</span>{" "}
            <span className={classes.perPerson}>Per person</span>
            <div></div>
            <span className={classes.price}>4.3</span>{" "}
            <span className={classes.perPerson}>rating (7)</span>
          </p>
          {/* <p className={classes.paraFooter}>
          </p> */}
          <Button size="small" color="primary" onClick={f1}>
            Details
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default Tour;
