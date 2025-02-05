import React from 'react'
import Footer from "../Footer";
import Image from 'next/image';
import Navbar from "../navbar";
import Link from 'next/link'; // Using Next.js Link
import Brands from "../../public/image.png";
const Confirmation = () => {
  return (
    <div className="w-full bg-gray-50">
          <Navbar />
          <div className='w-full px-4 py-8 md:py-12 lg:py-16 bg-white shadow-lg'>
          <div className="max-w-7xl mx-auto relative">
      {/* Clock Icon */}
      <div className="absolute left-0 top-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-8 h-8 md:w-12 md:h-12 text-blue-600">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center space-y-6 pt-12 md:pt-16">
        <div className="mb-4">
          {/* Check Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-12 h-12 md:w-16 md:h-16 text-pink-500">
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">Your Order Is Completed!</h1>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
        </p>

        {/* Continue Shopping Button */}
        <Link href="/shop">
       
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded text-lg">
              Continue Shopping
            </button>
         
        </Link>
      </div>

      {/* Clipboard Icon */}
      <div className="absolute right-0 bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check w-8 h-8 md:w-12 md:h-12 text-pink-500">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <path d="m9 14 2 2 4-4"></path>
        </svg>
      </div>
    </div>
    <div className="w-full py-12 bg-white" >
      <div className="max-w-screen-xl mx-auto flex justify-center">
        <Image
          alt="Logos"
          loading="lazy"
          width="800"
          height="100"
          decoding="async"
          data-nimg="1"
          className="object-contain"
        
          src={Brands}
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
    </div>
          <Footer />
          </div>
  )
}

export default Confirmation