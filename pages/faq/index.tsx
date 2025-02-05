"use client"; // Marks this as a Client Component


import React from 'react';
import Footer from "../Footer";
import Navbar from "../navbar";
const Faq = () => {


return(
        (
          <div className="w-full bg-gray-50">
          <Navbar />
           <div className="bg-gray-200 py-8">
             <div className="max-w-[1200px] mx-auto px-4">
               <h1 className="text-3xl font-bold text-[#101750] mb-2">FAQ</h1>
               <p className="text-sm text-black">
                 Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">FAQ</span>
               </p>
             </div>
           </div>
            <div className="flex   text-gray-700 flex-col md:flex-row justify-center p-8 gap-8">
              {/* Left Side: General Information */}
              <div className="flex-1 p-4 text-[#151875] border-r border-gray-300">
                <h2 className="text-2xl font-bold mb-4">General Information</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">Eu dictumst cum at sed euismod condimentum?</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">Magna bibendum est fermentum eros?</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">Odio muskana hak eris conseekin sceleton?</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">Elit id blandit sabara boi velit gua mara?</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                  </p>
                </div>
              </div>
        
              {/* Right Side: Ask a Question Form */}
              <div className="flex-1 p-4">
                <h2 className="text-2xl text-[#151875] font-bold mb-4">Ask a Question</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="mt-1 block-pin w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter the subject"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Type Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Email
                  </button>
                </form>
              </div>
            </div>
            <Footer />
            </div>
    )
)
}
export default Faq