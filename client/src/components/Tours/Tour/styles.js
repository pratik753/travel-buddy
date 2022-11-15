import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(5, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  head: {
    padding: "3px 0px",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    borderRadius: "3px",
    overflow: "hidden",
    boxShadow: "0 1.5rem 4rem rgba(0,0,0,0.1)",
    background: "#fff",
    transition: "0.3s all",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  cardPicture: {
    position: "relative",
    clipPath: "polygon(0 0, 100% 0%, 100% 83%, 0% 98%)",
    height: "12rem",
  },
  cardOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage:
      "-webkit-gradient( linear, left top, right bottom, from(#7dd56f), to(#28b487) )",
    backgroundImage: "linear-gradient(to right bottom, #7dd56f, #28b487)",
    opacity: "0.7",
  },
  headingText: {
    fontSize: " 3.2rem",
    textAlign: "right",
    position: "absolute",
    bottom: "5.5rem",
    right: "1rem",
    width: "70%",
    zIndex: "10",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "90",
    marginBottom: "75.08px",
  },
  headingSpan: {
    fontSize: "1.4rem",
    textAlign: "right",
    padding: "1rem 1.5rem",
    lineHeight: "1",
    boxDecorationBreak: "clone",
    backgroundImage:
      "linear-gradient( to bottom right, rgba(125, 213, 111, 0.85), rgba(40, 180, 135, 0.85) )",
  },
  subHeading: {
    fontSize: ".9rem",
    textTransform: "uppercase",
    fontWeight: "700",
    gridColumn: "1 / -1",
    color: "gray",
    fontFamily: "'Lato', sans-serif",
  },
  para: {
    gridColumn: "1 / -1",
    fontSize: "1rem",
    // fontStyle: "italic",
    // marginTop: "-1rem",
    marginBottom: "0.75rem",
    fontFamily: "'Lato', sans-serif",
  },
  iconDiv: {
    fontSize: ".9rem",
    display: "flex",
    alignItems: "center",
    height: "2rem",
    width: "14rem",
    fill: "#55c57a",
    padding: "5px",
  },
  iconColor: {
    fill: "#55c57a",
    margin: "2px",
  },
  mainIconDiv: {
    display: "flex",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardFooter: {
    backgroundColor: "#f7f7f7",
    padding: ".5rem 2rem",
    borderTop: "1px solid #f1f1f1",
    fontSize: "1.4rem",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridColumnGap: "1rem",
    gridRowGap: "1rem",
    marginTop: "auto",
    width: "100%",
  },
  price: {
    fontSize: "1.3rem",
    fontWeight: "700",
  },
  perPerson: {
    fontSize: ".9rem",
    color: "#999",
  },
  paraFooter: {
    marginTop: "2.16px",
    marginBottom: "9.16px",
    lineHeight: "1.8",
  },
});
