"use client"
import Navbar from "@/components/Navbar"
import {signIn,useSession} from "next-auth/react"
import { useRouter } from "next/navigation"

function GoogleLogin (){
    //router 
    const router = useRouter()
    //de-structure from useSession
    const { data:session }=useSession()

    if(session){
        router.push("/notes")
    }else{
        router.push("/home")
    }

    return(
        <>
        <Navbar />
        <div style={{ padding: 20 }}>
      <h2>Google Verification Required</h2>
      <p>Please sign in with Google to access Notes.</p>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
        </>
    )
}
export default GoogleLogin