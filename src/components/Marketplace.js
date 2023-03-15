import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "./ui/ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";
import ReactPlayer from "react-player";

import data from "./../apis/local";
import CallToAction from "./ui/CallToAction";
import animationData from "./../animations/landinganimation/data";
import customSoftwareicon from "./../assets/Custom Software Icon.svg";
import mobileAppsIcon from "./../assets/mobileIcon.svg";
import websiteIcon from "./../assets/websiteIcon.svg";
import revolutionBackground from "./../assets/repeatingBackground.svg";
import infoBackground from "./../assets/infoBackground.svg";
import firstcoverimage from "./../logistic_assets/cover_image_1.png";
import secondcoverimage from "./../logistic_assets/cover_image2.png";
import boathaulage from "./../logistic_assets/boat_haulage.png";
import boxtruck from "./../logistic_assets/box_truck.png";
import carcarriertrailer from "./../logistic_assets/Car_Carrier_Trailer.png";
import cementtruck from "./../logistic_assets/Cement_Truck.png";
import chillertruck from "./../logistic_assets/Chiller_Trucks.png";
import flatbedtrailer from "./../logistic_assets/Flat_bed_Trailer.png";
import livestocktruck from "./../logistic_assets/Livestock_Trucks.png";
import loggingtruck from "./../logistic_assets/Logging_Trucks.png";
import tanker from "./../logistic_assets/Tankers.png";
import tippertruck from "./../logistic_assets/Tipper_Trucks.png";
import towtruck from "./../logistic_assets/Tow_Truck.png";
import cranetruck from "./../logistic_assets/crane truck2.png";
import ProductCard from "./ProductCard";
import background from "./../logistic_assets/cover_image_1.png";
import { Category } from "@material-ui/icons";
import history from "../history";
import AboutUsFormContainer from "./aboutus/AboutUsFormContainer";
import ContactUsContainerForm from "./contactus/ContactUsContainerForm";
import BecomePartnerFormContainer from "./partner/BecomePartnerFormContainer";
//import mobileBackground from "./../../assets/mobileBackground.jpg";
import heroVideo from "./../assets/video/background_video.mp4";
import heroVideoMobile from "./../assets/video/background_video_mobile.mp4";
import AllProductsCategoriesCard from "./homePageCards/AllProductsCategoriesCard";
import RequestForVendorsCard from "./homePageCards/RequestForVendorsCard";
import RequestForLogisticsCard from "./homePageCards/RequestForLogisticsCard";
import FeatureProductsPage from "./homePageCards/FeatureProductsPage";
import PromotionalProductsPage from "./homePageCards/PromotionalProductsPage";
import Categories from "./Categories";
import VendorPartner from "./VendorPartner";
import LogisticsPartner from "./LogisticsPartner";
import UpperFooter from "./ui/UpperFooter";

import { baseURL } from "./../apis/util";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    // height: "100%",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "99rem",
    height: "42rem",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  animation: {
    // maxWidth: "100em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 250,
    marginRight: 10,
    marginLeft: 130,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
  },
  estimateButtonMobile: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 220,
    marginRight: 10,
    marginLeft: 20,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
  },
  buttonContainer: {
    marginTop: "3.9em",
    marginLeft: "6.9em",
  },
  buttonContainerMobile: {
    marginTop: "4.2em",
    marginLeft: "3.5em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 45,
    width: 145,
  },
  visitPartnerButtonsite: {
    ...theme.typography.partnerButton,
    fontSize: "0.9rem",
    height: 45,
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    border: `2px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    marginLeft: "2px",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  footer: {
    width: "100%",
    marginTop: "10rem",
  },
  category: {
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  vendor: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  logistics: {
    marginTop: "15rem",
    marginBottom: "5rem",
  },
  promotion: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  features: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
}));

const Marketplace = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [contactUsOpen, setContactUsOpen] = useState(false);
  const [becomePartnerOpen, setBecomePartnerOpen] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidyMid slice",
    },
  };

  const handleBecomeAPartnerOpenDialogBox = () => {
    setBecomePartnerOpen(false);
  };

  const handleSuccessfulBecomeAPartnerOpenDialogBoxWithSnackbar = () => {
    setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: "Application successfully submitted",
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedBecomeAPartnerOpenDialogBoxWithSnackbar = () => {
    setAlert({
      open: true,
      message: "Something went wrong somewhere",
      backgroundColor: "#FF3232",
    });
    setBecomePartnerOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      //data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await data.get("/categories");
      const workingData = response.data.data.data;
      workingData.map((category) => {
        allData.push({
          id: category._id,
          name: category.name,
          image: category.image || " ",
          description: category.description || " ",
        });
      });
      setCategoryList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  //const imageUrl = `${baseURL}/images/categories/${image}`;

  const categories = [
    {
      title: "Flat-bed Trailer",
      description: "This is the Crane Trucks/Mobile Cranes",
      image: flatbedtrailer,
      alt: "Flat-bed Trailer",
    },
    {
      title: "Crane Trucks/Mobile Cranes",
      description: "This is the Flat-Bed Trailers",
      image: cranetruck,
      alt: "Crane Trucks",
    },
    {
      title: "Tow Truck",
      description: "This is the Tow Truck",
      image: towtruck,
      alt: "Tow Truck",
    },
    {
      title: "Tankers",
      description: "This is the Tankers",
      image: tanker,
      alt: "Tankers",
    },
    {
      title: "Tipper Trucks",
      description: "This is the Tipper Trucks",
      image: tippertruck,
      alt: "Tipper Trucks",
    },
    {
      title: "Logging Trucks",
      description: "This is the Logging Trucks",
      image: loggingtruck,
      alt: "Logging Trucks",
    },
    {
      title: "Car Carrier Trailer",
      description: "This is the Car Carrier Trailer",
      image: carcarriertrailer,
      alt: "Car Carrier Trailer",
    },
    {
      title: "Cement Truck",
      description: "This is the Cement Truck",
      image: cementtruck,
      alt: "Cement Truck",
    },
    {
      title: "Boat Haulage",
      description: "This is the Boat Haulage",
      image: boathaulage,
      alt: "Boat Haulage",
    },
    {
      title: "Chiller Trucks/Reefers",
      description: "This is the Chiller Trucks/Reefers",
      image: chillertruck,
      alt: "Chiller Trucks/Reefers",
    },
    {
      title: "Box Truck",
      description: "This is the Box Truck",
      image: boxtruck,
      alt: "Box Truck",
    },
    {
      title: "Livestock Trucks",
      description: "This is the Livestock Trucks",
      image: livestocktruck,
      alt: "Livestock Trucks",
    },
  ];

  const Str = require("@supercharge/strings");

  const categoriesList = matchesMD ? (
    <React.Fragment>
      {
        <Grid container direction="row">
          {categoryList.map((category, index) => (
            <ProductCard
              title={category.name}
              key={`${category.id}${index}`}
              description={Str(category.description).limit(500, "...").get()}
              //description={category.description}
              image={category.image}
              categoryId={category.id}
              token={props.token}
              userId={props.userId}
              setToken={props.setToken}
              setUserId={props.setUserId}
            />
          ))}
        </Grid>
      }
    </React.Fragment>
  ) : (
    <React.Fragment>
      {
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {categoryList.map((category, index) => (
            <ProductCard
              title={category.name}
              key={`${category.id}${index}`}
              description={Str(category.description).limit(500, "...").get()}
              //description={category.description}
              image={category.image}
              categoryId={category.id}
              token={props.token}
              userId={props.userId}
              setToken={props.setToken}
              setUserId={props.setUserId}
            />
          ))}
        </Grid>
      }
    </React.Fragment>
  );

  return (
    <>
      {/* <Grid container direction="row" className={classes.mainContainer}> */}
      <Grid container direction="row" className={classes.root}>
        {/* <section className={classes.root}> */}
        <Grid
          container
          alignItems="center"
          //className={classes.background}
          justifyContent={matchesSM ? "center" : "space-between"}
          direction={matchesSM ? "column" : "row"}
          style={{ marginTop: -100 }}
        >
          <Grid item>
            {" "}
            {/*..... HERO BLOCK.... */}
            <Grid
              container
              //justifyContent="flex-end"
              //alignItems="center"
              direction="row"
            >
              <ReactPlayer
                url={matchesSM ? heroVideoMobile : heroVideo}
                playing
                loop
                muted
                // width="100%"
                // height="100%"
                width="99rem"
                height="49rem"
              />
              {/* <div className={classes.overlay}> */}
              {/* <img
                  src={logo}
                  alt="Udaraa Marketplace"
                  width={180}
                  height={150}
                /> */}
              <Box
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                //justifyContent="center"
                //alignItems="center"
                color="#fff"
              >
                <Grid sm item className={classes.heroTextContainer}>
                  {matchesMD ? (
                    <Typography></Typography>
                  ) : (
                    // <Typography
                    //   variant={matchesSM ? "subtitle2" : "h2"}
                    //   align="left"
                    //   style={{ marginTop: "16rem" }}
                    //   //justifyContent="center"
                    //   //alignItems="center"
                    // >
                    //   <span
                    //     style={{
                    //       marginLeft: matchesSM ? 20 : 5,
                    //     }}
                    //   >
                    //     {" "}
                    //     E-Shield Africa is an online/e-commerce
                    //     Marketplace(B2B). <br />
                    //   </span>{" "}
                    //   <span style={{ marginLeft: matchesSM ? 20 : 20 }}>
                    //     Our business is to provide a trusted and unified online
                    //   </span>
                    //   <br />
                    //   <span style={{ marginLeft: matchesSM ? 20 : 50 }}>
                    //     portal for multiple manufacturers, distributors
                    //   </span>
                    //   <br />
                    //   <span style={{ marginLeft: matchesSM ? 20 : 130 }}>
                    //     and vendors. We connect them to
                    //   </span>
                    //   <br />
                    //   <span style={{ marginLeft: matchesSM ? 20 : 130 }}>
                    //     retailers for trade and services.
                    //   </span>
                    // </Typography>
                    // <Typography></Typography>
                    <Typography
                      variant={matchesSM ? "subtitle2" : "h2"}
                      align="left"
                      style={{ marginTop: "16rem", fontSize: "1.2rem" }}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <span
                        style={{
                          marginLeft: matchesSM ? 20 : 5,
                        }}
                      >
                        {" "}
                        E-Shield Africa is an online/e-commerce <br />
                      </span>{" "}
                      <span style={{ marginLeft: matchesSM ? 20 : 20 }}>
                        Marketplace(B2B). Our business is to provide
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 20 : 50 }}>
                        a trusted and unified online portal for multiple
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 20 : 130 }}>
                        manufacturers, distributors and vendors.
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 20 : 230 }}>
                        We connect them to retailers for
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 20 : 230 }}>
                        trade and services.
                      </span>
                    </Typography>
                  )}

                  {matchesMD ? (
                    <Grid
                      container
                      justifyContent="flex-start"
                      direction={matchesSM ? "column" : "row"}
                      className={classes.buttonContainer}
                    >
                      {/* <Grid item>
                        <Button
                          component={Link}
                          // to="/mobileapps"
                          to={`/categories`}
                          varaint="outlined"
                          className={classes.estimateButton}
                          onClick={() => <Categories token={props.token} />}
                        >
                          See Our Product Categories
                        </Button>
                      </Grid> */}
                    </Grid>
                  ) : (
                    <Typography>Just to be suire</Typography>
                    // <Grid
                    //   container
                    //   justifyContent="flex-start"
                    //   direction={matchesSM ? "column" : "row"}
                    //   className={classes.buttonContainerMobile}
                    // >
                    //   {/* <Grid item>
                    //     <Button
                    //       component={Link}
                    //       // to="/mobileapps"
                    //       to={`/categories`}
                    //       varaint="outlined"
                    //       className={classes.estimateButtonMobile}
                    //       onClick={() => <Categories token={props.token} />}
                    //     >
                    //       See Our Product Categories
                    //     </Button>
                    //   </Grid> */}
                    // </Grid>
                  )}
                </Grid>
              </Box>
              {/* </div> */}
              {/* <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        {/* </section> */}
        {/* <Grid item>{categoriesList}</Grid> */}
        {/* <Grid item className={classes.category}>
          <AllProductsCategoriesCard />
        </Grid> */}
        <Grid item className={classes.features}>
          <FeatureProductsPage />
        </Grid>

        {/* <Grid item>
          <RequestForVendorsCard className={classes.vendor} />
        </Grid> */}
        {/* <Grid item>
          <PromotionalProductsPage className={classes.promotion} />
        </Grid> */}
        {/* <Grid item>
          <RequestForLogisticsCard className={classes.logistics} />
        </Grid> */}
        {/* <Grid item className={classes.footer}>
          <UpperFooter />
        </Grid> */}
      </Grid>
    </>
  );
};

export default Marketplace;
