"use client"; // Marks this as a Client Component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import Footer from "../Footer";
import Navbar from "../navbar";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  imageUrl: string;
}

interface ShippingCharges {
  [key: string]: { [key: string]: number };
}

const CartPage = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    // Retrieve cart from local storage on page load
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      const updatedCart = cart.map((item: Product) => ({
        ...item,
        quantity: item.quantity > 0 ? item.quantity : 1, // Default to 1 if quantity is invalid (0 or undefined)
      }));
      setCartItems(updatedCart);
    }
  }, []);

  const shippingCharges: ShippingCharges = {
    Karachi: {
      "74400": 100,
      "74401": 120,
      "74402": 140,
      "74403": 150,
    },
    Lahore: {
      "54000": 200,
      "54010": 220,
      "54020": 250,
      "54030": 300,
    },
    Islamabad: {
      "44000": 180,
      "44010": 200,
      "44020": 220,
      "44030": 250,
    },
    Faisalabad: {
      "38000": 150,
      "38010": 170,
      "38020": 190,
      "38030": 210,
    },
    Quetta: {
      "87300": 300,
      "87310": 320,
      "87320": 350,
      "87330": 400,
    },
    Peshawar: {
      "25000": 250,
      "25010": 270,
      "25020": 290,
      "25030": 310,
    },
    Multan: {
      "60000": 220,
      "60010": 240,
      "60020": 260,
      "60030": 280,
    },
    Hyderabad: {
      "71000": 180,
      "71010": 200,
      "71020": 220,
      "71030": 240,
    }
  };

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPostalCode, setSelectedPostalCode] = useState("");
  const [shippingCharge, setShippingCharge] = useState<number>(0);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity < 1) return; // Prevent quantity from being less than 1
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to local storage
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to local storage
  };
  

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([])); // Save empty cart to local storage
  };

  const handleCheckout = () => {
    router.push("/confirmation");
  };

  const handleShipping = () => {
    if (selectedCity && selectedPostalCode) {
      const cityCharges = shippingCharges[selectedCity];
      if (cityCharges) {
        const charge = cityCharges[selectedPostalCode];
        if (charge) {
          setShippingCharge(charge);
          alert(`Shipping charge for ${selectedCity}, Postal Code: ${selectedPostalCode} is $${charge}`);
        } else {
          alert("No shipping charge available for this postal code.");
        }
      } else {
        alert("City not found in the shipping charges.");
      }
    } else {
      alert("Please select both city and postal code to calculate shipping.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-white lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 ">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Product</th>
                <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Product Name</th>
                <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Price</th>
                <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Quantity</th>
                <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Total</th>
                <th className="p-4 border"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="p-4 border flex items-center space-x-4">
                    <Image
                        alt={item.name}
                        className="w-16 h-auto rounded-lg object-cover"
                        src={item.imageUrl}
                        width={446}   // Specify the width of the image
                        height={458}
                    />
                  </td>
                  <td className="p-4 border text-[#1D3178] text-xs sm:text-base">
                    <p className="font-semibold">{item.name}</p>
                  </td>
                  <td className="p-4 border text-[#1D3178] text-xs sm:text-base">
                    ${Number(item.price).toFixed(2)}
                  </td>
                  <td className="p-4 border">
                    <label htmlFor={`quantity-${item.id}`} className="block text-sm font-medium text-gray-700">
                      {/* Quantity */}
                    </label>
                    <input
                      id={`quantity-${item.id}`}
                      className="w-16 px-2 py-1 border rounded-md text-black text-xs sm:text-sm"
                      min="1"
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                      }
                    />
                  </td>
                  <td className="p-4 border text-[#1D3178] text-xs sm:text-base">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-4 border">
                    <button
                      className="text-red-500 text-xs sm:text-sm"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-xs sm:text-sm">
              Update Cart
            </button>
            <button
              className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-xs sm:text-sm"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-md shadow-md flex flex-col ">
        <div>
  <h2 className="lg:text-xl font-bold mb-4 text-[#1D3178] text-xs sm:text-xl">Cart Totals</h2>

  {/* Subtotal */}
  <p className="flex justify-between mb-2 text-[#1D3178] text-xs sm:text-sm">
    <span>Subtotal:</span>
    <span>${calculateTotal().toFixed(2)}</span>
  </p>

  {/* Shipping */}
  <p className="flex justify-between mb-4 text-[#1D3178] text-xs sm:text-sm">
    <span>Shipping:</span>
    <span>${shippingCharge.toFixed(2)}</span>
  </p>

  {/* Totals */}
  <p className="flex justify-between mb-4 text-[#1D3178] text-xs sm:text-sm">
    <span>Totals:</span>
    <span>${(calculateTotal() + shippingCharge).toFixed(2)}</span>
  </p>

  {/* Shipping Notification */}
  {shippingCharge === 0 && (
    <div className="text-red-500 text-xs sm:text-sm mb-4">
      Please calculate shipping charges.
    </div>
  )}

  {/* Checkout Button */}
  <button
    className="w-full py-2 bg-[#19D16F] text-white rounded-md text-xs sm:text-sm"
    onClick={handleCheckout}
    disabled={shippingCharge === 0} // Disable button if shipping charge is 0
    title={shippingCharge === 0 ? "Please calculate shipping charges before proceeding" : ""}
  >
    Proceed To Checkout
  </button>

  {/* Optional Alert */}
  {shippingCharge === 0 && (
    <script>
      alert(`Please calculate the shipping charges before proceeding to checkout.`);
    </script>
  )}
</div>


          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h2 className="lg:text-xl font-bold mb-4 text-[#1D3178] text-xs sm:text-xl">Calculate Shipping</h2>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              id="country"
              value="Pakistan"
              className="w-full mb-3 px-3 py-2 border rounded-md text-black text-xs sm:text-sm bg-gray-100 cursor-not-allowed"
              type="text"
              disabled
            />
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Select City
            </label>
            <select
              id="city"
              className="w-full mb-3 px-3 py-2 border rounded-md text-black text-xs sm:text-sm"
              onChange={(e) => setSelectedCity(e.target.value)}
              value={selectedCity}
            >
              <option value="">Select City</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Quetta">Quetta</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Multan">Multan</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
              Select Postal Code
            </label>
            <select
              id="postalCode"
              className="w-full mb-3 px-3 py-2 border rounded-md text-black text-xs sm:text-sm"
              onChange={(e) => setSelectedPostalCode(e.target.value)}
              value={selectedPostalCode}
            >
              <option value="">Select Postal Code</option>
              {selectedCity === "Karachi" && (
                <>
                  <option value="74400">74400</option>
                  <option value="74401">74401</option>
                  <option value="74402">74402</option>
                  <option value="74403">74403</option>
                </>
              )}
              {selectedCity === "Lahore" && (
                <>
                  <option value="54000">54000</option>
                  <option value="54010">54010</option>
                  <option value="54020">54020</option>
                  <option value="54030">54030</option>
                </>
              )}
              {selectedCity === "Islamabad" && (
                <>
                  <option value="44000">44000</option>
                  <option value="44010">44010</option>
                  <option value="44020">44020</option>
                  <option value="44030">44030</option>
                </>
              )}
              {selectedCity === "Faisalabad" && (
                <>
                  <option value="38000">38000</option>
                  <option value="38010">38010</option>
                  <option value="38020">38020</option>
                  <option value="38030">38030</option>
                </>
              )}
              {selectedCity === "Quetta" && (
                <>
                  <option value="87300">87300</option>
                  <option value="87310">87310</option>
                  <option value="87320">87320</option>
                  <option value="87330">87330</option>
                </>
              )}
              {selectedCity === "Peshawar" && (
                <>
                  <option value="25000">25000,</option>
                  <option value="25010">25010</option>
                  <option value="25020">25020</option>
                  <option value="25030">25030</option>
                </>
              )}
              {selectedCity === "Multan" && (
                <>
                  <option value="60000">60000</option>
                  <option value="60010">60010</option>
                  <option value="60020">60020</option>
                  <option value="60030">60030</option>
                </>
              )}
              {selectedCity === "Hyderabad" && (
                <>
                  <option value="71000">71000</option>
                  <option value="71010">71010</option>
                  <option value="71020">71020</option>
                  <option value="71030">71030</option>
                </>
              )}
            
            </select>
            <button
              className="w-full py-2 bg-[#FB2E86] text-white rounded-md text-xs sm:text-sm"
              onClick={handleShipping}
            >
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
