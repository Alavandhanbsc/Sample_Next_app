"use client"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginschema } from "@/models/LoginModels"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"
function Login() {
    //useState
    const [error, setError] = useState(false)
    const [errormessage, setErrormessage] = useState("")
    //variable for router
    const router = useRouter()
    //de-struccture from useForm()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(loginschema) }) // we need to use here 
    //get user details from .env
    const envusername = process.env.NEXT_PUBLIC_LOGIN_NAME
    const envemail = process.env.NEXT_PUBLIC_LOGIN_EMAIL
    const envpassword = process.env.NEXT_PUBLIC_LOGIN_PASSWORD
    //handle submit function
    const handleSubmitfn = (data) => {
        console.log(data, envusername, envpassword, envemail)
        setError(false)
        if (data.name === envusername && data.email === envemail && data.password === envpassword) {
            router.push("/home")
            reset()
            Swal.fire({
                toast: true,
                position: "bottom-end",
                icon: "success",
                title: "Login Succesfully!",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            })
        }else if(data.name!==envusername){
            setError(true)
            setErrormessage("user name not match")
        }else if(data.password!==envpassword){
            setError(true)
            setErrormessage("Password does not match")
        }else if(data.email!==envemail){
            setError(true)
            setErrormessage("E-mail not match")
        }else{
            setError(true)
            setErrormessage("In-valid User details")
        }
    }
    return (


            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ marginTop: "50px", textAlign: "center", width: "400px", boxShadow: "2px 2px 4px black", backgroundColor: "#2685f3ff", padding: "10px", borderRadius: "20px" }}>
                    <Box sx={{ backgroundColor: "white", borderRadius: "10px" }}>
                        <form onSubmit={handleSubmit(handleSubmitfn)}>
                            <br /><Typography variant="h4">Register Form</Typography> <br />
                            <TextField {...register("name")} helperText={errors.name?.message} variant="outlined" sx={{ width: "80%", "& .MuiFormHelperText-root": { color: "red" } }} label="User name" /> <br /> <br />
                            <TextField {...register("email")} helperText={errors.email?.message} variant="outlined" sx={{ width: "80%", "& .MuiFormHelperText-root": { color: "red" } }} label="User E-mail" /> <br /> <br />
                            <TextField {...register("password")} helperText={errors.password?.message} variant="outlined" sx={{ width: "80%", "& .MuiFormHelperText-root": { color: "red" } }} label="Password" /> <br /> <br />
                            {error ? (<Typography sx={{color:"red"}}>{errormessage}</Typography>) : (<></>)}
                            <Button type="submit" variant="contained" sx={{ width: "50%" }}>Verify</Button> <br /> <br />
                        </form>
                    </Box>
                </Box>
            </Box>

    
    )
}

export default Login