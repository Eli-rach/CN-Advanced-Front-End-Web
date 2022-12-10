import { auth } from "../firebase"
import { useState, useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const login= async (e:any) => {
        
        e.preventDefault()
        console.log("Logging in")
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                emailRef.current!.value, 
                passwordRef.current!.value
                );
            console.log(user)
        } catch (err) {
            console.log(err)

        }
    }
    return (
       <div className="formContainer">
        <div className="formWrapper">
            <span className = "logo">Chat Bullshit</span>
            <span className = "title">Login</span>

            <form>
                <input type="email" ref = {emailRef} placeholder="email" />
                <input type="password" ref = {passwordRef} placeholder="password"/>
                
                <button>Sign In</button>
            </form>
            <p>You don't have an account? <a href = "Register">Sign Up</a></p>
        </div>
       </div>
      )
}

export default Login;