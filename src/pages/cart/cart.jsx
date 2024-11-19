import React from 'react';
import { FaTrashAlt, FaArrowRight } from 'react-icons/fa';

const Cart = () => {

  const cartItems = [
    { id: 1, name: 'Resume Package: Basic', price: 1499, quantity: 1 },
    { id: 2, name: 'Resume Package: Professional', price: 5999, quantity: 1 },
  ];


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto py-16 px-6">

      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>


      <div className="bg-white shadow-md rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Your cart is empty</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b py-4">
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold">{item.name}</span>
                    <span className="text-gray-600">₹{item.price}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>Qty: {item.quantity}</span>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrashAlt />
                    </button>
                  </div>
                </li>
              ))}
            </ul>


            <div className="flex justify-between items-center border-t pt-4 mt-6">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-2xl font-bold">₹{calculateTotal()}</span>
            </div>
          </div>
        )}
      </div>


      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center gap-2">
          Proceed to Checkout <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Cart;
