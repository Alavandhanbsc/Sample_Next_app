"use client"
import Navbar from "@/components/Navbar";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";


function Feedback (){
//url
const url = "/api/feedbackbend"
    //usestate
    const [feeddata,setFeeddata]=useState({feedname:"",feedcontent:"",feedtime:Date.now()})

    //handlepost fn
    const handlepost = async()=>{
        console.log(feeddata)
        setFeeddata({feedname:"",feedcontent:""})

        try{
            const postreq = axios.post(url,feeddata)
            console.log(postreq.data)
            Swal.fire({
              toast: true,
              position: "bottom-end",
              icon: "success",
              title: "Thank you for share your feedback!",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <Navbar/>
        <Box sx={{textAlign:"center"}} >
            <Box sx={{width:"80%",boxShadow:"2px 2px 4px black",padding:"15px",textAlign:"left",margin:"auto",marginTop:"30px"}}>
                <Typography variant="h4" sx={{color:"blue",padding:"8px"}}>Drop Feed Back</Typography>
                <TextField value={feeddata.feedname} onChange={(e)=>{setFeeddata({...feeddata,feedname:e.target.value})}} label="Name" variant="outlined" sx={{width:"40%"}}/> <br/> <br/>
                <TextField value={feeddata.feedcontent} onChange={(e)=>{setFeeddata({...feeddata,feedcontent:e.target.value})}}label="Write Your Feedback" variant="outlined" sx={{width:"90%"}} multiline rows={3} />
                <Box sx={{textAlign:"center",padding:"15px"}}>
                    <Button onClick={handlepost} variant="contained" sx={{width:"40%",padding:"5px"}}>Submit</Button>
                </Box>
            </Box>
        </Box>
        
        

        <Box sx={{textAlign:"center",marginTop:"50px"}} >
            <Typography variant="h7" sx={{color:"grey"}}>Feedbacks are posted in nested page , click the navigation to read it .</Typography>
            <Link href="/feedbackread"><Typography sx={{color:"blue"}} variant="h7">{`Tap to view feedback >>>`}</Typography></Link>
        </Box>
        </>
    )
}

export default Feedback