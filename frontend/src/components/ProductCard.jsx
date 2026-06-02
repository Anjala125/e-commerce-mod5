import { useDispatch } from "react-redux"

import { addToCart } from "../redux/cartSlice"

function ProductCard({ product }) {

  const dispatch = useDispatch()

  const handleAddToCart = () => {

    dispatch(addToCart(product))

    alert("Product Added To Cart")
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">

        <h1 className="text-2xl font-bold">
          {product.name}
        </h1>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <p className="text-xl font-semibold mt-3">
          ₹ {product.price}
        </p>

        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-2 rounded-lg mt-4 hover:bg-gray-800 transition"
        >
          Add To Cart
        </button>

      </div>

    </div>
  )
}

export default ProductCard