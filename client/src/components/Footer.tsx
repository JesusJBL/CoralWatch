import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

function Footer() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Typography color="textDisabled">
          Made by Jesus Bautista Lopez
        </Typography>
      </Container>
    </>
  );
}

export default Footer;
