"use client";

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Navbar from "@/components/Navbar";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

// Styled table cells
const StyledTableCell = styled(TableCell)({
  "&.MuiTableCell-head": {
    backgroundColor: "#000",
    color: "#fff",
  },
  "&.MuiTableCell-body": {
    fontSize: 14,
  },
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f5f5",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
});

export default function NotesPage() {
  //router
  const router = useRouter()
  const { data: session, status } = useSession();
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
//back-end url
  const url = "/api/notesbend";
  //checkbox label
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/gogleloginpopup"); //show a popup to sign-in with google
    }
  }, [status]);

  useEffect(() => {
    if (session) {
      fetchNotes();
    }
  }, [session]);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data.notes);
    } catch (err) {
      console.error("Fetch error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    setLoading(true);
    try {
      const postreq = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: task, content: "" }),
      });

      if (postreq.ok) {
        Swal.fire({
          toast: true,
          position: "bottom-end",
          icon: "success",
          title: "Note Added!",
          showConfirmButton: false,
          timer: 3000,
        });
        fetchNotes();
      }
    } catch (error) {
      console.error("Add error:", error);
    } finally {
      setLoading(false);
      setTask("");
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(url, { data: { id } });
      Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "error",
        title: "Note Deleted!",
        showConfirmButton: false,
        timer: 3000,
      });
      fetchNotes();
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setLoading(false);
    }
  };


  if (status === "loading") {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!session) {
    return null; 
  }

  //Notes Ui
  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex", justifyContent: "center", padding: "20px"}}>
        <Typography variant="h4">Task Manager</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <Paper
          sx={{
            width: "80%",
            padding: "20px",
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "2px 2px 4px black",
          }}
        >
          <TextField
            label="Enter Tasks"
            sx={{ width: "80%" }}
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ margin: "0 10px" }}
            onClick={handleAdd}
          >
            Add Task
          </Button>
        </Paper>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", margin:"20px" }}>
          {data.length ? (
            <TableContainer sx={{ minWidth: 700, maxWidth: 1000 }} component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">S.no</StyledTableCell>
                    <StyledTableCell align="center">Tasks</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, ind) => (
                    <StyledTableRow key={row._id || ind}>
                      <StyledTableCell align="center">
                        <Checkbox {...label} />
                      </StyledTableCell>
                      <StyledTableCell align="center">{ind + 1}</StyledTableCell>
                      <StyledTableCell align="center">{row.title}</StyledTableCell>
                      <StyledTableCell align="center">
                        <Button onClick={() => handleDelete(row._id)}>
                          <MdDelete style={{color:"red",cursor:"pointer",fontSize:"23px"}}  />
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography sx={{ color: "grey" }} variant="h5">
              No tasks
            </Typography>
          )}
        </Box>
      )}
    </>
  );
}
