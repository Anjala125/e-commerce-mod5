import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Cart from "./pages/Cart.jsx"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App