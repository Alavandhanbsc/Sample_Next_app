"use client"
import Navbar from "@/components/Navbar"
import { Box, Button, Tab, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

function FeedBackRead() {

    //url
    const url = "/api/feedbackbend"
    //useState
    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        fetchfeedback()
    }, [])

    //handle fetch
    const fetchfeedback = async () => {
        try {
            const fetchdata = await axios.get(url)
            setFeedbacks(fetchdata.data.storage)
            console.log(fetchdata)

        } catch (err) {
            console.log("from feedbackread :", err)
        }
    }

    //readable time
    const readable = new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(feedbacks.time);
    return (
        <>
            <Navbar />
            {feedbacks.length !== 0 ? (<Box sx={{ textAlign: "center", padding: "20px" }}>
                <Typography variant="h4" sx={{ color: "green" }}>Feedbacks</Typography>
            </Box>) : (<></>)}
            <Box sx={{ position: "fixed", bottom: "20px", right: "20px" }}>
                <Link href="/feedback"><Button sx={{ margin: "20px" }} variant="contained">Write feedback</Button></Link>
            </Box>
            {feedbacks.length !== 0 ? (
                <Box sx={{ display: "flex", justifyContent: "space-evenly", gap: 5, flexWrap: "wrap", alignItems: "flex-start" }}>
                    {feedbacks.map((res, ind) => {
                        return (
                            <Box key={ind} sx={{ width: "400px", boxShadow: "2px 2px 4px black", margin: "10px" }}>
                                <Table sx={{ width: "100%" }}>
                                    <TableBody>
                                    <TableRow>
                                        <TableCell>Name :</TableCell>
                                        <TableCell>{res.name}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>Feed Back :</TableCell>
                                        <TableCell>{res.content}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>Posted on :</TableCell>
                                        <TableCell>{new Intl.DateTimeFormat("en-IN", {
                                            dateStyle: "medium",
                                            timeStyle: "short",
                                        }).format(new Date(res.time))}
                                        </TableCell>
                                    </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        )
                    })}
                </Box>
            ) : (
                <>
                    <Box sx={{ textAlign: "center", marginTop: "200px" }}>
                        <Typography sx={{ color: "grey", fontSize: "20px" }}>No feedback</Typography>
                    </Box>
                </>
            )}
        </>
    )
}

export default FeedBackRead