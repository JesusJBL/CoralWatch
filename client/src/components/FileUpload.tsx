import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Steps from "./Steps.tsx";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { CloudUpload, CheckCircle, HighlightOff } from "@mui/icons-material";

interface Form {
  image: string;
}
function FileUpload() {
  const [data, setData] = useState<Form>({ image: "" });
  const [picture, setPicture] = useState<string>();
  const [file, setFile] = useState<File>();

  useEffect(() => {
    if (file) {
      setPicture(URL.createObjectURL(file));
    }
  }, [file]);

  const uploadImage = async (image: File) => {
    await axios
      .post(
        "http://127.0.0.1:5000/predict",
        {
          file: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => setData({ image: response.data }))
      .catch(function (error) {
        console.log("error", error.response.data);
      });

    setFile(image);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginBottom: 3,
      }}
    >
      <Steps />
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUpload />}
      >
        Upload image
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => {
            if (event.target.files && event.target.files.length > 0) {
              uploadImage(event.target.files[0]);
            }
          }}
          multiple={false}
        />
      </Button>
      {data?.image && (
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          {picture && <img src={picture} />}
          {data.image === "Bleached" ? (
            <HighlightOff color="error" />
          ) : (
            <CheckCircle color="success" />
          )}
          <Typography variant="body1" color="textPrimary">
            {data.image}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default FileUpload;
