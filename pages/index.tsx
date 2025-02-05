"use client"; 

import React from "react";
import Banner from "./banner";
import Featured_Product from "./FeaturedProduct/index"
import TrendingProducts from ".//trendingproduct";
import LatestProducts from ".//latestproduct";
import Navbar from "./navbar";
import LatestBlog from ".//latestblog";
import Page from "./product2/page"
import Footer from ".//Footer";
import deliveryicon from "../public/deliveryicon.png";
import moneyicon from "../public/moneyicon.png";
import badgeicon from "../public/badgeicon.png";
import houricon from "../public/24icon.png";
import chair8 from "../public/image (8).png";
import chairbrown from "../public/chairbrown.png";
import sofa from "../public/banner1.png";
import chair from "../public/chair4.png";
import table from "../public/voucher2.png";
import lamp from "../public/lamp.png";
import Brands from "../public/image.png"; 
import Image from "next/image";
import {useRouter} from 'next/navigation'


const offers = [
  {
    icon: deliveryicon,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    icon: moneyicon,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    icon: badgeicon,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    icon: houricon,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
];

function Home() {
    const router = useRouter(); // Initialize the navigate function

    // Handle click event
   // Redirect to the shop page

  return (

    
    <div className="Home bg-white">
 
    
 <Navbar />

      {/* newcode */}
      <Banner />
     
      <Featured_Product />
      <LatestProducts />

      {/* Discount Item */}

      <div className="w-full bg-white py-20">
      <h2 className="text-[#3F509E] text-4xl font-bold text-center mb-12">What Shopex Offer!</h2>
      <div className="w-[80%] lg:w-[1177px] max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {offers.map((offer, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center w-[270px] h-[320px] rounded-lg shadow-xl">
            <div className="w-16 h-16 mb-4">
              <Image
                alt={offer.title}
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                src={offer.icon}
                className="object-contain"
              />
            </div>
            <h3 className="text-[#3F509E] font-bold text-lg mb-2">{offer.title}</h3>
            <p className="text-gray-600 mx-4 text-sm">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>


    <div className="bg-gray-100 py-20">
      <div className="w-[80%] lg:w-[1050px] max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center items-center">
          
          <Image
            alt="Sofa"
            loading="lazy"
            width="400"
            height="400"
            decoding="async"
            className="relative z-10 object-contain"
           
            src={chair8}
            style={{ color: 'transparent' }}
          />
        </div>
        <div className="px-4 md:px-0">
          <h2 className="text-[#3F509E] text-3xl font-bold mb-6">Unique Features Of Latest & Trending Products</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">All frames constructed with hardwood solids and laminates.</p>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#3F509E] flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails.</p>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">Arms, backs, and seats are structurally reinforced.</p>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a>
              <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors"  onClick={()=>router.push("/cart")}>
                Add To Cart
              </button>
            </a>
            <div>
              <p className="text-[#3F509E] font-semibold text-sm">B&B Italian Sofa</p>
              <p className="text-[#3F509E] font-bold text-sm">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TrendingProducts />

    <div className="w-full flex justify-center bg-white items-center py-20">
      <div className="w-[80%] lg:w-[1177px] max-w-screen-xl mx-auto">
        <h2 className="text-[#3F509E] text-4xl font-bold text-center mb-8">Discount Item</h2>
        <div className="flex justify-center space-x-8 mb-12">
          <button className="relative text-lg font-medium text-gray-700 hover:text-pink-600">
            Wood Chair
            <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
            <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
          </button>
          <button className="relative text-lg font-medium text-gray-700 hover:text-pink-600">
            Plastic Chair
            <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
            <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
          </button>
          <button className="relative text-lg font-medium text-gray-700 hover:text-pink-600">
            Sofa Chair
            <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
            <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
          </button>
        </div>
        <div className="flex items-center justify-center flex-col-reverse md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-[#3F509E] text-3xl font-bold mb-4">20% Discount Of All Products</h3>
            <h4 className="text-pink-600 text-xl font-semibold mb-6">Eames Sofa Compact</h4>
            <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-gray-600 mb-6">Eu eget feugiat habitasse nec, bibendum condimentum.</p>
            <p className="text-gray-600 mb-2">✓ Material expose like metals.</p>
            <p className="text-gray-600 mb-2">✓ Clear lines and geometric figures.</p>
            <p className="text-gray-600 mb-2">✓ Simple neutral colours.</p>
            <p className="text-gray-600 mb-2">✓ Material expose like metals.</p>
            <ul className="space-y-4"></ul>
            <a href="/shoplist">
              <button className="px-6 py-2 bg-[#FB2E86] text-white font-text rounded-md shadow-md hover:bg-pink-600">
                Shop Now
              </button>
            </a>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-pink-100 w-[20%] h-[400px] -z-10 rounded-full discountsofa"></div>
            <Image
              alt="Discount Sofa"
              loading="lazy"
              width="450"
              height="500"
              decoding="async"
              className="object-contain"
             
              src={chairbrown}
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </div>


    {/* Top category */}

    <div className="w-full bg-white py-20">
      <h2 className="text-center text-[#3F509E] text-3xl font-bold mb-12">Top Categories</h2>
      <div className="w-[80%] lg:w-[1177px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 max-w-screen-xl mx-auto">
        
        {/* Category 1 */}
        <div className="relative group flex flex-col items-center w-[270px] h-[345px]">
          <div className="w-[269px] h-[269px] shadow-custom flex justify-center items-center bg-[#f7f6fb] rounded-full relative overflow-hidden">
            <Image
              alt="Mini LCW Chair" 
              loading="lazy" 
              width="145" 
              height="145" 
              className="object-cover" 
              src={sofa} 
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
            <button className="absolute bottom-6 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => router.push("/shop")}>
              View Shop</button>
          </div>
          <h3 className="text-[#151875] text-[30px] leading-6 font-bold mt-4">Sofa</h3>
          
        </div>

        {/* Category 2 */}
        <div className="relative group flex flex-col items-center w-[270px] h-[345px]">
          <div className="w-[269px] h-[269px] shadow-custom flex justify-center items-center bg-[#f7f6fb] rounded-full relative overflow-hidden">
             <Image
              alt="Mini LCW Chair" 
              loading="lazy" 
              width="145" 
              height="145" 
              className="object-cover" 
              src={chair} 
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
            <button className="absolute bottom-6 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => router.push("/shop")}
            >View Shop</button>
          </div>
          <h3 className="text-[#151875] text-[30px] leading-6 font-bold mt-4">Chair</h3>
          
        </div>

        {/* Category 3 */}
        <div className="relative group flex flex-col items-center w-[270px] h-[345px]">
          <div className="w-[269px] h-[269px] shadow-custom flex justify-center items-center bg-[#f7f6fb] rounded-full relative overflow-hidden">
             <Image
              alt="Mini LCW Chair" 
              loading="lazy" 
              width="145" 
              height="145" 
              className="object-cover" 
              src={table}  
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
            <button className="absolute bottom-6 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => router.push("/shop")}
            >View Shop</button>
          </div>
          <h3 className="text-[#151875] text-[30px] leading-6 font-bold mt-4">Table</h3>
          
        </div>

        {/* Category 4 */}
        <div className="relative group flex flex-col items-center w-[270px] h-[345px]">
          <div className="w-[269px] h-[269px] shadow-custom flex justify-center items-center bg-[#f7f6fb] rounded-full relative overflow-hidden">
             <Image
              alt="Mini LCW Chair" 
              loading="lazy" 
              width="145" 
              height="145" 
              className="object-cover" 
              src={lamp} 
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
            <button 
            className="absolute bottom-6 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => router.push("/shop")}
            >
              View Shop</button>
          </div>
          <h3 className="text-[#151875] text-[30px] leading-6 font-bold mt-4">Lamp</h3>
          
        </div>

      </div>

      <div className="flex justify-center mt-4">
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
      </div>
    </div>

    <div 
      className="w-full bg-cover bg-center py-20  bg-fixed sofaimage" 
      
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#151875] mb-6">
          Get Latest Update By Subscribe Our Newsletter
        </h2>
        <a href="/shoplist">
        <button
      className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors"
      
      onClick={()=>router.push("/cart")}>
      Add To Cart
    </button>
        </a>
      </div>
    </div>
    <LatestBlog limit={3} />

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
    <h2 className="text-[#3F509E] text-[30px] md:text-[40px] leading-[49.22px] text-center mb-12 font-bold">Product From API Data</h2>
    <Page />
    <Footer />

   
        </div>

        );
}

export default Home;

