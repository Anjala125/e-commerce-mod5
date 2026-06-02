import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"

import API from "../api/axios"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {

    e.preventDefault()

    try {

      const response = await API.post(
        "/auth/register",
        {
          name,
          email,
          password,
        }
      )

      console.log(response.data)

      alert("Registration Successful")

      navigate("/login")

    } catch (error) {

      console.log(error)

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Register to continue shopping
        </p>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

          </div>

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
            Register
          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-black font-semibold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Register