import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@material-tailwind/react"; // Ensure Button is imported from the correct package
import myContext from "../../../context/data/MyContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";

export default function AdminLogin() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //* Login Function
    const login = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error("Please fill all required fields");
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Successful');
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/dashboard');
        } catch (error) {
            toast.error('Login Failed');
            console.error(error);
        }
    }

    return (
        <>
            <Link to="/">
                <Button className="bg-green-600 rounded-full m-1">
                    <FaArrowLeft />
                </Button>
            </Link>
            <div className="flex justify-center items-center h-screen">
                <form
                    onSubmit={login}
                    className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800"
                >
                    <div className="px-8 py-10 md:px-10">
                        <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
                            Admin Login!
                        </h2>
                        <p className="text-center text-zinc-600 text-red-500 dark:text-zinc-400 mt-3">
                            Only admin can log in.
                        </p>
                        <div className="mt-10">
                            <div className="relative">
                                <label
                                    className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    placeholder="you@example.com"
                                    className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mt-6">
                                <label
                                    className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    placeholder="••••••••"
                                    className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                                    name="password"
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mt-10">
                                <button
                                    className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
                                    type="submit"
                                >
                                    Let's Go
                                </button>
                            </div>
                        </div>
                    </div>
                
                </form>
            </div>
        </>
    );
}
