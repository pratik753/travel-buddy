import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    // display: "flex",
    alignItems: "center",
    background: "#f7f7f7",
    // borderRadius: 15,
    padding: "30px 67px;",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  gridStyle: {
    maxWidth: "120rem",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "7rem",
  },
}));
