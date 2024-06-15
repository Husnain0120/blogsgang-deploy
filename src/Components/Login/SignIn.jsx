import './button.css'
import "./Login.css"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../../firebase/FirebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const Auth = auth
    signInWithEmailAndPassword(Auth, email, password)
      .then(res => {
        console.log(res.user);
        navigate('/home')
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
      });
  }

  const handleWithGoogle = (e) => {
    e.preventDefault()
    setLoading(true)
    const Auth = auth
    const Provider = new GoogleAuthProvider()
    signInWithPopup(Auth, Provider)
      .then(() => {
        navigate('/home')
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        setLoading(false)
      })
  }

  const handlePasswordToggle = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          
          <p>Loading..</p>
        </div>
        </div>
      )}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src='https://cdn-icons-png.freepik.com/256/7786/7786991.png?uid=R98459826&ga=GA1.2.1114926933.1708955695&'
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome back
          </h2>
          <p className="text-sm text-center font-bold leading-9 tracking-tight text-gray-900">
            If you have no account <span><Link to="/" className="font-mono text-blue-700 hover:underline">Signup</Link></span>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmitLogin}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <button onClick={handlePasswordToggle} type='button'>
                  {!showPassword ? "Show" : "Hide"}
                </button>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full bg-teal-700 justify-center rounded-3xl my-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="google-login-button" onClick={handleWithGoogle}>
            <svg className="google-icon" viewBox="0 0 48 48" height="1em" width="1em">
              {/* Google SVG paths */}
            </svg>
            <button class="button23">
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
            <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
            <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
            <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
          </svg>
            Continue with Google
          </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
