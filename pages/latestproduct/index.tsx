// components/LatestProducts.js
import Image from 'next/image'; // Import next/image for optimized image handling
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";


const client = createClient({
  projectId: "8xdi20kn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-15",
});

export async function SanityFetch({ query, params = {} }: { query: string; params?: Record<string, string | number | boolean> }) {
  return await client.fetch(query, params);
}

const sanity = sanityClient({
  projectId: "8xdi20kn",
  dataset: "production",
  apiVersion: "2025-01-15",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  tag: string;
  price: number;
  imageUrl?: string;
  description: string;
  image?: {
    asset?: {
      url: string;
    };
  };
  discountPercentage: number;
  tags: string[];
}

const LatestProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Load Cart from Local Storage on Mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save Cart to Local Storage Whenever It Changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const query = `
      *[_type == "product"] {
        _id,
        name,
        tags,
        price,
        imageUrl,
        description,
        discountPercentage,
        image {
          asset->{url}
        },
        tags
      }
      `;
      const data = await sanity.fetch(query);
      console.log("Fetched products:", data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching Products:", error);
    }
  };

  const addToCart = (product: Product) => {
    const productWithImageUrl = {
      ...product,
      imageUrl: product.image?.asset?.url || "/placeholder.jpg",
    };

    setCart((prevCart) => {
      const updatedCart = [...prevCart, productWithImageUrl];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage immediately
      return updatedCart;
    });

    alert(`${product.name} has been added to your cart`);
  };

  
  return (
    <div className="w-full bg-white py-20">
      <div className="w-full">
        <h2 className="text-[#3F509E] text-4xl text-center font-bold mb-8">
          Latest Products
        </h2>

        <div className="flex justify-center space-x-2 md:space-x-8 mb-16">
          {['New Arrival', 'Best Seller', 'Featured', 'Special Offers'].map(
            (category) => (
              <button
                key={category}
                className="text-[#3F509E] text-sm md:text-lg font-medium relative group hover:text-red-600"
              >
                {category}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            )
          )}
        </div>

        <div className="w-full md:w-[80%] lg:w-[1177px] max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {products.slice(0, 6).map((product) => (
            <div  key={product._id} className="w-[360px] h-[306px] bg-white relative group">
              <div className="w-[360px] h-[270px] bg-[#f7f7f7] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-300 group-hover:bg-white">
                <span className="opacity-0 group-hover:opacity-100 absolute top-4 left-4 bg-[#3F509E] text-white text-sm px-3 py-1 -rotate-[30deg] rounded">
                  Sale
                </span>

                <div className="absolute bottom-6 left-4 flex items-center justify-center flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  <button className="bg-white p-2 rounded-full shadow group-hover:bg-[#eeeffb]"  onClick={() => addToCart(product)}  // Add this line to call addToCart
                  title="Add to Cart"
                  >
                  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-[#3F509E]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8" cy="21" r="1"></circle>
                      <circle cx="19" cy="21" r="1"></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                  </button>
                  <button className="bg-white p-2" onClick={() => console.log("View Details clicked")} title="Add to Favorites">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-[#3F509E]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144 39.4-7.1 79.7 1.9 111.8 24.5 9 6.4 17.4 13.8 25 22.3 4.2-4.8 8.7-9.2 13.5-13.3 3.7-3.2 7.5-6.2 11.5-9 39.4-7.1 79.7 1.9 111.8 24.5 69.2 13.2 119.2 73.7 119.2 144v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9z"></path>
                    </svg>
                  </button>
                </div>

                <Image
                  
                  loading="lazy"
                  width={235}
                  height={235}
                  className="object-contain"
                  src={product.image?.asset ?.url || "/placeholder.jpg"}
                alt={product.name || "Product Image"}
                />
              </div>

              <div className="mt-2">
                <div className="flex flex-col items-center justify-between ">
                  <h3 className="text-lg font-semibold text-[#3F509E]">
                    {product.name}
                  </h3>
                  <div className='flex flex-row w-[100%] justify-around'>
                    <span className="text-gray-800 mx-4">${Number(product.price || 0).toFixed(2)}</span>
                    <span className="text-red-600 font-medium ">
                    {product.discountPercentage}% OFF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
