import { TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

const Booking = ({ price }) => {
  const classes = useStyles();
  const history = useHistory();
  const [userBooking, setUserBooking] = useState({
    name: "",
    email: "",
    price: price,
    noofperson: 1,
  });
  useEffect(() => setUserBooking({ ...userBooking, price: price }), [price]);

  const priceHandler = (e) => {
    // let p=e.
    setUserBooking({
      ...userBooking,
      price: e.target.value * price,
      noofperson: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userBooking, "userBooking");
    history.push("/successful");
  };

  return (
    <>
      <form action="#" className={classes.form}>
        <div className={classes.headingMedium}>
          <h2 className={classes.headingSecondary}>Start booking now</h2>
        </div>
        <div class={classes.form__group}>
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            halfWidth
            onChange={(e) =>
              setUserBooking({ ...userBooking, name: e.target.value })
            }
          />
        </div>
        <br />

        <div class="form__group">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            halfWidth
            onChange={(e) =>
              setUserBooking({ ...userBooking, email: e.target.value })
            }
          />
        </div>
        <br />
        <div class="form__group">
          <TextField
            label="No. Of Person"
            variant="outlined"
            type="number"
            halfWidth
            value={userBooking?.noofperson}
            onChange={priceHandler}
          />
        </div>
        <br />
        <div>
          <Typography> Price: {userBooking?.price} </Typography>
        </div>
        <br />

        <div class="form__group" onClick={submitHandler}>
          <button class="btn btn--green">Next step →</button>
        </div>
      </form>
    </>
  );
};

export default Booking;
