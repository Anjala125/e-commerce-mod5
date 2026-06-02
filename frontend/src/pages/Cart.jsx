import { useSelector } from "react-redux"

import Navbar from "../components/Navbar"

function Cart() {

  const { cartItems } = useSelector(
    (state) => state.cart
  )

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  )

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto p-5">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (

          <div className="text-2xl text-gray-500">
            Your cart is empty
          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">

              {cartItems.map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 flex items-center gap-5"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded"
                  />

                  <div className="flex-1">

                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-xl font-bold mt-2">
                      ₹ {item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* Summary */}
            <div className="bg-white rounded-xl shadow p-6 h-fit">

              <h2 className="text-3xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-xl mb-4">

                <span>Total</span>

                <span>
                  ₹ {totalPrice}
                </span>

              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
                Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default Cart