"use client"
import Navbar from "@/components/Navbar"
import { Box } from "@mui/material"
import Image from "next/image"
import logoimage from "../../assets/mercurylogo.png"


function Homepage (){

    return(
        <>
        <Navbar/>
        <Box sx={{width:"50%",margin:"auto",marginTop:"200px"}}>
            <Image style={{width:"100%"}} src={logoimage} alt="Mercury minds logo" />
        </Box>
        
        </>
    )
}
export default Homepage