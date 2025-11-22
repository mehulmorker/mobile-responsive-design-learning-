import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function Navigation({ onItemClick }) {
  return (
    <List role="navigation" aria-label="Main navigation">
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            onClick={onItemClick}
            href={item.href}
            sx={{
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Navigation;


