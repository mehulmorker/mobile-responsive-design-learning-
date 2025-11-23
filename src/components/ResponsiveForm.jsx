import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Alert,
} from "@mui/material";
import { useState } from "react";

function ResponsiveForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Handle form submission
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            required
            value={formData.firstName}
            onChange={handleChange("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName}
            sx={{
              "& .MuiInputBase-root": {
                fontSize: "16px",
                minHeight: "56px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            required
            value={formData.lastName}
            onChange={handleChange("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName}
            sx={{
              "& .MuiInputBase-root": {
                fontSize: "16px",
                minHeight: "56px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange("email")}
            error={!!errors.email}
            helperText={errors.email}
            slotProps={{
              htmlInput: {
                inputMode: "email",
                autoComplete: "email",
              },
            }}
            sx={{
              "& .MuiInputBase-root": {
                fontSize: "16px",
                minHeight: "56px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone (Optional)"
            type="tel"
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={handleChange("phone")}
            slotProps={{
              htmlInput: {
                inputMode: "tel",
                autoComplete: "tel",
              },
            }}
            sx={{
              "& .MuiInputBase-root": {
                fontSize: "16px",
                minHeight: "56px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={{ xs: 5, md: 6 }}
            fullWidth
            required
            value={formData.message}
            onChange={handleChange("message")}
            error={!!errors.message}
            helperText={errors.message}
            sx={{
              "& .MuiInputBase-root": {
                fontSize: "16px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth={{ xs: true, sm: false }}
            sx={{
              minHeight: "48px",
              fontSize: "16px",
              padding: { xs: "12px 24px", md: "14px 32px" },
            }}
          >
            Submit
          </Button>
        </Grid>
        {submitted && (
          <Grid item xs={12}>
            <Alert severity="success" onClose={() => setSubmitted(false)}>
              Form submitted successfully!
            </Alert>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default ResponsiveForm;


