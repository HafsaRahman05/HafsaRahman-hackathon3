"use client"; // Marks this as a Client Component

import { useState } from 'react';
import Image from 'next/image';
import Aboutimg from "../../public/about.webp";
import Footer from "../Footer";
import Navbar from "../navbar";
import deliveryicon from "../../public/deliveryicon.png";
import moneyicon from "../../public/moneyicon.png";
import badgeicon from "../../public/badgeicon.png";
import houricon from "../../public/24icon.png";
import client from "../../public/client.jpeg";
import client2 from "../../public/client2.jpeg";
import client3 from "../../public/client3.jpeg";
import {useRouter} from 'next/navigation'
const About = () => {
    const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    {
      icon: deliveryicon,
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    },
    {
      icon: moneyicon,
      title: 'Affordable Prices',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    },
    {
      icon: badgeicon,
      title: 'Quality Assurance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    },
    {
      icon: houricon,
      title: 'Fast Delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    },
  ];

  const slides = [
    {
      name: "Selina Gomez",
      role: "Lead Art Director, Digital",
      image: client3,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu.",
    },
    {
      name: "Alen",
      role: "Local Developer",
      image: client2,
      feedback:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sit amet ultricies nisi.",
    },
    {
      name: "John Smith",
      role: "Senior Developer",
      image: client,
      feedback:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sit amet ultricies nisi.",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-gray-50">
      <Navbar />
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">About Us</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">About</span>
          </p>
        </div>
      </div>
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="relative rounded-2xl bg-white p-4 md:p-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Image Section */}
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
              <Image
                alt="Connect"
                loading="lazy"
                width={500}
                height={500}
                src={Aboutimg}
              />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-2xl font-bold text-blue-900 md:text-3xl lg:text-4xl">
                Know About Our Ecommerce Business, History
              </h2>
              <p className="text-muted-foreground md:text-lg flex flex-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam.
              </p>
              <div>
                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground shadow h-10 rounded-md px-8 bg-pink-500 hover:bg-pink-600" onClick={()=>router.push("/contact")}>
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <div className="w-full bg-white py-20">
        <h2 className="text-[#3F509E] text-4xl font-bold text-center mb-12">What Shopex Offer!</h2>
        <div className="w-[80%] lg:w-[1177px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {offers.map((offer, index) => (
            <div key={index} className="flex flex-col items-center text-center w-[270px] h-[320px] rounded-lg shadow-xl">
              <div className="w-16 h-16 mb-4">
                <Image
                  alt={offer.title}
                  loading="lazy"
                  width="64"
                  height="64"
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

      {/* Testimonials Section */}
      <section className="py-12 text-[#3F509E] px-4 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Client Say!</h2>
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
                        <h3 className="text-xl text-black font-semibold mb-1">{slide.name}</h3>
                        <p className="text-sm text-black">{slide.role}</p>
                        <p className="text-center text-black">{slide.feedback}</p>
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

export default About;
