import {
  Container,
  TextField,
  Grid,
  Button,
  TextareaAutosize,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Chip,
  Box,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import React, { useState } from "react";
import FileBase64 from "react-file-base64";
// import { TextareaAutosize } from "@material-ui/core";
// import { createMovie } from "../../action/movie";
import classes from "./styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1,
  };
}

const AddTour = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [dataLocation, setDataLocation] = React.useState({
    description: "",
    type: "",
    coordinates: [],
    day: 1,
  });
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [tour, setMovieName] = useState({
    name: "",
    title: "",
    creator: "",
    description: "",
    imbd: "",
    release: "",
    language: "",
    resolution: "",
    tags: "",
    size: "",
    quickstory: "",
    movielink: "",
    quality: "",
    trailer: "",
    img1: "",
  });

  const titleHandler = (e) => {
    setMovieName({
      ...tour,
      title: e.target.value,
    });
  };
  const creatorHandler = (e) => {
    setMovieName({
      ...tour,
      creator: e.target.value,
    });
  };

  const imbdHandler = (e) => {
    setMovieName({
      ...tour,
      imbd: e.target.value,
    });
  };
  const img1Handler = (e) => {
    setMovieName({
      ...tour,
      img1: e.target.value,
    });
  };
  const img2Handler = (e) => {
    setMovieName({
      ...tour,
      img2: e.target.value,
    });
  };
  const img3Handler = (e) => {
    setMovieName({
      ...tour,
      img3: e.target.value,
    });
  };
  const releaseHandler = (e) => {
    setMovieName({
      ...tour,
      release: e.target.value,
    });
  };
  const languageHandler = (e) => {
    setMovieName({
      ...tour,
      language: e.target.value,
    });
  };
  const resolutionHandler = (e) => {
    setMovieName({
      ...tour,
      resolution: e.target.value,
    });
  };
  const sizeHandler = (e) => {
    setMovieName({
      ...tour,
      size: e.target.value,
    });
  };
  const quickstoryHandler = (e) => {
    setMovieName({
      ...tour,
      quickstory: e.target.value,
    });
  };
  const movielinkHandler = (e) => {
    setMovieName({
      ...tour,
      movielink: e.target.value.split(","),
    });
  };
  const qualityHandler = (e) => {
    setMovieName({
      ...tour,
      quality: e.target.value,
    });
  };
  const tagsHandler = (e) => {
    setMovieName({
      ...tour,
      tags: e.target.value.split(","),
    });
  };
  const trailerHandler = (e) => {
    setMovieName({
      ...tour,
      trailer: e.target.value,
    });
  };
  const nameHandler = (e) => {
    setMovieName({
      ...tour,
      name: e.target.value,
    });
  };
  const typeHandler = (e) => {
    setDataLocation({
      ...dataLocation,
      type: e.target.value,
    });
  };
  const dayHandler = (e) => {
    setDataLocation({
      ...dataLocation,
      day: e.target.value,
    });
  };
  const descriptionHandler = (e) => {
    setDataLocation({
      ...dataLocation,
      description: e.target.value,
    });
  };
  const coordinatesHandler = (e) => {
    const temp = e.target.value.split(",");
    setDataLocation({
      ...dataLocation,
      coordinates: temp,
    });
  };

  const clearLoactionData = () => {
    setDataLocation({
      description: "",
      type: "",
      coordinates: [],
      day: 1,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // createStockItem(tour);
    // createMovie(tour);
    console.log(tour);
    // clearData();
  };
  const addLocation = () => {
    setLocation([...location, dataLocation]);
    console.log(location, "data loaction");
    clearLoactionData();
    // locationShow();
  };
  const locationShow = () => {
    return location.map((data) => (
      <>
        <Grid item xs={12} sm={3} spacing={2}>
          <Typography align="left">Day: {data.day}</Typography>
          <Typography>Type: {data.type}</Typography>
          <Typography>Description: {data.description}</Typography>
          <Typography>
            Coordinate: lat: {data.coordinates[0]} long: {data.coordinates[1]}
          </Typography>
        </Grid>
      </>
    ));
  };
  const removeDayHandler = () => {
    let temp = location;
    temp.pop();
    setLocation(temp);
    clearLoactionData();
    // locationShow();
    // location.pop();
    // addLocation();
  };

  return (
    <>
      <>
        <Container className={classes.cont}>
          <h2 className={classes.head}>Add Tour</h2>

          <hr />
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.name}
                  onChange={nameHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Duration"
                  name="Duration"
                  variant="outlined"
                  type="number"
                  required
                  fullWidth
                  value={tour.title}
                  onChange={titleHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Max Group Size"
                  name="Max Group Size"
                  variant="outlined"
                  required
                  type="number"
                  fullWidth
                  value={tour.creator}
                  onChange={creatorHandler}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Difficulty
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Difficulty"
                  >
                    <MenuItem value={10}>Easy</MenuItem>
                    <MenuItem value={21}>Medium</MenuItem>
                    <MenuItem value={22}>Hard</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl>
                  <InputLabel
                    id="demo-multiple-chip-label"
                    style={{ paddingLeft: "8px" }}
                  >
                    {" "}
                    Guide{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Guide"
                        style={{ paddingLeft: "20px" }}
                      />
                    }
                    renderValue={(selected) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                        }}
                      >
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Price"
                  name="Price"
                  variant="outlined"
                  required
                  fullWidth
                  number
                  value={tour.imbd}
                  onChange={imbdHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Summary"
                  name="Summary"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.release}
                  onChange={releaseHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Description"
                  name="Description"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.language}
                  onChange={languageHandler}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Ratings Average"
                  name="ratingsAverage"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.resolution}
                  onChange={resolutionHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Ratings Quantity"
                  name="ratingsQuantity"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.size}
                  onChange={sizeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Starting Date"
                  name="startingDate"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.quickstory}
                  onChange={quickstoryHandler}
                />
              </Grid>
            </Grid>
            <Typography align="left">Location</Typography>
            <Grid container spacing={2}>
              {!location.length ? "--" : locationShow()}
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} spacing={2}>
                <TextField
                  label="Day"
                  name="Day"
                  variant="outlined"
                  required
                  fullWidth
                  value={dataLocation.day}
                  onChange={dayHandler}
                />
                <TextField
                  label="Lat, long"
                  name="Coordinates"
                  variant="outlined"
                  required
                  fullWidth
                  value={dataLocation.coordinates}
                  onChange={coordinatesHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="description"
                  name="description"
                  variant="outlined"
                  required
                  fullWidth
                  value={dataLocation.description}
                  onChange={descriptionHandler}
                />
                <>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      autoWidth
                      label="Difficulty"
                      value={dataLocation.type}
                      onChange={typeHandler}
                    >
                      <MenuItem value={"point"}>Point</MenuItem>
                      <MenuItem value={"linear"}>Linear</MenuItem>
                    </Select>
                  </FormControl>
                </>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  type="submit"
                  halfWidth
                  variant="contained"
                  color="primary"
                  onClick={addLocation}
                >
                  Add Day
                </Button>

                {location.length == 0 ? (
                  ""
                ) : (
                  <Grid item xs={10} sm={6}>
                    <Button
                      type="submit"
                      halfWidth
                      variant="contained"
                      color="secondary"
                      onClick={removeDayHandler}
                    >
                      Remove Day
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Typography align="left">Starting Location</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Description"
                  name="Description"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.movielink}
                  onChange={movielinkHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Type"
                  name="Type"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.quality}
                  onChange={qualityHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="long , lat"
                  name="coordinates"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.quality}
                  onChange={qualityHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Address"
                  name="Address"
                  variant="outlined"
                  required
                  fullWidth
                  value={tour.quality}
                  onChange={qualityHandler}
                />
              </Grid>
            </Grid>
            <Typography align="left">Tour Image</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setMovieName({ ...tour, img1: base64 })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                {/* Image 1 */}
                {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setMovieName({ ...tour, img2: base64 })
                    }
                  /> */}
              </Grid>
              <Grid item xs={12} sm={3}>
                {/* Image 2 */}
                {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setMovieName({ ...tour, img3: base64 })
                    }
                  /> */}
              </Grid>
              <Grid item xs={12} sm={3}>
                {/* Image 3 */}
                {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setMovieName({ ...tour, img3: base64 })
                    }
                  /> */}
              </Grid>
            </Grid>
            {/* <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <TextareaAutosize
                  className="trailer"
                  type="textarea"
                  placeholder="Trailer"
                  style={{ width: 700 }}
                  minRows={5}
                  // fullWidth
                  value={tour.trailer}
                  onChange={trailerHandler}
                />
              </Grid>
            </Grid> */}
            {/* <br /> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <Button
                  type="submit"
                  halfWidth
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
          <br />

          <br />
          <br />

          {/* <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Button type="submit" variant="contained" color="primary">
                Remove
              </Button>
            </Grid>
          </Grid> */}

          <br />
        </Container>
      </>
    </>
  );
};

export default AddTour;
