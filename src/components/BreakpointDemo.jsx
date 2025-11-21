import { useMediaQuery, useTheme, Box, Typography, Paper } from "@mui/material";

function BreakpointDemo() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const getBreakpointName = () => {
    if (isXs) return "xs (Extra Small)";
    if (isSm) return "sm (Small)";
    if (isMd) return "md (Medium)";
    if (isLg) return "lg (Large) or xl (Extra Large)";
    return "Unknown";
  };

  return (
    <Paper sx={{ p: 2, mb: 4, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h6" gutterBottom>
        Current Breakpoint: {getBreakpointName()}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Typography variant="body2">xs: {isXs ? "✓" : "✗"}</Typography>
        <Typography variant="body2">sm: {isSm ? "✓" : "✗"}</Typography>
        <Typography variant="body2">md: {isMd ? "✓" : "✗"}</Typography>
        <Typography variant="body2">lg+: {isLg ? "✓" : "✗"}</Typography>
      </Box>
    </Paper>
  );
}

export default BreakpointDemo;
