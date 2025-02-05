import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../navbar";
import Image, { StaticImageData } from "next/image";
import sofa1 from "../../public/sofa.jpg";
import sofa2 from "../../public/sofa1.jpg";
import sofa3 from "../../public/sofa2.jpg";
import {useRouter} from 'next/navigation'

const Productdetail = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(sofa1);

  const images = [sofa1, sofa2, sofa3];
  const slides = [
    {
      name: "Sofa",
      
      image: sofa1,
      price:8500,
    },
    {
      name: "Table",
   
      image: sofa3,
      price:5000,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="bg-white text-gray-700">
    <Navbar />
    <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Product Detail</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">Sofa</span>
          </p>
        </div>
      </div>
    <div className="container bg-white mx-auto p-4">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
   
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 justify-items-center w-[100%]">
      {/* Render selected image */}
      {selectedImage && (
        <Image
        src={selectedImage}
          alt="Selected Chair"
          width={500}
          height={500}
        />
      )}
    </div>
    <div className="flex space-x-4">
      {/* Render thumbnails */}
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => setSelectedImage(image)}
          className={`border-2 rounded-md p-1 ${
            selectedImage === image ? "border-pink-500" : "border-transparent"
          }`}
        >
          <Image src={image} alt={`Chair ${index + 1}`} width={50} height={50} />
        </button>
      ))}
    </div>
    </div>
  
    
   
          {/* Product Info Section */}
          <div className="space-y-4 text-gray-800 md:space-y-6">
            <h1 className="text-lg md:text-2xl font-semibold text-[#0D134E]">
              Ocean Breeze Sofa
            </h1>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-[#151875] font-semibold">(22)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base line-through text-[#FB2E86] font-semibold">
                $35.00
              </span>
              <span className="text-base md:text-lg text-[#151875] font-semibold">
                $32.00
              </span>
            </div>
            <div className="flex items-center gap-2">
            <h2 className="font-semibold mb-2 text-[#0D134E]">Quantity</h2>
            <input
            className="w-16 px-2 py-1 border rounded-md text-black text-xs sm:text-sm"
            min="1"
            type="number"
            placeholder="1"
          /> </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold mb-2 text-[#0D134E]">Fabric Color</h2>
              <div className="flex flex-row">
      <iframe className="bg-gray-500 w-5 h-5 m-2" title="Gray frame" />
      <iframe className="bg-blue-500 w-5 h-5 m-2" title="Blue frame" />
      <iframe className="bg-slate-200 w-5 h-5 m-2" title="Slate frame" />
      <iframe className="bg-black w-5 h-5 m-2" title="Black frame" />
       <iframe className="bg-pink-500 w-5 h-5 m-2" title="Pink frame" />
</div>

            </div>
            <div className="flex items-center gap-2 w-30">
            <p className="text-sm text-gray-800 md:text-base text-[#A9ACC6]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur aliquam atque quisquam! Necessitatibus quod nostrum dolore animi aliquid distinctio modi! Accusantium iste modi, fuga porro maxime quaerat quo ducimus, hic.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-base md:text-lg font-semibold text-pink bg-pink-500 px-4 py-2 rounded-md text-white"  onClick={()=>router.push("/cart")}>
                Add To Cart
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart text-lg md:text-2xl text-pink cursor-pointer active:text-red-600"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
          </div>
          </div>
          </div>
           <section className="py-12 text-gray-800 px-4 md:py-20">
                  <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Related Products</h2>
                    <div className="relative">
                      <div className="overflow-hidden">
                        <div
                          className="flex transition-transform duration-500"
                          style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                          }}
                        >
                          {slides.map((slide, index) => (
                            <div key={index} className="min-w-full">
                              <div className="rounded-xl border bg-card text-card-foreground">
                                <div className="flex flex-col items-center p-6 text-[#8A8FB9]">
                                  <Image
                                    alt={`${slide.name} profile`}
                                    src={slide.image}
                                    width={200}
                                    height={200}
                                    className="bg-center"
                                  />
                                  <h3 className="text-xl text-gray-800 font-semibold mb-1">{slide.name}</h3>
                                  
                                  <p className="text-center text-gray-800 ">{slide.price}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                     
                {/* Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-900"
                  aria-label="Previous"
                >
                  &#60;
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-900"
                  aria-label="Next"
                >
                  &#62;
                </button>
                     
                    </div>
                  </div>
                </section>
      <Footer />
    </div>
  );
};

export default Productdetail;

   
    