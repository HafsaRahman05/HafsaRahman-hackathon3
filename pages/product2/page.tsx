"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";
import Image from "next/image";

const client = createClient({
  projectId: "8xdi20kn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-15",
});

export async function SanityFetch({ query, params = {} }: { query: string; params?: Record<string, unknown>}) {
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

const ProductCart: React.FC = () => {
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
      const data: Product[] = await sanity.fetch(query);
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
    <div className="bg-white p-4 text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[420px]">
            <Image
              src={product.image?.asset?.url || "/placeholder.jpg"}
              alt={product.name || "Product Image"}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-2 flex flex-col h-full">
              <h2 className="text-lg font-semibold min-h-[48px]">{product.name}</h2>
              <p className="text-slate-800 mt-4 text-sm min-h-[60px] overflow-hidden">
                {product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm text-blue-600 ">
                    ${Number(product.price || 0).toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 min-h-[40px]">
                {product.tags?.map((tag, index) => (
                  <span key={index} className="text-xs bg-slate-400 text-black px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="mt-auto w-full bg-[#FB2E86] text-white py-2 rounded-md hover:bg-[#b70350]"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductCart;
