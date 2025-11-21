import React from "react";
import { useMediaQuery, useTheme, Typography } from "@mui/material";

export default function ResponsiveContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {isMobile && <Typography>Mobile View</Typography>}
      {isTablet && <Typography>Tablet View</Typography>}
      {isDesktop && <Typography>Desktop View</Typography>}
    </>
  );
}
