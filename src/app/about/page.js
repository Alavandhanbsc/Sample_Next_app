"use client";

import Navbar from "@/components/Navbar";
import { Box, Typography, Container, Grid, Card, CardContent, Link as MuiLink } from "@mui/material";

export default function AboutPage() {
  return (
    <Box>
      <Navbar/>

      <Box margin="auto" textAlign="center" m={6}>
        <Typography variant="h3" fontWeight="bold" color="#166af3ff">
          MercuryMinds Technologies
        </Typography>
        <Typography variant="subtitle1" color="grey" mt={2}>
          Empowering Digital Commerce for Over a Decade
        </Typography>
      </Box>

      {/* About Description */}
      <Box
        sx={{
          backgroundColor: "#f9fafb",
          borderRadius: 4,
          p: 4,
          boxShadow: "0 4px 15px lightgrey",
          m: 6,
        }}
      >
        <Typography variant="body1" lineHeight={1.8} color="text.primary">
          Being in the Digital Commerce business for over 10 years, <b>MercuryMinds</b> has a team of
          <b> 50+ skilled and experienced IT experts and consultants</b> specializing in providing solutions for
          <b> E-Commerce</b>, <b>Retail Commerce</b>, <b>Mobile Apps Development</b>,
          <b> Software Reengineering</b>, <b>Minimum Viable Product (MVP)</b>, <b>DevOps Automation</b>,
          and <b>Virtual Reality (VR) Apps Development</b>.
        </Typography>
      </Box>

{/* section two */}
      <Box sx={{display:"flex" ,justifyContent:"space-around",margin:"20px"}} >
        <Box sx={{padding:"20px",boxShadow:"2px 2px 15px lightgrey",borderRadius:4}}>
          <Typography variant="h6" color="primary.main" gutterBottom>
            Company Overview
          </Typography>
          <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
            <b>Founded:</b> 2008 <br />
            <b>Headquarters:</b> Chennai, Tamil Nadu <br />
            <b>Company Size:</b> 11–50 Employees <br />
            <b>Industry:</b> IT Services and Consulting <br />
            <b>LinkedIn Members:</b> 66+ associated professionals
          </Typography>
        </Box>

        <Box sx={{padding:"20px",boxShadow:"2px 2px 15px lightgrey",borderRadius:4}}>
          <Typography variant="h6" color="primary.main" gutterBottom>
            Our Specialties
          </Typography>
          <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
             E-Commerce Development <br />
             Mobile Commerce (App) Development <br />
             E-Commerce Outsourcing <br />
             E-Commerce Support & Maintenance <br />
             E-Commerce Consulting <br />
             DevOps Automation <br />
             VR Apps Development (Oculus Rift, GearVR, Google Cardboard)
          </Typography>
        </Box>

      </Box>
    </Box>
  );
}
