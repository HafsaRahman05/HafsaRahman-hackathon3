"use client"; // Marks this as a Client Component


import React from 'react';
import Image from "next/image";
import blog1 from "../../public/blogpage1.jpeg"
import blog2 from "../../public/blogpage2.jpeg"
import blog3 from "../../public/blogpage3.jpeg"
import blog4 from "../../public/blogside1.jpeg"
import blog5 from "../../public/blogside2.jpeg"
import blog6 from "../../public/blogside3.jpeg"
import blog7 from "../../public/blogside4.jpeg"
import blog8 from "../../public/blogside5.jpeg"
import blog9 from "../../public/blogside6.jpeg"
import blog10 from "../../public/blogside7.jpeg"
import blogproduct1 from "../../public/blogproduct1.jpeg"
import blogproduct2 from "../../public/blogproduct2.jpeg"
import blogproduct3 from "../../public/blogproduct3.jpeg"
import blogproduct4 from "../../public/blogproduct4.jpeg"
import Footer from "../Footer";
import Navbar from "../navbar";



function BlogPage() {
  const blogPosts = [
    { id: 1, image: blog1, title: "Mauris at orci non vulputate diam tincidunt nec", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien lectus, sed sollicitudin velit dictum ut. Curabitur...", link: "#" },
    { id: 2, image: blog2, title: "Aenean vitae in aliquam ultrices lectus. Etiam.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien lectus, sed sollicitudin velit dictum ut. Curabitur...", link: "#" },
    { id: 3, image: blog3, title: "Sit nam congue feugiat nisl, mauris amet nisi.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien lectus, sed sollicitudin velit dictum ut. Curabitur...", link: "#" },
  ];

  const sideBlogs = [
    { id: 1, image: blog4, content: "This is a blog established here", link: "#" },
    { id: 2, image: blog5, content: "This is a blog established here", link: "#" },
    { id: 3, image: blog6, content: "This is a blog established here", link: "#" },
    { id: 4, image: blog7, content: "This is a blog established here", link: "#" },
  ];

  const saleProducts = [
      { id: 1, image: blog8, title: "Best product of month March", price: "$99.00", link: "#" },
      { id: 2, image: blog9, title: "Premium publisher of month", price: "$89.00", link: "#" },
      { id: 3, image: blog10, title: "Super labtop silver ProXL", price: "$129.00", link: "#" },
  ];

    const otherProducts = [
        { id: 1, image: blogproduct1, title: "Quick link set", link: "#" },
        { id: 2, image: blogproduct2, title: "Bag presents", link: "#" },
        { id: 3, image: blogproduct3, title: "Shoes green", link: "#" },
        { id: 4, image: blogproduct4, title: "Phone in", link: "#" },
    ];
  return (
    <div className="w-full bg-gray-50">
      <Navbar />
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Blog</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">Blog</span>
          </p>

        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <main className="space-y-10">
  {blogPosts.map((blog) => (
    <article key={blog.id} className="space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          alt={blog.title}
          src={blog.image}
          layout="fill"
          objectFit="cover"
          quality={75}
          sizes="(min-width: 1024px) 66vw, 100vw"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="text-purple-600">Self Access</span>
          <div className="flex text-gray-600 items-center gap-1">
            {/* ... (Calendar SVG remains unchanged) */}
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-purple-800 hover:text-purple-600">
          <a href={blog.link}>{blog.title}</a>
        </h2>
        <p className="text-gray-600">{blog.content}</p>
        <a className="inline-block text-sm font-medium text-purple-600 hover:text-purple-800" href={blog.link}>
          Read More →
        </a>
      </div>
    </article>
  ))}
</main>

          <aside className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-800">Search</h2>
              <input
                className="flex h-9 rounded-md border-gray-900 border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm text-black file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed  disabled:opacity-50 md:text-sm w-full"
                placeholder="Search..."
                type="search" />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-800">Categories</h2>
              <div className="space-y-2">
                <a className="block text-gray-600 hover:text-purple-600" href="#">
                  November 2023
                </a>
                <a className="block text-gray-600 hover:text-purple-600" href="#">
                  October 2023
                </a>
                <a className="block text-gray-600 hover:text-purple-600" href="#">
                  September 2023
                </a>
              </div>
            </div>
            
            
           {/* Side Blogs */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold text-purple-800">Recent Post</h2>
  <div className="space-y-4">
    {sideBlogs.map((sideBlog) => (
      <a key={sideBlog.id} className="flex gap-3 group" href={sideBlog.link}>
        <div className="relative h-[60px] w-[100px] flex-shrink-0 overflow-hidden rounded-md">
          <Image
            alt="Recent blog"
            src={sideBlog.image}
            layout="fill"
            objectFit="cover"
            className="transition-transform group-hover:scale-105"
            quality={75}
          />
        </div>
        <p className="text-sm text-gray-600 group-hover:text-purple-600">{sideBlog.content}</p>
      </a>
    ))}
  </div>
</div>

{/* Sale Products */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold text-purple-800">Sale Product</h2>
  <div className="space-y-4">
    {saleProducts.map((saleProduct) => (
      <a key={saleProduct.id} className="flex gap-3 group" href={saleProduct.link}>
        <div className="relative h-[60px] w-[100px] flex-shrink-0 overflow-hidden rounded-md">
          <Image
            alt="Sale Product"
            src={saleProduct.image}
            layout="fill"
            objectFit="cover"
            className="transition-transform group-hover:scale-105"
            quality={75}
          />
        </div>
        <div>
          <p className="text-sm text-gray-600 display-flex deflex-coloum group-hover:text-purple-600">
            {saleProduct.title}
          </p>
          <p className="text-sm text-purple-600 display-flex deflex-coloum group-hover:text-purple-600">
            {saleProduct.price}
          </p>
        </div>
      </a>
    ))}
  </div>
</div>

{/* Other Products */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold text-purple-800">Other Product</h2>
  <div className="grid grid-cols-2 gap-4">
    {otherProducts.map((otherProduct) => (
      <div key={otherProduct.id} className="space-y-2">
        <a className="group block" href={otherProduct.link}>
          <div className="relative aspect-square overflow-hidden rounded-md">
            <Image
              alt={otherProduct.title}
              src={otherProduct.image}
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-105"
            />
          </div>
          <p className="mt-2 text-center text-sm text-gray-600 group-hover:text-purple-600">
            {otherProduct.title}
          </p>
        </a>
      </div>
    ))}
  </div>
</div>

              
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-800">Follow</h2>
              <div className="flex gap-4">
                <a className="text-pink-600  hover:text-white-600" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-4.5 rounded-full bg-pink-600 hover:bg-pink-500 object-cover"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  {/*instagram logo */}
                </a>
                <a className="text-white-900  hover:text-white-600" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="0.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-4.5 rounded-full bg-purple-900 hover:bg-purple-800 object-cover"
                  >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  {/*facebook logo */}
                </a>
                <a className="text-blue-600 hover:text-blue-600" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-4.5 rounded-full bg-blue-600 hover:bg-blue-500 object-cover"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  {/*twitter logo */}
                </a>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-purple-800">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="px-3 py-1 text-sm underline text-purple-600 rounded-full  hover:text-pink-600"
                    href="#"
                  >
                    General
                  </a>
                  <a
                    className="px-3 py-1 text-sm underline text-purple-600 rounded-full  hover:text-pink-600"
                    href="#"
                  >
                    Lifestyle
                  </a>
                  <a
                    className="px-3 py-1 text-sm underline text-purple-600 rounded-full  hover:text-pink-600"
                    href="#"
                  >
                    Fashion
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="px-3 py-1 text-sm underline text-purple-600 rounded-full  hover:text-purple-600"
                    href="#"
                  >
                    Design
                  </a>
                  <a
                    className="px-3 py-1 text-sm underline text-purple-600 rounded-full  hover:text-purple-600"
                    href="#"
                  >
                    Media
                  </a>
                </div>
              </div>

            </div>

          </aside>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default BlogPage;
