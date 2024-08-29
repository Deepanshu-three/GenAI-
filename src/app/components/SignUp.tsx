"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export const SignUp =()=>{
    const session = useSession()
 return (
    <div>
        {session.data?.user ?
        <button onClick={()=>signOut()}>logout</button> :
        <button onClick={()=>signIn()}>signIn</button>

    }
        
    </div>
 )
} 