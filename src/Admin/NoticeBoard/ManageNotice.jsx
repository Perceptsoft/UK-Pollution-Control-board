import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TextField,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Paper,
  Link,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Spinner from "../../publicView/Components/Spinner";
import Pagination from "../../publicView/Components/Pagination";
import { toast } from "sonner";

const ManageNotice = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [paginationData, setPaginationData] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteFile, setDeleteFile] = useState({ href: "", name: "" });

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const baseURL = `https://delightfulbroadband.com/api/filesUpload/fetch-file`;
      const defaultParams = {
        limit: 10,
        path: "null/Notices",
        page: pageNo,
      };
      const url = `${baseURL}?path=${defaultParams.path}&limit=${defaultParams.limit}&page=${defaultParams.page}&name=${searchTerm}&startDate=${startDate}&endDate=${endDate}`;

      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to fetch file");
      }

      console.log(response?.data?.data?.data);
      setNotifications(response?.data?.data?.data);
    } catch (error) {
      console.error("Error fetching file:", error);
      setNotifications([]);
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    setLoading(true);
    const { href, name } = deleteFile;
    try {
      const reqData = {
        filePath: "null/Notices",
        href: href,
      };
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        "https://delightfulbroadband.com/api/filesUpload/delete-file",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: reqData,
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to delete file");
      }
      fetchNotifications();
      toast.success("File deleted successfully", { duration: 3000 });
    } catch (error) {
      console.error("Error deleting file:", error);
      toast.error("Error deleting file", { duration: 3000 });
    }
    setLoading(false);
    setOpenDialog(false);
  };

  const handleOpenDialog = (href, name) => {
    setDeleteFile({ href, name });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (type, value) => {
    if (type === "start") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  const setPage = (page) => {
    setPageNo(page);
  };

  useEffect(() => {
    fetchNotifications();
  }, [pageNo]);

  const handleFilterClick = () => {
    setPageNo(1);
    fetchNotifications();
  };

  return (
    <Container>
      <Spinner loading={loading} />
      <Typography variant="h6" gutterBottom>
        Manage Notices
      </Typography>

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap={2}
        marginBottom={2}
      >
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          margin="normal"
          variant="outlined"
          placeholder="Search"
          style={{ flex: 1 }}
        />
        <TextField
          type="date"
          value={startDate}
          onChange={(e) => handleDateChange("start", e.target.value)}
          label="Start Date"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ flex: 1 }}
        />
        <TextField
          type="date"
          value={endDate}
          margin="normal"
          onChange={(e) => handleDateChange("end", e.target.value)}
          label="End Date"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ flex: 1 }}
        />
        <Button
          onClick={handleFilterClick}
          variant="contained"
          style={{ alignSelf: "center" }}
        >
          Search
        </Button>
      </Box>

      {notifications?.length === 0 ? (
        <Typography variant="h6" gutterBottom>
          No Records
        </Typography>
      ) : (
        <TableContainer component={Paper} style={{ width: "60vw" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Publish Date</TableCell>
                <TableCell>File Type</TableCell>
                <TableCell>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notifications?.map((file, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link href={`https://delightfulbroadband.com${file?.href}`}>
                      {file?.name || "N/A"}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {file.createdAt.split("T")[0] || "N/A"}
                  </TableCell>
                  <TableCell>{file.type}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleOpenDialog(file?.href, file?.name)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Box>
        {paginationData.totalPages > 1 && (
          <Pagination
            pagination={paginationData}
            setPageNo={setPage}
            pageNo={pageNo}
          />
        )}
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {deleteFile.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ManageNotice;
