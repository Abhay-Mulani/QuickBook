import React, { useState } from "react";
import { submitBooking } from "../api/bookService";

const product = {
  name: "Basic Room Booking",
  basePrice: 100,
  addons: [
    { id: 1, name: "Breakfast", price: 20 },
    { id: 2, name: "Airport Pickup", price: 30 },
    { id: 3, name: "Extra Bed", price: 25 },
  ],
};

const BookingPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((aid) => aid !== id) : [...prev, id]
    );
  };

  const addonTotal = selectedAddons.reduce((sum, id) => {
    const addon = product.addons.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalPrice = (product.basePrice + addonTotal) * quantity;

  const handleBooking = async () => {
    if (quantity < 1) return;

    const bookingData = {
      productName: product.name,
      quantity,
      addOns: product.addons
        .filter((addon) => selectedAddons.includes(addon.id))
        .map((addon) => addon.name),
      totalFare: totalPrice,
    };

    try {
      await submitBooking(bookingData);
      setShowModal(true);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">{product.name}</h2>

        <div className="text-lg text-gray-700 font-semibold">
          Base Price: <span className="text-indigo-600">${product.basePrice}</span>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-600">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <h3 className="mb-2 font-medium text-gray-600">Add-ons</h3>
          <div className="space-y-2">
            {product.addons.map((addon) => (
              <label
                key={addon.id}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedAddons.includes(addon.id)}
                    onChange={() => toggleAddon(addon.id)}
                    className="accent-indigo-600 w-5 h-5"
                  />
                  <span className="text-gray-700 font-medium">{addon.name}</span>
                </div>
                <span className="text-indigo-500 font-semibold">+${addon.price}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-300 space-y-2">
          <div className="flex justify-between text-gray-700 font-semibold">
            <span>Subtotal:</span>
            <span>${product.basePrice + addonTotal}</span>
          </div>
          <div className="flex justify-between text-2xl font-bold text-indigo-700">
            <span>Total (x{quantity}):</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Confirm Booking
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-80 space-y-4">
            <h2 className="text-xl font-bold text-center text-indigo-700">Booking Confirmed!</h2>
            <p className="text-gray-700 text-center">
              <strong>{quantity}</strong> room(s) booked with{" "}
              <strong>{selectedAddons.length}</strong> add-on(s).
            </p>
            <p className="text-center font-semibold text-indigo-600 text-lg">
              Total: ${totalPrice}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
