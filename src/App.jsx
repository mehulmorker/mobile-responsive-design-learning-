import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
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
} from "@mui/material";
import "./App.css";
import BreakpointDemo from "./components/BreakpointDemo";

function App() {
  return (
    <Box>
      {/* Navigation - Fixed width, no mobile adaptation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 0, marginRight: "40px" }}>
            My Website
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit" sx={{ marginLeft: "auto" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <BreakpointDemo />

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
              <CardMedia
                component="img"
                sx={{
                  height: { xs: 180, sm: 200, md: 200 },
                  objectFit: "cover",
                }}
                image="https://picsum.photos/id/235/400/200"
                alt="Feature 1"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    marginBottom: { xs: "8px", md: "10px" },
                  }}
                >
                  Feature One
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "14px", md: "14px" } }}
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
              <CardMedia
                component="img"
                sx={{
                  height: { xs: 180, sm: 200, md: 200 },
                  objectFit: "cover",
                }}
                image="https://picsum.photos/id/236/400/200"
                alt="Feature 2"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    marginBottom: { xs: "8px", md: "10px" },
                  }}
                >
                  Feature Two
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "14px", md: "14px" } }}
                >
                  This is a description of our second feature. Notice how the
                  cards maintain their fixed height regardless of screen size.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ width: "100%", height: { xs: "auto", md: "400px" } }}>
              <CardMedia
                component="img"
                sx={{
                  height: { xs: 180, sm: 200, md: 200 },
                  objectFit: "cover",
                }}
                image="https://picsum.photos/id/237/400/200"
                alt="Feature 3"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    marginBottom: { xs: "8px", md: "10px" },
                  }}
                >
                  Feature Three
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "14px", md: "14px" } }}
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
                sx={{ marginBottom: "20px", fontSize: "20px" }}
              >
                Company Info
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", marginBottom: "8px" }}
              >
                123 Main Street
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", marginBottom: "8px" }}
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
                sx={{ fontSize: "14px", marginBottom: "8px" }}
              >
                Privacy Policy
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", marginBottom: "8px" }}
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
                sx={{ fontSize: "14px", marginBottom: "8px" }}
              >
                Facebook
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", marginBottom: "8px" }}
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
