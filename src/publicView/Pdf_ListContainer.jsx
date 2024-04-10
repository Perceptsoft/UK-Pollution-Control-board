import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";

function PdfListContainer({ title, data }) {
  return (
    <Box padding={2}>
      <Typography variant="h5" sx={{ my: 2, color: "blue" }}>
        {title}
      </Typography>

      {data.map((item, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: "20px", 
            textDecoration: "none",
            backgroundColor: "#20ff9410",
            mb: "20px",
            p: 2,
            cursor: "pointer",
          }}
        >
          <PictureAsPdfIcon   />
          <Typography variant="body1">{item.name}</Typography>
          <DownloadIcon sx={{   marginLeft: "auto" }} />
        </Card>
      ))}
    </Box>
  );
}

export default PdfListContainer;