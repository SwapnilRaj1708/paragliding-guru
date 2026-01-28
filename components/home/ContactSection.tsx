import {
  Box,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const mapEmbedSmall =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.8639483114633!2d76.70906467161905!3d32.04095100485125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b8c0872e117b%3A0x5e8057e754691ebb!2sPG%20Gurukul!5e0!3m2!1sen!2sin!4v1769522595880!5m2!1sen!2sin";

const mapEmbedMedium =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.8639483114633!2d76.70906467161905!3d32.04095100485125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b8c0872e117b%3A0x5e8057e754691ebb!2sPG%20Gurukul!5e0!3m2!1sen!2sin!4v1769522595880!5m2!1sen!2sin";

export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        bgcolor: "#F6F6F6",
        px: { xs: 2, md: 9 },
        py: { xs: 6, md: 9 },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              boxShadow: "0px 2px 12px rgba(0,0,0,0.12)",
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography variant="h4" color="#3D3D3F" gutterBottom>
                  Having second thoughts?
                </Typography>
                <Typography variant="body2" color="#616161">
                  Please help us resolve all your doubts, send us a message and we
                  will reach out to you.
                </Typography>
              </Box>
              <Stack spacing={2}>
                <TextField label="Name" size="small" fullWidth />
                <TextField label="Email" size="small" fullWidth />
                <TextField label="Subject" size="small" fullWidth />
                <TextField
                  label="Select Category"
                  size="small"
                  select
                  fullWidth
                >
                  <MenuItem value="beginner">Beginner Courses</MenuItem>
                  <MenuItem value="intermediate">Intermediate Courses</MenuItem>
                  <MenuItem value="advanced">Advanced Courses</MenuItem>
                </TextField>
                <TextField
                  label="Message"
                  size="small"
                  fullWidth
                  multiline
                  minRows={4}
                />
              </Stack>
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0px 2px 12px rgba(0,0,0,0.12)",
              bgcolor: "#FFFFFF",
            }}
          >
            <Box
              component="iframe"
              title="PG Gurukul map"
              src={mapEmbedSmall}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                display: { xs: "block", md: "none" },
                width: "100%",
                height: 300,
                border: 0,
              }}
            />
            <Box
              component="iframe"
              title="PG Gurukul map"
              src={mapEmbedMedium}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                display: { xs: "none", md: "block" },
                width: "100%",
                height: 450,
                border: 0,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
