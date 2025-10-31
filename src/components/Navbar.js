"use client";

import { AppBar, Toolbar, Typography, Container, Box, Button } from "@mui/material";
import Link from "next/link";
import { signOut, signIn,useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

//react-icons
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
  //router
  const router = useRouter()
  const { data: session } = useSession();
  //useContext
  const {theme,toggleTheme} =useTheme()

  return (
    <AppBar
      sx={{
        padding: "20px",
        position: "sticky",
        top: 0,
        backgroundColor: "#1976d2",
      }}
    >
      <Box
      sx={{
        width:"100%",
        display:"flex",
        justifyContent:"space-between"
      }}
      >
        
          {/* Left — Logo */}
          <Box sx={{ flex: 1, display: "flex", justifyContent:"flex-start" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                letterSpacing: 1,
                color: "white",
                mb: { xs: 1, sm: 0 },
              }}
            >
              Mercury Minds
            </Typography>
          </Box>

          {/* Center — Navigation Links */}
          <Box
            sx={{
              flex: 2,
              display: "flex",
              gap: 3,
              justifyContent: "space-around",
            }}
          >
            <Link href="/home" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
              Home
            </Link>
            <Link href="/news" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
              News
            </Link>
            <Link href="/contacts" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
              contacts
            </Link>
            <Typography sx={{ color: "white", fontWeight: 500, cursor: "pointer" }}>
              About
            </Typography>
            <Link href="/feedback" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
              Feedback
            </Link>
            <Link href="/notes" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
              Notes
            </Link>
          </Box>


          {/* Right — Logout Button */}
          <Box sx={{ flex: 1, display: "flex",gap:3, justifyContent:"space-around" }}>
            <Button variant="contained" onClick={toggleTheme}
            sx={theme!=="dark"?{backgroundColor:"black",color:"white",border:"1px solid white"}:{backgroundColor:"white",color:"black",border:"1px solid black"}}>
        {theme === "dark" ? <MdOutlineLightMode/> :<MdDarkMode/>}
      </Button>
            <Link href="/login">
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { backgroundColor: "white", color: "#1976d2" },
              }}
            >
              Logout
            </Button>
            </Link>
            {!session ? (
              
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": { backgroundColor: "white", color: "#1976d2" },
                  }}
                  onClick={()=>{signIn("google")}}
                >
                  Sign-in
                </Button>
              
            ) : (
              <Button
                variant="outlined"
                onClick={async () => {
                  await signOut({ redirect: false });
                  router.push("/home");
                }}
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": { backgroundColor: "white", color: "#1976d2" },
                }}
              >
                Sign-Out
              </Button>
            )}
            
          </Box>
        
      </Box>
    </AppBar>
  );
}
