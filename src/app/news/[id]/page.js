import Navbar from "@/components/Navbar"
import { Box, Button, Typography } from "@mui/material"
import axios from "axios"
import Image from "next/image"

async function NewsRead ({params}){
    const {id}=await params
    const url = `https://newsapi.org/v2/everything?q=entertainment&language=en&apiKey=61e534cb81c04dd0874c9c76f65db709`
    
    const fetchallnews = await axios.get(url)
    const response =  fetchallnews.data
    const particularnews = response.articles[id]
    if(!particularnews){
        return(
            <>
            <Navbar/>
            <Box sx={{textAlign:"center"}}>
                <Typography>News not found !</Typography>
            </Box>
            </>

        )
    }
    return(
        
        <>
        <Navbar/>
        <Box sx={{textAlign:"center"}}>
            <Box sx={{width:"40%",padding:"20px",borderRadius:4,boxShadow:"2px 2px 15px lightgrey",margin:"auto",marginTop:"30px"}}>
                <Typography sx={{color:"#024f59ff",fontSize:"20px"}}><b style={{color:"#ff0000ff"}}>Title : </b>{particularnews.title}</Typography> <br/>
                <Image src={particularnews.urlToImage} alt="News image" width={800} height={450}style={{width: "100%",height: "auto",borderRadius: "10px", objectFit: "cover",}}/> <br/>
                <Typography sx={{color:'#044b4dff'}} ><b style={{color:"red"}}>Description : </b>{particularnews.description}<a style={{color:"blue "}}href={particularnews.url}>read more</a></Typography>
            </Box>
            <Box sx={{position:"absolute",bottom:"70px",right:"20px"}}>
                <Button variant="contained" href="/news">Back to news</Button>
            </Box>
        </Box>
        </>
        
    )
}
export default NewsRead