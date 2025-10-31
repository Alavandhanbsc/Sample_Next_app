"use client"
import Navbar from "@/components/Navbar"
import { Box, Paper, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

function Contacts (){
    //create state
    const [user,setuser]=useState([])

    useEffect(()=>{
        fetchuserfn()
    },[])

    //url
    const url = "https://jsonplaceholder.typicode.com/users"
    //handle fetchuserfn
    const fetchuserfn = async()=>{
        const response = await axios.get(url)
        setuser(response.data)

    }
    return(
        <>
        <Navbar/>
        <Box sx={{textAlign:"center",padding:"10px"}}>
            <Typography variant="h4">Contacts</Typography>
        </Box>
        
        {user.length !== 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            backgroundColor: "#f9f9f9",
            py: 5,
          }}
        >
          {user.map((res, ind) => (
            <Paper
              key={ind}
              elevation={3}
              sx={{
                width: "60%",
                textAlign: "center",
                p: 2,
                mb: 2,
                borderRadius: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                  backgroundColor: "#e3f2fd",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                {res.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
          }}
        >
          <Typography variant="h6" color="text.secondary">
            No users found.
          </Typography>
        </Box>
      )}
    </>
  )}

export default Contacts