"use client"; // Marks this as a Client Component


import React, { useState } from 'react';
import Image from 'next/image';
import Connect from "../../public/connect.webp";  // Referencing static assets from the public folder
import Footer from "../Footer";
import Navbar from "../navbar";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message Sent!');
    
    // Optionally, add your API call here
    
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="w-full bg-gray-50">
     <Navbar />
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Contact Us</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">Contact Us</span>
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-12 flex flex-wrap gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#151875] mb-4">Information About Us</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <div className="flex gap-2 mb-8">
            <span className="w-3 h-3 rounded-full bg-[#5625DF]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FF27B7]"></span>
            <span className="w-3 h-3 rounded-full bg-[#37DAF3]"></span>
          </div>

          <h2 className="text-2xl font-bold text-[#151875] mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor lobortis quis bibendum quam.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              placeholder="Your Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded-md p-3 outline-none text-sm"
              type="text"
              required
            />
            <input
              placeholder="Your E-mail*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded-md p-3 outline-none text-sm"
              type="email"
              required
            />
            <input
              placeholder="Subject*"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded-md p-3 outline-none text-sm"
              type="text"
              required
            />
            <textarea
              placeholder="Type your message*"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border text-black border-gray-300 rounded-md p-3 outline-none text-sm"
              required
            ></textarea>
            <button type="submit" className="bg-[#FB2E86] text-white py-3 px-8 rounded-md hover:bg-[#F94C9B] transition-colors">
              Send Mail
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#151875] mb-8">Contact Way</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#5726DF]"></span>
              <div className="text-gray-600">
                <p>Tel: 877-67-88-99</p>
                <p>E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#FB2E86]"></span>
              <div className="text-gray-600">
                <p>Support Forum</p>
                <p>For over 24hr</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#FFB265]"></span>
              <div className="text-gray-600">
                <p>20 Margaret st, London</p>
                <p>Great Britain, 3NM98-LK</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#1BE982]"></span>
              <div className="text-gray-600">
                <p>Free standard shipping</p>
                <p>on all orders</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              alt="Connect"
              loading="lazy"
              width={500}
              height={500}
              src={Connect}
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>

      {/* Location Section */}
      <section className="py-12 bg-[#F4F7FE]">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#151875] mb-6">Our Location</h2>
          <p className="text-lg text-gray-700 mb-4">Visit us at our office:</p>
          <p className="text-lg text-[#151875] font-semibold">1234 Street Name, City, Country</p>
          <div className="mt-8">
            {/* Embed a map here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799140074!2d-74.2598755!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBfMzc1XzQwLjY0JzE3LjI3NjU4Nzg2Nzg0NDcxOTc!5e0!3m2!1sen!2sus!4v1606807043202!5m2!1sen!2sus"
              width="600"
              height="450"
              allowFullScreen={true}
              title="Google Map Location"
              className="w-full h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-md framemap"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
