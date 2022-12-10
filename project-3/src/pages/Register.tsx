

import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";



const Register = () => {
   const emailRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
   const passwordConfirmRef = useRef<HTMLInputElement>(null);

   const [user, setUser] = useState({})

   onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser!)
   })

    const register = async (e:any) => {
        e.preventDefault()
        console.log("Register Pressed")
        if(passwordRef.current?.value === passwordConfirmRef.current?.value && passwordRef.current?.value !== ""){
        console.log("Creating Account")
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                emailRef.current!.value, 
                passwordRef.current!.value
                );
            console.log(user)
        } catch (err) {
            console.log(err)
        }
        }
    }

    return (
       <div className="formContainer">
        <div className="formWrapper">
            <span className = "logo">Chat Bullshit</span>
            <span className = "title">Register</span>

            <form onSubmit={register}>
                <input type="email" ref = {emailRef} placeholder="Email" />
                <input type="password" ref = {passwordRef} placeholder="Password"/>
                <input type="password" ref = {passwordConfirmRef} placeholder="Confirm Password"/>
                <button>Sign Up</button>
                {/* {err && <span>Something went wrong</span>} */}
            </form>
            <p>Do you have an account? <a href ="./Login">Login</a></p>
        </div>
       </div>
      )
}

export default Register;