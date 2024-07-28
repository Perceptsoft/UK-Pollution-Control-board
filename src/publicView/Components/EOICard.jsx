import { Box,  Paper, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const EOICard = () => {
  const UserInfoItems = [
    {
      title: "Addendum to Expression of Interest (EOI) ",
      icon: "/assets/EOI.png",
      href: "addendum-to-expression-of-interest",
    },
    // Add more items as necessary
  ];

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
        Expression of Interest (EOI)
      </Typography>
      <Stack
        direction={"row"}
        spacing={4}
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {UserInfoItems.map(({ title, icon, href },index) => (
          <Link to={href} key={index}>
            <Paper
              key={title}
              elevation={24}
              sx={{
                width: { lg: "190px", xs: "150px" },
                height: { lg: "190px", xs: "150px" },
                m: { lg: 0, xs: 5 },
                boxShadow: "none",
                py: 2,
                bgcolor: "background.lightGreen",
                borderRadius: "10px",
                display: "flex",
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
                  alt={"link_logo"}
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
      </Stack>
    </Box>
  );
};

export default EOICard;
