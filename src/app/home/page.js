"use client"
import Navbar from "@/components/Navbar"
import { Box } from "@mui/material"
import Image from "next/image"
import logoimage from "../../assets/mercurylogo.png"
import Footer from "@/components/Footer"


function Homepage (){

    return(
        <>
        <Navbar/>
        <Box sx={{height:"51vh", width:"50%",margin:"auto",marginTop:"200px"}}>
            <Image style={{width:"100%"}} src={logoimage} alt="Mercury minds logo" />
        </Box>
        <Footer/>
        </>
    )
}
export default Homepage