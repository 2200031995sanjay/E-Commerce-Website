import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created successfully");
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
      <div className="h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-[#6B0F1A] mb-4 text-center">Signup</h1>

        <form onSubmit={handleSignup} className="flex flex-col">
                

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-[#595959] bg-white rounded mb-2 outline-none text-[#6B0F1A]"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-[#595959] bg-white rounded mb-4 outline-none text-[#6B0F1A]"
                    required
                />

                <button
                    type="submit"
                    className="w-full p-2 bg-[#6B0F1A] text-white rounded hover:bg-[#500b13] transition"
                >
                    Signup
                </button>
            </form>
            </div>
        </div>
    );
};

export default Signup;
