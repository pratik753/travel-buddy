import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import useStyle from "./style";
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import { GoogleLogin } from "react-google-login";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin, signup } from "../../actions/auth";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const classes = useStyle();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  // const isSignup = true;
  const handleShowPassword = () =>
    setShowPassword((preShowPassword) => !preShowPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
    console.log(formData);
    history.push("/");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const fileUpload = (e) => {
    console.log(e.target.value, "fille");
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj; // optional chaining operator ?. in this if object is not avilable then it will return undefined
    const token = res?.tokenId;
    console.log(token, result);
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Fail to login");
  };

  const switchMode = () => {
    setIsSignup((preIsSignup) => !preIsSignup);
    setShowPassword(false);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenOutlined />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
                <div className={classes.uploadDiv}>
                  <label
                    htmlFor="upload-photo"
                    style={{ width: "100%", padding: "8px" }}
                  >
                    <input
                      style={{ display: "none", padding: "8px" }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      onChange={fileUpload}
                    />

                    <Button
                      style={{
                        alignItems: "center",
                        width: "100%",
                        height: "55px",
                      }}
                      color="secondary"
                      variant="contained"
                      component="span"
                    >
                      Upload Pic
                    </Button>
                  </label>

                  <FormControl fullWidth style={{ padding: "8px" }}>
                    <InputLabel
                      id="demo-simple-select-autowidth-label"
                      variant="outlined"
                    >
                      Role
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      // value={age}
                      // onChange={handleChange}
                      autoWidth
                      label="Role"
                    >
                      <MenuItem value={"user"}>User</MenuItem>
                      <MenuItem value={"guide"}>Guide</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an Account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
