import React from "react";
import useStyles from "./styles";
// import logo from "../../../images/memories.png";
import { Grid } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import { useSelector } from "react-redux";
import DayCard from "./DayCard";
import Comment from "./Comment";
import Booking from "./Booking";
const TourDetail = () => {
  const classes = useStyles();
  const tour = useSelector((state) => state.tours);
  console.log("bye", tour);
  return tour === null ? (
    <h1>PLEASE WAIT..</h1>
  ) : (
    <div>
      <header
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(126,213,111,0.8), rgba(40,180,133,0.8)),url("https://www.natours.dev/img/tours/tour-2-cover.jpg")`,
        }}
        className={classes.header}
      >
        <div className={classes.logoBox}>
          {/* <img
            className={classes.logoimage}
            height="60"
            // src={logo}
            alt="Logo"
          /> */}
        </div>
        <div className={classes.textBox}>
          <h1 className={classes.primaryHeading}>{tour?.name}</h1>
          <h3 className={classes.smallHeading}>
            Difficulty: {tour?.difficulty}
          </h3>
        </div>
      </header>
      <main>
        <section className={classes.sectionAbout}>
          <div className={classes.sectionCenterText}>
            <h2 className={classes.secondaryHeading}>
              Exciting tours for adventurous people
            </h2>
          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <h3 className={classes.smallHeading}>
                You're going to fall in love with nature
              </h3>
              <p className={classes.paragraph}>{tour?.description}</p>

              <h3 className={classes.smallHeading}>
                Live adventures like you never have before
              </h3>
              <p className={classes.paragraph}>{tour?.summary}</p>

              <a href="#" className={classes.btnText}>
                Learn more →
              </a>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.threeImageDiv}>
                <img
                  className={classes.oneImage}
                  src={"https://natours.netlify.app/img/nat-1-large.jpg"}
                />
                <img
                  className={classes.twoImage}
                  src={"https://natours.netlify.app/img/nat-2-large.jpg"}
                />
                <img
                  className={classes.threeImage}
                  src={"https://natours.netlify.app/img/nat-3-large.jpg"}
                />
              </div>
            </Grid>
          </Grid>
        </section>
        <div className={classes.whiteBg}>
          <section
            className={classes.sectionFeature}
            style={{
              backgroundImage: `linear-gradient(to right bottom, rgba(126,213,111,0.8), rgba(40,180,133,0.8)),url("https://natours.netlify.app/img/nat-4.jpg")`,
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              className={classes.rowFeature}
            >
              {tour?.locations?.map((data) => (
                <DayCard data={data} />
              ))}
            </Grid>
          </section>
        </div>
        <section className={classes.sectionReview}>
          <div className={classes.bgVideo}>
            <video class="bg-video__content" autoplay="" muted="" loop="">
              <source
                src="https://natours.netlify.app/img/video.mp4"
                type="video/mp4"
              />
              <source
                src="https://natours.netlify.app/img/video.webm"
                type="video/webm"
              />
              Your browser is not supported!
            </video>
          </div>
          <div className={classes.sectionCenterText}>
            <h2 className={classes.secondaryHeading}>
              We make people genuinely happy
            </h2>
          </div>
        </section>
        <Comment />
        <section className={classes.sectionBook}>
          <div className={classes.row}>
            <div className={classes.book}>
              <div className={classes.book__form}>
                <Booking price={tour?.price} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TourDetail;
