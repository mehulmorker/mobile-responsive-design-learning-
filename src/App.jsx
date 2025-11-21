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

      {/* Hero Section - Fixed width container */}
      <Container maxWidth="lg" sx={{ padding: "60px 20px" }}>
        <Box sx={{ width: "800px", margin: "0 auto" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: "48px", marginBottom: "20px" }}
          >
            Welcome to Our Platform
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", marginBottom: "30px", width: "700px" }}
          >
            This is a demonstration of a non-responsive design. Notice how the
            content overflows on mobile devices, the navigation is cramped, and
            the layout doesn't adapt to smaller screens.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ padding: "12px 40px" }}
          >
            Get Started
          </Button>
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
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ width: "100%", height: "400px" }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200"
                alt="Feature 1"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "24px", marginBottom: "10px" }}
                >
                  Feature One
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "14px" }}
                >
                  This is a description of our first feature. It contains
                  important information that users need to know. The text might
                  be too small on mobile devices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ width: "100%", height: "400px" }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200"
                alt="Feature 2"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "24px", marginBottom: "10px" }}
                >
                  Feature Two
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "14px" }}
                >
                  This is a description of our second feature. Notice how the
                  cards maintain their fixed height regardless of screen size.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ width: "100%", height: "400px" }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/400x200"
                alt="Feature 3"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "24px", marginBottom: "10px" }}
                >
                  Feature Three
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "14px" }}
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
