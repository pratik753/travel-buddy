import React from "react";
import useStyles from "./styles";
import logo from "../../../images/memories.png";
import { Grid } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";

const TourDetail = () => {
  const classes = useStyles();
  return (
    <div>
      <header
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(126,213,111,0.8), rgba(40,180,133,0.8)),url("https://www.natours.dev/img/tours/tour-2-cover.jpg")`,
        }}
        className={classes.header}
      >
        <div className={classes.logoBox}>
          <img
            className={classes.logoimage}
            height="60"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className={classes.textBox}>
          <h1 className={classes.primaryHeading}>outoor</h1>
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
              <p className={classes.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>

              <h3 className={classes.smallHeading}>
                Live adventures like you never have before
              </h3>
              <p className={classes.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores nulla deserunt voluptatum nam.
              </p>

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
              <Grid item xs={3}>
                <div className={classes.featureBox}>
                  <LanguageIcon className={classes.iconFeature} />
                  <h3 className={classes.smallHeading}>Explore the world</h3>
                  <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.featureBox}>
                  <LanguageIcon className={classes.iconFeature} />
                  <h3 className={classes.smallHeading}>Explore the world</h3>
                  <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.featureBox}>
                  <LanguageIcon className={classes.iconFeature} />
                  <h3 className={classes.smallHeading}>Explore the world</h3>
                  <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.featureBox}>
                  <LanguageIcon className={classes.iconFeature} />
                  <h3 className={classes.smallHeading}>Explore the world</h3>
                  <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </Grid>
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
          <div className={classes.row}>
            <div className={classes.story}>
              <figure className={classes.story__shape}>
                <img
                  src="https://natours.netlify.app/img/nat-8.jpg"
                  alt="Person on a tour"
                  className={classes.story__img}
                />
                <figcaption className={classes.story__caption}>
                  Mary Smith
                </figcaption>
              </figure>
              <div className={classes.story__text}>
                <h3 className={classes.smallHeading}>
                  I had the best week ever with my family
                </h3>
                <p className={classes.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
            <div className={classes.story}>
              <figure className={classes.story__shape}>
                <img
                  src="https://natours.netlify.app/img/nat-8.jpg"
                  alt="Person on a tour"
                  className={classes.story__img}
                />
                <figcaption className={classes.story__caption}>
                  Mary Smith
                </figcaption>
              </figure>
              <div className={classes.story__text}>
                <h3 className={classes.smallHeading}>
                  I had the best week ever with my family
                </h3>
                <p className={classes.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.sectionBook}>
          <div className={classes.row}>
            <div className={classes.book}>
              <div className={classes.book__form}>
                <form action="#" className={classes.form}>
                  <div className={classes.headingMedium}>
                    <h2 className={classes.headingSecondary}>
                      Start booking now
                    </h2>
                  </div>

                  <div class={classes.form__group}>
                    <input
                      type="text"
                      class="form__input"
                      placeholder="Full name"
                      id="name"
                      required=""
                    />
                    <label for="name" class="form__label">
                      Full name
                    </label>
                  </div>

                  <div class="form__group">
                    <input
                      type="email"
                      class="form__input"
                      placeholder="Email address"
                      id="email"
                      required=""
                    />
                    <label for="email" class="form__label">
                      Email address
                    </label>
                  </div>

                  <div class="form__group u-margin-bottom-medium">
                    <div class="form__radio-group">
                      <input
                        type="radio"
                        class="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label for="small" class="form__radio-label">
                        <span class="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>

                    <div class="form__radio-group">
                      <input
                        type="radio"
                        class="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label for="large" class="form__radio-label">
                        <span class="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>

                  <div class="form__group">
                    <button class="btn btn--green">Next step →</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TourDetail;
