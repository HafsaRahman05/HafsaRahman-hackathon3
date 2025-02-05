"use client"; // Marks this as a Client Component

import { useState, useEffect } from "react";
import Image from "next/image";

import Lamp from "../../public/lamp.png"; // Correct path for public assets
import banner1 from "../../public/banner1.png";
import banner2 from "../../public/banner2.png";
import banner3 from "../../public/banner3.png";
import {useRouter} from 'next/navigation'

// Slide Data
const slidesData = [
  {
    image: banner1,
    tagline: "Best Furniture For Your Castle...",
    headline: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
  {
    image: banner2,
    tagline: "Stylish Interiors Just for You...",
    headline: "Discover Our Latest Designs",
    description:
      "Explore a wide range of beautifully crafted furniture for your home and office.",
  },
  {
    image: banner3,
    tagline: "Elegant Furniture For Every Space",
    headline: "Discover Our Latest Designs",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
  },
];

function Banner()  {
  const router = useRouter(); // Initialize useRouter for navigation
  const [slideIndex, setSlideIndex] = useState<number>(0);


  // Auto-switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle dot navigation click
  const handleDotClick = (index: number) => {
    setSlideIndex(index);
  };

  // Redirect to the shop page
  

  const slide = slidesData[slideIndex];

  return (
    
    <div className="banner-container">
      <div className="lampimage-container absolute top-0 left-0 z-10">
        <Image src={Lamp} alt="Lamp" className="lamp_img" />
      </div>

      <div className="content">
        <p className="tagline">{slide.tagline}</p>
        <h1 className="headline">{slide.headline}</h1>
        <p className="description">{slide.description}</p>
        <button
          className="bg-[#FB2E86] text-white py-3 px-6 rounded-lg text-lg cursor-pointer hover:bg-[#F94C9B] transition-colors"
         onClick={()=>router.push("/product")}>
          Shop Now
        </button>
      </div>

      <div className="image-container bg-gradient-to-r from-pink-100 to-purple-200 rounded-full shadow-xl">
        <Image src={slide.image} alt="Furniture" className="si" />
      </div>

      <div className="dots-container">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
   
  );
};

export default Banner;
