"use client";

import { useState, useEffect } from "react";
import { AppBar, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import { signOut, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Image from "next/image";
import mercurylogo from "../assets/mercurylogo.png"

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const { theme, toggleTheme } = useTheme();

  //  Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AppBar sx={{padding: "20px",position: "sticky",top: 0,backgroundColor: "#1976d2",}}>
      <Box sx={{ width: "100%", display: "flex",justifyContent: "space-between",alignItems: "center",gap:10}}>

        {/* Left — Logo */}
        <Box sx={{display:"flex",justifyContent:"space-around"}}>
          <Box sx={{width:"230px"}}>
            <Image src={mercurylogo} alt="mercury logo"/>
          </Box>
        </Box>

        {/* Center — Navigation Links */}
        <Box sx={{display:"flex",justifyContent:"space-around",gap:5}}>
          <Link href="/home" style={linkStyle}>
            Home
          </Link>
          <Link href="/news" style={linkStyle}>
            News
          </Link>
          <Link href="/contacts" style={linkStyle}>
            Contacts
          </Link>
          <Link href="/about" style={linkStyle}>
          About
          </Link>
          <Link href="/feedback" style={linkStyle}>
            Feedback
          </Link>
          <Link href="/notes" style={linkStyle}>
            Notes
          </Link>
        </Box>

        <Box>
          <Typography variant="h7" sx={{color:session?"#aeff00":"lightgrey",backgroundColor:"#044276ff",borderRadius:4,padding:"5px 15px"}}> {`${session?"Welcome":""} ${session ? session.user?.name || "User" : "Guest User"}`}</Typography>
        </Box>

        {/*  Right — Theme + Auth Buttons */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            gap:1,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* Toggle Dark/Light */}
          <Button
            variant="contained"
            onClick={toggleTheme}
            sx={
              theme !== "dark"
                ? {
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid white",
                    "&:hover": { backgroundColor: "#333" },
                  }
                : {
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    "&:hover": { backgroundColor: "#ddd" },
                  }
            }
          >
            {theme === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
          </Button>

          {/*logout button */}
          <Link href="/login">
          <Button variant="contained" sx={{border: "1px solid white",...buttonStyle}}>
            Logout
          </Button>
          </Link>

          {/* Auth Buttons */}
          {!session ? (
            
            <Button
              variant="outlined"
              sx={buttonStyle}
              onClick={() => signIn("google")}
            >
              Sign-in
            </Button>
            
          ) : (
            <Button
              variant="outlined"
              sx={buttonStyle}
              onClick={async () => {
                await signOut({ redirect: false });
                router.push("/home");
              }}
            >
              Sign-out
            </Button>
          )}
        </Box>
      </Box>
    </AppBar>
  );
}

// Styles
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
};



const buttonStyle = {
  color: "white",
  borderColor: "white",
  "&:hover": { backgroundColor: "white", color: "#1976d2" },
};
