import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    clipPath: "polygon(0 0, 100% 0, 100% 75vh, 0 100%)",
    height: "95vh",

    backgroundSize: "cover",
    backgroundPosition: "top",
    position: "relative",
  },
  logoimage: {
    // height: "60",
    margin: "3rem",
  },
  textBox: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  primaryHeading: {
    color: "#fff",
    textTransform: "uppercase",
    backfaceVisibility: "hidden",
    marginBottom: "6rem",
  },
  sectionAbout: {
    backgroundColor: "#f7f7f7",
    padding: "12rem 3rem",
    marginTop: "-20vh",
  },
  sectionCenterText: {
    marginBottom: "8rem !important",
    textAlign: "center !important",
    background: "aliceblue",
    opacity: "0.8",

    margin: "0 10rem",

    borderRadius: "7rem",
  },
  secondaryHeading: {
    fontSize: "2.4rem",
    textTransform: "uppercase",
    fontWeight: "700",
    display: "inline-block",
    background: "-webkit-linear-gradient(#7ed56f, #28b485)",
    backgroundClip: "text",
    textFillColor: "transparent",
    // backgroundImage: "linear-gradient(to right, #7ed56f, #28b485)",
    // zIndex: 2,
    // color: "transparent",
    letterSpacing: ".2rem",
    transition: "all .2s",
    "&:hover": {
      transform: "skewY(2deg) skewX(15deg) scale(1.1)",
      textShadow: "0.5rem 1rem 2rem rgba(0,0,0,0.2)",
    },
  },
  smallHeading: {
    // color: "green",
    fontSize: "1.1rem",
    fontWeight: "700",
    textTransform: "uppercase",
    fontFamily: "Lato, sans-serif",
    fontWeight: "510",
    lineHeight: "1.7",
    color: "#777",
    whiteSpace: "break-spaces",
  },
  paragraph: {
    fontSize: ".9rem",
    whiteSpace: "break-spaces",
    //     font-family: "Lato", sans-serif,
    // font-weight: 400,
    // line-height: 1.7,
    color: "#777",
  },
  threeImageDiv: {
    position: "relative",
  },
  threeImage: {
    left: 0,
    top: "-2rem",
    width: "55%",
    boxShadow: "0 1.5rem 4rem rgba(0,0,0,0.4)",
    borderRadius: "2px",
    position: "absolute",
    zIndex: 10,
    transition: "all .2s",
    outlineOffset: "2rem",
    "&:hover": {
      outline: " 1.5rem solid #55c57a",
      transform: "scale(1.05) translateY(-0.5rem)",
      boxShadow: "0 2.5rem 4rem rgba(0,0,0,0.5)",
      zIndex: 20,
    },
  },
  twoImage: {
    left: "9rem",
    top: "11rem",
    width: "55%",
    boxShadow: "0 1.5rem 4rem rgba(0,0,0,0.4)",
    borderRadius: "2px",
    position: "absolute",
    zIndex: 10,
    transition: "all .2s",
    outlineOffset: "2rem",
    "&:hover": {
      outline: " 1.5rem solid #55c57a",
      transform: "scale(1.05) translateY(-0.5rem)",
      boxShadow: "0 2.5rem 4rem rgba(0,0,0,0.5)",
      zIndex: 20,
    },
  },
  oneImage: {
    left: "14rem",
    top: "-7rem",
    width: "55%",
    boxShadow: "0 1.5rem 4rem rgba(0,0,0,0.4)",
    borderRadius: "2px",
    position: "absolute",
    zIndex: 11,
    transition: "all .2s",
    outlineOffset: "2rem",
    "&:hover": {
      outline: " 1.5rem solid #55c57a",
      transform: "scale(1.05) translateY(-0.5rem)",
      boxShadow: "0 2.5rem 4rem rgba(0,0,0,0.5)",
      zIndex: 20,
    },
  },
  sectionFeature: {
    padding: "20rem 0",

    // background-image: linear-gradient(to right bottom, rgba(126,213,111,0.8), rgba(40,180,133,0.8)),url(../img/nat-4.jpg),
    backgroundSize: "cover",
    // -webkit-transform: skewY(-7deg),
    transform: "skewY(-7deg)",
    marginTop: "-6rem",
  },
  rowFeature: {
    transform: "skewY(7deg)",
  },
  featureBox: {
    backgroundColor: "rgba(255,255,255,0.8)",
    fontSize: "1.5rem",
    padding: "2.5rem",
    textAlign: "center",
    borderRadius: "3px",
    // -webkit-box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15),
    boxShadow: "0 1.5rem 4rem rgba(0,0,0,0.15)",
    // -webkit-transition: -webkit-transform .3s,
    // transition: -webkit-transform .3s,
    transition: " transform .3s",
    margin: "1rem",
  },
  iconFeature: {
    fontSize: "6rem",
    marginBottom: ".5rem",
    display: "inline-block",
    // backgroundImage: "linear-gradient(to right, #7ed56f, #28b485)",

    color: " #7ed56f",
  },

  sectionReview: {
    position: "relative",
    padding: "15rem 0",
    paddingBottom: "7rem",
    // marginTop: "5rem",
  },
  bgVideo: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    zIndex: "-1",
    opacity: ".65",
    overflow: "hidden",
  },
  whiteBg: {
    background: "#f7f7f7",
    paddingBottom: "5.1rem",
  },
  row: {
    maxWidth: "114rem",
    margin: "0 auto",
    // margin-bottom: 0px,
  },
  story: {
    width: "58%",
    margin: "1.5rem 2.6rem",
    // -webkit-box-shadow: 0 3rem 6rem rgba(0,0,0,0.1),
    boxShadow: "0 3rem 6rem rgba(0,0,0,0.1)",
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: "3px",
    padding: " 3rem",

    paddingLeft: "5rem",
    paddingTop: "2rem",
    fontSize: "1rem",
    // -webkit-transform: skewX(-12deg),
    transform: "skewX(-12deg)",
    // "&:hover story__caption": {
    //   opacity: "1",
    //   transform: "translate(-50%, -50%)",
    // },
  },
  story__shape: {
    width: "12rem",
    height: "12rem",
    float: "left",
    transform: "translateX(-3rem) skewX(12deg)",
    position: "relative",
    overflow: "hidden",
    borderRadius: "50%",
    marginTop: "-21px",
  },
  story__img: {
    height: " 100%",
    transform: "translateX(-4rem) scale(1.4)",
    backfaceVisibility: "hidden",
    transition: "all .5s",
  },
  story__caption: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 20%)",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "1.7rem",
    textAlign: "center",
    opacity: "0",
    transition: "all .5s",
    backfaceVisibility: "hidden",
    // .story:hover .story__caption {
    //   opacity: 1;
    //   -webkit-transform: translate(-50%, -50%);
    //   transform: "translate(-50%, -50%)",
    // },
    "&:hover": {
      opacity: "1",
      transform: "translate(-50%, -50%)",
    },
  },
  story__text: {
    transform: "skewX(12deg)",
  },
  sectionBook: {
    padding: "7rem 2rem",
    // background-image: -webkit-gradient(linear, left top, right bottom, from(#7ed56f), to(#28b485));
    backgroundImage: "linear-gradient(to right bottom, #7ed56f, #28b485)",
  },
  book: {
    backgroundImage:
      "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%), url('https://natours.netlify.app/img/nat-10.jpg')",
    backgroundSize: "100%",
    borderRadius: "3px",
    // -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
    boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.2)",
  },
  book__form: {
    width: "50%",
    padding: "6rem",
    paddingTop: "2rem",
  },
  form: {},
  headingMedium: {},
  headingSecondary: {},
  imgStyle: {
    // display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
}));
