import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Drawer,
  SwipeableDrawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./App.css";
import BreakpointDemo from "./components/BreakpointDemo";
import Navigation from "./components/Navigation";
import ResponsiveImage from "./components/ResponsiveImage";
import ResponsiveImageWithSrcset from "./components/ResponsiveImageWithSrcset";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box>
      {/* Navigation - Fixed width, no mobile adaptation */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: { xs: 1, md: 0 }, mr: { xs: 0, md: 4 } }}
          >
            My Website
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              gap: 1,
            }}
          >
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit" sx={{ marginLeft: "auto" }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Remove Below Once everything is completed */}
      <BreakpointDemo />

      {/* Mobile Drawer */}
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
          onKeyDown: (e) => {
            if (e.key === "Escape") {
              handleDrawerClose();
            }
          },
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: 280, sm: 320 },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
            minHeight: 64,
          }}
        >
          <Typography variant="h6">Menu</Typography>
          <IconButton
            onClick={handleDrawerClose}
            aria-label="close drawer"
            edge="end"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Navigation onItemClick={handleDrawerClose} />
      </SwipeableDrawer>

      {/* Hero Section - Fixed width container */}
      <Container
        maxWidth="lg"
        sx={{ padding: { xs: "40px 16px", sm: "50px 20px", md: "60px 20px" } }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "800px" },
            margin: "0 auto",
            textAlign: { xs: "left", sm: "center" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              marginBottom: { xs: "16px", sm: "20px", md: "24px" },
              fontWeight: 600,
            }}
          >
            Welcome to Our Platform
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: { xs: "24px", sm: "28px", md: "30px" },
              maxWidth: { xs: "100%", md: "700px" },
              mx: { xs: 0, md: "auto" },
            }}
          >
            This is a demonstration of a non-responsive design. Notice how the
            content overflows on mobile devices, the navigation is cramped, and
            the layout doesn't adapt to smaller screens.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "stretch", sm: "center" },
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                width: { xs: "100%", sm: "auto" },
                padding: { xs: "12px 24px", md: "12px 40px" },
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Features Grid - Fixed columns, no stacking */}
      <Container maxWidth="lg" sx={{ padding: "40px 20px" }}>
        <Typography
          variant="h3"
          sx={{ fontSize: "36px", marginBottom: "40px", textAlign: "center" }}
        >
          Our Features
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ width: "100%", height: { xs: "auto", md: "400px" } }}>
              <ResponsiveImageWithSrcset
                srcSet="https://picsum.photos/id/235/400/300 400w, https://picsum.photos/id/235/800/600 800w, https://picsum.photos/id/235/1200/900 1200w"
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                alt="Feature 1"
                aspectRatio="4/3"
                objectFit="cover"
                lazy={true}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    marginBottom: { xs: "8px", sm: "10px", md: "12px" },
                    fontWeight: 500,
                  }}
                >
                  Feature One
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: { xs: 1.5, md: 1.6 } }}
                >
                  This is a description of our first feature. It contains
                  important information that users need to know. The text might
                  be too small on mobile devices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ width: "100%", height: { xs: "auto", md: "400px" } }}>
              <ResponsiveImageWithSrcset
                srcSet="https://picsum.photos/id/236/400/300 400w, https://picsum.photos/id/236/800/600 800w, https://picsum.photos/id/236/1200/900 1200w"
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                alt="Feature 2"
                aspectRatio="4/3"
                objectFit="cover"
                lazy={true}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    marginBottom: { xs: "8px", sm: "10px", md: "12px" },
                    fontWeight: 500,
                  }}
                >
                  Feature Two
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: { xs: 1.5, md: 1.6 } }}
                >
                  This is a description of our second feature. Notice how the
                  cards maintain their fixed height regardless of screen size.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ width: "100%", height: { xs: "auto", md: "400px" } }}>
              <ResponsiveImageWithSrcset
                srcSet="https://picsum.photos/id/237/400/300 400w, https://picsum.photos/id/237/800/600 800w, https://picsum.photos/id/237/1200/900 1200w"
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                alt="Feature 3"
                aspectRatio="4/3"
                objectFit="cover"
                lazy={true}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    marginBottom: { xs: "8px", sm: "10px", md: "12px" },
                    fontWeight: 500,
                  }}
                >
                  Feature Three
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: { xs: 1.5, md: 1.6 } }}
                >
                  This is a description of our third feature. The layout doesn't
                  adapt to smaller screens.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Data Table - No mobile adaptation */}
      <Container maxWidth="lg" sx={{ padding: "40px 20px" }}>
        <Typography
          variant="h3"
          sx={{ fontSize: "36px", marginBottom: "30px" }}
        >
          Data Table
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "16px", fontWeight: "bold", padding: "16px" }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", fontWeight: "bold", padding: "16px" }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", fontWeight: "bold", padding: "16px" }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", fontWeight: "bold", padding: "16px" }}
                >
                  Role
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", fontWeight: "bold", padding: "16px" }}
                >
                  Department
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", fontWeight: "bold", padding: "16px" }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3, 4, 5].map((row) => (
                <TableRow key={row}>
                  <TableCell sx={{ padding: "16px" }}>{row}</TableCell>
                  <TableCell sx={{ padding: "16px" }}>John Doe {row}</TableCell>
                  <TableCell sx={{ padding: "16px" }}>
                    john.doe{row}@example.com
                  </TableCell>
                  <TableCell sx={{ padding: "16px" }}>Developer</TableCell>
                  <TableCell sx={{ padding: "16px" }}>Engineering</TableCell>
                  <TableCell sx={{ padding: "16px" }}>Active</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Contact Form - Fixed width inputs */}
      <Container
        maxWidth="lg"
        sx={{ padding: "40px 20px", backgroundColor: "#f5f5f5" }}
      >
        <Box sx={{ maxWidth: "600px", margin: "0 auto" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: "36px", marginBottom: "30px", textAlign: "center" }}
          >
            Contact Us
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputBase-input": { fontSize: "16px", padding: "14px" },
              }}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputBase-input": { fontSize: "16px", padding: "14px" },
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={6}
              fullWidth
              sx={{
                "& .MuiInputBase-input": { fontSize: "16px", padding: "14px" },
              }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: "14px 50px",
                fontSize: "18px",
                alignSelf: "center",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Footer - Fixed layout */}
      <Box
        sx={{
          backgroundColor: "#333",
          color: "white",
          padding: "40px 20px",
          marginTop: "60px",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  marginBottom: { xs: "16px", md: "20px" },
                  fontWeight: 500,
                }}
              >
                Company Info
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: { xs: "6px", md: "8px" },
                  lineHeight: 1.6,
                }}
              >
                123 Main Street
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: { xs: "6px", md: "8px" },
                  lineHeight: 1.6,
                }}
              >
                City, State 12345
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px" }}>
                Phone: (555) 123-4567
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ marginBottom: "20px", fontSize: "20px" }}
              >
                Quick Links
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: { xs: "6px", md: "8px" },
                  lineHeight: 1.6,
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: { xs: "6px", md: "8px" },
                  lineHeight: 1.6,
                }}
              >
                Terms of Service
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px" }}>
                FAQ
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ marginBottom: "20px", fontSize: "20px" }}
              >
                Follow Us
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: { xs: "6px", md: "8px" },
                  lineHeight: 1.6,
                }}
              >
                Facebook
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: { xs: "6px", md: "8px" },
                  lineHeight: 1.6,
                }}
              >
                Twitter
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px" }}>
                LinkedIn
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
