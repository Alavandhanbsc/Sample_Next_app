"use client"
//import swal
import { useEffect } from "react"
import Swal from "sweetalert2"
import { signIn } from "next-auth/react"
import Navbar from "@/components/Navbar"
import { useRouter } from "next/navigation"


function LoginPopup (){
    //useRouter
    const router = useRouter()

    useEffect(()=>{
        showpopup()
    },[])

    //show popup fn
    const showpopup = ()=>{
        Swal.fire({
      title: "Need to sign-in with google",
      text: "Notes page only can share data after you logged-in with google!",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "sign-in",
      cancelButtonText: "Not now",
    }).then((result) => {
      if (result.isConfirmed) {
        signIn("google")
      }else{
        router.push("/home")
      }
    })
    }

    return(
        <>
        <Navbar/>
        
        </>
    )
}

export default LoginPopup