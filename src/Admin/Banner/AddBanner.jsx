import { useState, useRef } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  FormControl, 
  Box,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import axios from "axios";
import { toast } from "sonner";
import ImageContainer from "../Components/ImageContainer";
import Spinner from "../../publicView/Components/Spinner";

const AddBanner = () => {
  const [bannerName, setBannerName] = useState("");
  const [files, setFiles] = useState([]);
  const [uploadedMedia, setUploadedMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const fileArray = Array.from(event.target.files).map((file) => {
      return {
        url: URL.createObjectURL(file),
        type: file.type,
        file,
      };
    });
    setFiles((prevFiles) => prevFiles.concat(fileArray));
    event.target.value = null; // Clean up the object URL
  };

  const handleRemoveFile = (fileUrl) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.url !== fileUrl));
    URL.revokeObjectURL(fileUrl);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    files.forEach((fileObj) => {
      formData.append("file", fileObj.file);
    });
    formData.append("name", bannerName);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://delightfulbroadband.com/api/banner/upload/e-files",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Media added successfully", { duration: 3000 });
      handleClear();
    } catch (error) {
      console.error("Error uploading media:", error);
      toast.error(error.response?.data?.error || "Oops, something went wrong", { duration: 3000 });
    }
    setLoading(false);
  };

  const handleClear = () => {
    setBannerName("");
    setFiles([]);
    document.getElementById("file-upload").value = "";
  };

  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  return (
    <Container>
      <Spinner loading={loading} />
      <Typography variant="h5" sx={{ mb: 1 }}>
        Upload Banners
      </Typography>

      <FormControl fullWidth sx={{ my: 2 }}>
        <input
          ref={fileInputRef}
          id="file-upload"
          type="file"
          accept={
            ".png,.jpeg,.jpg,.gif,.bmp,.tiff,.svg,.webp,.mp4,.avi,.mov,.wmv,.flv,.mkv"
          }
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Button
          variant="contained"
          onClick={() => fileInputRef.current.click()}
        >
          Upload Files
        </Button>
      </FormControl>

      <Grid container spacing={2}>
        {files?.map((fileObj, index) => (
          <Grid item xs={4} key={index}>
            <div style={{ position: "relative" }}>
              {fileObj.type.startsWith("video/") ? (
                <video width="100%" height="auto" controls>
                  <source src={fileObj.url} type={fileObj.type} />
                </video>
              ) : (
                <img
                  src={fileObj.url}
                  alt="Preview"
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              <Button
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "#0e3c66",
                  color: "white",
                  padding: "0px",
                  width: "50px",
                }}
                onClick={() => handleRemoveFile(fileObj.url)}
              >
                <CloseIcon style={{ width: "20px", margin: "0px" }} />
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>

      <TextField 
        id="outlined-basic" 
        value={bannerName} 
        onChange={(e) => setBannerName(e.target.value)} 
        label="Banner name" 
        variant="outlined" 
        sx={{ mt: 2 }} 
      />

      <Box>
        <Button
          variant="outlined"
          sx={{ width: "45%", mt: 2, mr: 1 }}
          onClick={handleClear}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          sx={{ width: "45%", mt: 2, ml: 1 }}
          onClick={handleSubmit}
          disabled={!bannerName || files.length === 0}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AddBanner;
