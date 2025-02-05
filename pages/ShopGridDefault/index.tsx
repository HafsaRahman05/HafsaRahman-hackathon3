"use client"; // Marks this as a Client Component


import React, { useState } from 'react';
import Image from 'next/image';
import SGD1 from '../../public/SGD1.png';
import SGD2 from '../../public/SGD2.png';
import SGD3 from '../../public/SGD3.png';
import SGD4 from '../../public/SGD4.png';
import SGD5 from '../../public/SGD5.png';
import SGD6 from '../../public/SGD6.png';
import SGD7 from '../../public/SGD7.png';
import SGD8 from '../../public/SGD8.png';
import SGD9 from '../../public/SGD9.png';
import SGD10 from '../../public/SGD10.png';
import SGD11 from '../../public/SGD11.png';
import SGD12 from '../../public/SGD12.png';
import Footer from "../Footer";
import Navbar from "../navbar";
const ShopGridDefault = () => {

    const [perPage, setPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('best-match');
  const [viewMode, setViewMode] = useState<string>('grid');

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(event.target.value));
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleViewChange = (mode: string) => {
    setViewMode(mode);
  };
    
  return (

    <div className="w-full bg-gray-50">
     <Navbar />
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Shop Grid Default</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">Shop Grid Default</span>
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
       {/* Controls for Per Page and Sort By  */}
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
          <button
            id="gridView"
            className={`border border-gray-300 rounded-md p-2 hover:bg-gray-100 ${
              viewMode === 'grid' ? 'bg-gray-100' : ''
            }`}
            aria-label="Grid View"
            onClick={() => handleViewChange('grid')}
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
            id="listView"
            className={`border border-gray-300 rounded-md p-2 hover:bg-gray-100 ${
              viewMode === 'list' ? 'bg-gray-200' : ''
            }`}
            aria-label="List View"
            onClick={() => handleViewChange('list')}
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
          <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">Your Label</label>
          <input
            type="text"
            id="inputField"
            placeholder=""
            className="border border-gray-300 rounded-md p-2 text-gray-700 md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </section>
    <section className="w-full px-4 py-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD1.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Vel elit euismod
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
        
        
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD2.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Ultricies condimentum imperdiet
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
        
        
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD3.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Vitae suspendisse sed
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
        
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD4.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Sed at fermentum
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
       
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD5.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Fusce pellentesque at
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
        
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD6.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Vestibulum magna laoreet
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
        
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD7.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Sollicitudin amet orci
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
       
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD8.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Ultrices mauris sit
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
       
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD9.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Pellentesque condimentum ac
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
        
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD10.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Cras scelerisque velit
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
        
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD11.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Lectus vulputate faucibus
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
       
          <div
            
            className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
              <Image
                alt={`shop grid default`}
                src={SGD12.src}
                loading="lazy"
                width="200"
                height="200"
                className="h-[180px] w-[150px] object-cover object-center transition-transform duration-200 group-hover:scale-105"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-4 space-y-2 flex justify-center flex-col items-center">
              <h3 className="text-gray-900 line-clamp-2 font-bold text-[17px]">
              Purus risus, ut
              </h3>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(222, 144, 52)' }}
                  title="#ff0000"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(236, 66, 162)' }}
                  title="#0000ff"
                />
                <span
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: 'rgb(133, 104, 255)' }}
                  title="#000000"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-600">$45.00</span>
                <span className="text-sm text-pink-500 line-through">$50.00</span>
              </div>
            </div>
          </div>
       
      </div>
    </section>

      <Footer />
      </div>
    );
};

export default ShopGridDefault;
