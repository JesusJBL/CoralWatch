import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import FileUpload from "./components/FileUpload.tsx";
import { Box, Paper, Divider, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FileUpload />
      <Divider variant="middle" sx={{ width: "75%", my: 3, marginX: "auto" }} />
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "90%", md: "50%" },
          height: "auto",
          margin: "auto",
          padding: 2,
        }}
      >
        <Paper
          elevation={1}
          sx={{
            padding: 3,
            textAlign: "center",
            borderRadius: "16px",
            backgroundColor: "#fffde7",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Thank you for taking the time to explore this project!
          </Typography>
          <Typography variant="body1" gutterBottom>
            It builds upon my Honor's Capstone from Bentley University. If
            you're interested in diving deeper, you can look at the accompanying
            paper down below!
          </Typography>
          <Typography>
            <a href="https://bentleyedu-my.sharepoint.com/:w:/g/personal/jbautista_falcon_bentley_edu/EbcjFQKXylVKsFVQT7d_nMcBH4jN1zcysjotLWOgug_o8Q?e=uXZ7mn">
              View here
            </a>
          </Typography>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}

export default App;
