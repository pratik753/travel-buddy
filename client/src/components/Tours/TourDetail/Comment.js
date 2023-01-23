import * as React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import useStyles from "./styles";
import OneComment from "./OneComment";

export default function Comment() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
      <Tabs
        // value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        style={{
          zIndex: "44",
          backgroundImage:
            "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, transparent 50%), url('https://natours.netlify.app/img/nat-10.jpg')",
        }}
      >
        <OneComment />
        <OneComment />
        <OneComment />
        <OneComment />
      </Tabs>
    </Box>
  );
}
