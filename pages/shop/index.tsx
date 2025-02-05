"use client"; // Marks this as a Client Component


import React, { useState } from 'react';

import Page from "../product2/page"
import Footer from "../Footer";
import Navbar from "../navbar";
const ShopList = () => {

     const [perPage, setPerPage] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>('best-match');
    const [viewMode, setViewMode] = useState("grid"); // State to manage view mode

  
    const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPerPage(Number(event.target.value));
    };
  
    const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortBy(event.target.value);
    };
  
 
    return (
        <div className="w-full bg-gray-50">
         <Navbar />
          <div className="bg-gray-200 py-8">
            <div className="max-w-[1200px] mx-auto px-4">
              <h1 className="text-3xl font-bold text-[#101750] mb-2">Shop</h1>
              <p className="text-sm text-black">
                Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">Shop</span>
              </p>
            </div>
          </div>
          <section className="p-4 sm:p-6 md:p-8">
      <div className="mb-4 md:ml-[330px]">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Ecommerce Accessories &amp; Fashion item
        </h1>
        <p className="text-sm md:text-base text-gray-500">About 9,620 results (0.02 seconds)</p>
      </div>
      <div className="flex flex-wrap items-center md:justify-evenly gap-4">
        {/* Controls for Per Page and Sort By */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="text-gray-700 text-sm md:text-base">
              Per Page:
            </label>
            <select
              id="perPage"
              value={perPage}
              onChange={handlePerPageChange}
              className="border border-gray-300 rounded-md p-2 text-gray-700 md:text-base "
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-gray-700 text-sm md:text-base">
              Sort By:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={handleSortByChange}
              className="border border-gray-300 rounded-md p-2 text-gray-700 md:text-base "
            >
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
        </div>
        {/* View Mode Buttons */}
        <div className="flex items-center gap-4">
          <label htmlFor="view" className="text-gray-700 text-sm md:text-base">
            View:
          </label>
          <button className={`px-4 py-2 border rounded-md ${
            viewMode === "grid" ? "bg-gray-300 text-white" : "bg-white text-[#FB2E86]"
          }`}
          onClick={() => setViewMode("grid")}
        >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M204 240H68a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36zm240 0H308a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36zM204 480H68a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36zm240 0H308a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36z"></path>
            </svg>
          </button>
          <button
            className={`px-4 py-2 border rounded-md ${
              viewMode === "list" ? "bg-gray-300 text-white" : "bg-white text-[#FB2E86]"
            }`}
            onClick={() => setViewMode("list")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
            </svg>
          </button>
          <label htmlFor="input-field" className="sr-only">
            input 
          </label>
          <input
            id="input-field"
            type="text"
            placeholder=""
            className="border w-[80%] border-gray-300 rounded-md p-2 text-gray-700 md:text-base"
          />
        </div>
      </div>
      <Page />
      </section>
          <Footer />
    </div>
  );
};

export default ShopList;
