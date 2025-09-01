import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Paracetamol 500mg", price: 50, qty: 2 },
    { id: 2, name: "Vitamin C Tablets", price: 120, qty: 1 },
    { id: 3, name: "Cough Syrup 100ml", price: 90, qty: 1 },
  ]);

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart(cart.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div>
                  <h2 className="font-semibold text-gray-700">{item.name}</h2>
                  <p className="text-sm text-gray-500">₹{item.price} / unit</p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-2 text-gray-700">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 ml-3"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            {/* Total Summary */}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold text-gray-800">Total</h2>
              <p className="text-xl font-semibold text-orange-600">₹{total}</p>
            </div>

            <button className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white font-semibold shadow hover:opacity-90 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
