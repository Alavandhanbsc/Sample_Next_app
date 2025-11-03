"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material"
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
        <Navbar />
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1976d2" }}>
          Contacts
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Our list of valued customers and their contact details
        </Typography>
      </Box>

      {/* Contacts Section */}
      <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 4, md: 6 }, pb: 6 }}>
        <Grid container spacing={3} justifyContent="center">
          {user.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 3,
                  "&:hover": {
                    boxShadow:"2px 2px 4px black",
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                    p: 3,
                    background: "linear-gradient(180deg, #e3f2fd 0%, #fff 100%)",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#1976d2",
                      mx: "auto",
                      width: 64,
                      height: 64,
                      fontSize: 24,
                    }}
                  >
                    {user.name.charAt(0)}
                  </Avatar>

                  <Typography
                    variant="h6"
                    sx={{ mt: 2, fontWeight: "bold", color: "#0d47a1" }}
                  >
                    {user.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    <span style={{color:"green"}}>E-mail :</span> {user.email}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1.5,
                      color: "#555",
                    }}
                  >
                  <span style={{color:"green"}}>Address : </span>{user.address.street}, {user.address.city}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer/>
    </>
  )}

export default Contacts