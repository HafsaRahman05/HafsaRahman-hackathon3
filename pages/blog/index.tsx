import React from "react";
import Navbar from "../navbar";
import LatestBlog from "../latestblog";
import Footer from "../Footer";



function Blog() {

  return (

    <div>
         <Navbar />
         <LatestBlog limit={6} />
         <Footer />
    </div>

        );
}

export default Blog;