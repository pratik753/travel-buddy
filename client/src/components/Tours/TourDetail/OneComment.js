import React from "react";

import useStyles from "./styles";
const OneComment = () => {
  const classes = useStyles();

  return (
    <div className={classes.story}>
      <figure className={classes.story__shape}>
        <img
          src="https://natours.netlify.app/img/nat-8.jpg"
          alt="Person on a tour"
          className={classes.story__img}
        />
        <figcaption className={classes.story__caption}>Mary Smith</figcaption>
      </figure>
      <div className={classes.story__text}>
        <h3 className={classes.smallHeading}>
          I had the best week ever with my family
        </h3>
        <p className={classes.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
          aspernatur libero repellat quis consequatur ducimus quam nisi
          exercitationem omnis earum qui.
        </p>
      </div>
    </div>
  );
};

export default OneComment;
