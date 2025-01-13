import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Steps() {
  const steps: string[] = [
    "Choose a coral reef image",
    "Let the model analyze the image",
    "View the results!",
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "30px" }}>
      <Stepper activeStep={-1}>
        {steps.map((label) => (
          <Step active={true} key={label}>
            <StepLabel>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Steps;
