import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ThemeToggle({ mode, onToggle }) {
  return (
    <Tooltip title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
      <IconButton
        onClick={onToggle}
        aria-label="toggle theme"
        color="inherit"
        sx={{
          minWidth: "44px",
          minHeight: "44px",
        }}
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggle;

