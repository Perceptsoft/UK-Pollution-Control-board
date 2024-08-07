import { Box, Paper, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const UserInfoItems = [
  {
    title: "General Information",
    icon: "/assets/general_information.png",
    href: "/general-information",
  },
  {
    title: "Notice for General Environment Improvement",
    icon: "/assets/notice_general_environment_improvement.png",
    href: "/notice-for-general-environment-improvement",
  },
  {
    title: "Uttarakhand Right to service Act, 2011",
    icon: "/assets/uttarakhand_right_to_service_Act.png",
    href: "/uttarakhand-right-to-service-Act-2011",
  },
  {
    title: "steps for covid 19 BMW Android Based App",
    icon: "/assets/steps_for_covid_19_BMW.png",
    href: "/steps-for-covid-19-bmw-android-based-app",
  },
  {
    title:
      "Combustion Temperatures of Common Biomedical Waste Treatment and Disposal Facilities",
    icon: "/assets/Combustion_temperature_of_common_biomedical.png",
    href: "/combustion-temperatures-of-common-biomedical-waste-treatment-and-disposal-facilities",
  },
  {
    title: "SUP Grievance Portal of Central Government",
    icon: "/assets/SUP_grievance_portal.png",
    href: "/sup-grievance-portal-of-central-government",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    partialVisibilityGutter: 30,
    partialVisible: true,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 30,
    partialVisible: true,
  },
};

const UsefulInfo = () => {
  return (
    <Box padding={{ lg: 2, xs: 0 }}>
      <Typography
        variant="h5"
        sx={{
          my: 3,
          fontWeight: "600",
          fontSize: { lg: "1.8rem", xs: "1rem" },
          color: "primary.main",
        }}
      >
        User Information
      </Typography>

      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        draggable
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={true}
        rewindWithAnimation={false}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
        swipeable
      >
        {UserInfoItems.map(({ title, icon, href }, index) => (
          <Link to={href} key={index}>
            <Paper
              elevation={24}
              sx={{
                width: { lg: "190px", xs: "150px" },
                height: { lg: "190px", xs: "150px" },
                mb: 4,
                boxShadow: "none",
                py: 2,
                bgcolor: "background.lightGreen",
                borderRadius: "10px",
                display: "flex",
                flexWrap: "nowrap",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { lg: "70px", xs: "50px" },
                  height: { lg: "70px", xs: "50px" },
                }}
              >
                <img
                  src={icon}
                  alt="link_logo"
                  loading="lazy"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                align="center"
                sx={{
                  fontWeight: "530",
                  fontSize: { lg: "0.9rem", xs: "0.7rem" },
                  px: 1,
                  color: "#393838",
                }}
              >
                {title}
              </Typography>
            </Paper>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default UsefulInfo;
