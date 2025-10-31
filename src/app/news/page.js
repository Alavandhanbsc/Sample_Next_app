import Navbar from "@/components/Navbar";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// SEO metadata
export const metadata = {
  title: "Latest News | Mercury Minds",
  description:
    "Stay updated with the latest breaking news from around the world, powered by Mercury Minds.",
};

//  SSR Fetch (App Router style)
export default async function NewsPage() {
  let articles = [];

  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=technology&language=en&apiKey=61e534cb81c04dd0874c9c76f65db709",
      { cache: "no-store" }
    );


    const data = await response.json();
    articles = data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
  }

  return (
    <>
      <Navbar />

      {articles.length !== 0 ? (
        <>
          <Box sx={{ textAlign: "center", padding: "10px" }}>
            <Typography variant="h3">Latest news</Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {articles.map((res, ind) => {
              return (

                <Box sx={{ width: "340px", padding: "25px",position:"relative", boxShadow: "2px 2px 4px black", margin: "15px" }}>
                  
                  <Typography variant="h6" sx={{ color: "darkblue" }}>{res.title}</Typography>
                  <Image style={{ width: "100%" }} src={res.urlToImage} />
                  <Typography variant="h7">{res.description}<Link href={res.url} style={{color:"blue"}} >read more...</Link></Typography>
                  
                  
                    
                  
                </Box>
                
              )
            })}
          </Box>
        </>

      ) : (
        <>
          <Typography variant="h4">News not found</Typography>
        </>
      )}

    </>
  );
}
