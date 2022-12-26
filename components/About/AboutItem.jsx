import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutItem = ({ img, title }) => {
  return (
    <Grid
      container
      sx={{
        height: { xs: "216px", lg: "285px" },
        boxShadow: "0px 1px 15px rgba(22, 25, 44, 0.18)",
        borderRadius: "10px",
        maxWidth: {
          lg: "234px",
        },
        justifyContent: "center"
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Box sx={{
          width: {xs: "81px", lg: "120px"},
          height: {xs: "81px", lg: "120px"},
          position: "relative",
          maxHeight: {lg: "180px"},
          mt: {xs: "34px", lg: "38px"}
        }}>
          <Image src={img} alt={title} fill={true} />
        </Box>
      </Grid>
        <Typography
          variant="span"
          sx={{
            display: "inline-block",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "22px",
            mb: "100%",
            mt: {xs: "26px", lg: "45px"}
          }}
        >
          {title}
        </Typography>
    </Grid>
  );
};

export default AboutItem;
