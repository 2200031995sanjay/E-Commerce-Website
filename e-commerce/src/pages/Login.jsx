import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

   const handleLogin = async(e)=>{
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
    }catch(error){
        alert(error.message);
    }
   };

   return(
    <form 
    onSubmit={handleLogin}
    className="p-6 bg-[#F0F7F4] text-[#042A2B] min-h-screen flex flex-col items-center justify-center"
>
<h1 className="text-2xl font-bold text-[#F06543] mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-80 p-2 border border-[#B3BFB8] bg-[#A2E3C4] rounded mb-2 outline-none"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-80 p-2 border border-[#B3BFB8] bg-[#A2E3C4] rounded mb-4 outline-none"
        required
      />
      <button
        type="submit"
        className="w-80 p-2 bg-[#F06543] text-white rounded hover:bg-[#d95639] transition"
      >
        Login
      </button>

    </form>
   )
}

export default Login;