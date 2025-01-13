import { Typography, Container, Stack } from "@mui/material";
import Box from "@mui/material/Box";

function Hero() {
  return (
    <Box id="hero">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 1, sm: 1 },
          pb: { xs: 1, sm: 1 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              color: "primary.main",
            }}
          >
            Coral
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "inherit",
                color: "#FFA500",
              }}
            >
              Watch
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Utilize machine learning algorithms, designed with the specific
            needs of researchers in mind, to assess and classify the health of
            coral reef ecosystems.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
