"use client"; 

import React from "react";
import Navbar from "../navbar";
import Featured_Product from "../FeaturedProduct";
import TrendingProducts from "../trendingproduct";
import LatestProducts from "../latestproduct";
import Footer from "../Footer";



function Product() {

  return (

    <div>
         <Navbar />
         <Featured_Product />
         <LatestProducts />
         <TrendingProducts />
         <Footer />
    </div>

        );
}

export default Product;
