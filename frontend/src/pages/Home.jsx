import { useEffect, useState } from "react"

import API from "../api/axios"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

function Home() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const { data } = await API.get(
          `/products?search=${search}&category=${category}`
        )

        setProducts(
          Array.isArray(data)
            ? data
            : []
        )

      } catch (error) {

        console.log(error)

        setProducts([])

      } finally {

        setLoading(false)
      }
    }

    fetchProducts()

  }, [search, category])

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      {/* Hero Section */}
      <div className="bg-black text-white py-16 text-center">

        <h1 className="text-5xl font-bold mb-4">
          Welcome to ShopEasy
        </h1>

        <p className="text-lg text-gray-300">
          Discover the best products at amazing prices
        </p>

      </div>

      {/* Search + Filter */}
      <div className="max-w-7xl mx-auto px-5 mt-8 flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 border border-gray-300 p-3 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-black"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="border border-gray-300 p-3 rounded-lg"
        >
          <option value="All">
            All Categories
          </option>

          <option value="mobile">
            Mobile
          </option>

          <option value="laptop">
            Laptop
          </option>

          <option value="headphones">
            Headphones
          </option>
        </select>

      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-5 py-10">

        <h2 className="text-3xl font-bold mb-8">
          Featured Products
        </h2>

        {loading ? (

          <div className="text-center text-2xl">
            Loading Products...
          </div>

        ) : products.length === 0 ? (

          <div className="text-center text-2xl text-gray-500">
            No Products Found
          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((product) => (

              <ProductCard
                key={product._id}
                product={product}
              />

            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default Home