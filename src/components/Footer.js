import { Box, Link as MuiLink } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "16px 0",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        gap: "200px",
        position: "relative",
        bottom: 0,
        mt: "60px",            
      }}
    >
      <MuiLink sx={hovereffect} href="/about">About</MuiLink>
      <MuiLink sx={hovereffect} href="/contacts">Contact</MuiLink>
      <MuiLink sx={hovereffect} href="/home">E-mail</MuiLink>
      <MuiLink sx={hovereffect} href="/login">Logout</MuiLink>
    </Box>
  );
}

const hovereffect = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
  "&:hover": {
    color: "lightgrey",
  },
};

export default Footer;
