import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <Box sx={{ flexGrow: 1, margin: "20px" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CoralWatch
          </Typography>
          <IconButton
            href="https://github.com/JesusJBL"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/jesusjblopez/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default Header;
