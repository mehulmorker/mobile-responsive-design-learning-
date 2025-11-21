import { Box } from "@mui/material";

function FluidSpacing({ children, ...props }) {
  return (
    <Box
      sx={{
        padding: {
          xs: "clamp(16px, 4vw, 24px)",
          md: "clamp(24px, 3vw, 40px)",
        },
        margin: {
          xs: "clamp(8px, 2vw, 16px)",
          md: "clamp(16px, 2.5vw, 32px)",
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default FluidSpacing;
