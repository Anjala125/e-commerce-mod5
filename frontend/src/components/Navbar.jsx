import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-wide">
            ShopEasy
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-lg">

          <Link
            to="/"
            className="hover:text-gray-300 transition"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="hover:text-gray-300 transition"
          >
            Cart
          </Link>

          <Link
            to="/login"
            className="hover:text-gray-300 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar