import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import API from "../api/axios"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const { data } = await API.post(
        "/auth/login",
        {
          email,
          password,
        }
      )

      localStorage.setItem(
        "token",
        data.token
      )

      alert("Login Successful")

      navigate("/")

    } catch (error) {

      alert("Invalid Email or Password")

      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue shopping
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>

          <button
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">

          Don't have an account?

          <Link
            to="/register"
            className="text-black font-semibold ml-2 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Login