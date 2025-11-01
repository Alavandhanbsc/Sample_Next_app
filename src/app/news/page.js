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
            <Typography variant="h3"> Today Latest news</Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {articles.map((res, ind) => {
              return (

                <Box key={ind} sx={{ width: "340px", padding: "25px", position: "relative", boxShadow: "2px 2px 4px black", margin: "15px" }}>

                  <Typography variant="h6" sx={{ color: "darkblue" }}><span style={{fontWeight:"700",color:"red"}}>Title : </span>{res.title}</Typography>

                  <Image
                    src={res.urlToImage || "/placeholder.jpg"}
                    alt={"News image"}
                    width={340}
                    height={200}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      objectFit: "cover",
                      marginBottom:"20px"
                    }}
                    unoptimized           // to skip Next.js optimization for external URLs
                  />

                  <Typography variant="h7"><span style={{fontWeight:"800",color:"red"}}>Description : </span>{res.description}<Link href={res.url} style={{ color: "blue" }} >read more...</Link></Typography>




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
