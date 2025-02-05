
import Image from 'next/image';

function Trendingproduct () {
    return (
        <div className="flex items-center justify-center bg-white py-20">
            <div className="w-[80%] lg:w-[1177px]">
                <h2 className="text-[#3F509E] text-3xl font-bold text-center mb-16">Trending Products</h2>
                <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-12 mb-20">
                   
                    <div className="group relative shadow-custom w-[270px] h-[350px] flex items-center justify-center flex-col">
                        <div className="bg-gray-200 flex justify-center items-center p-6 h-[244px] w-[247px] relative">
                            <Image
                                alt="Trending Product"
                                loading="lazy"
                                width={200}
                                height={200}
                                className="object-contain transition-all duration-300 group-hover:opacity-90"
                                src="/chair4.png"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
                            <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
                            <span className="text-gray-500 line-through ml-2">$42.00</span>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="group relative shadow-custom w-[270px] h-[350px] flex items-center justify-center flex-col">
                        <div className="bg-gray-200 flex justify-center items-center p-6 h-[244px] w-[247px] relative">
                            <Image
                                alt="Trending Product"
                                loading="lazy"
                                width={200}
                                height={200}
                                className="object-contain transition-all duration-300 group-hover:opacity-90"
                                src="/chair5.png"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
                            <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
                            <span className="text-gray-500 line-through ml-2">$42.00</span>
                        </div>
                    </div>

 {/* Product 2 */}
 <div className="group relative shadow-custom w-[270px] h-[350px] flex items-center justify-center flex-col">
                        <div className="bg-gray-200 flex justify-center items-center p-6 h-[244px] w-[247px] relative">
                            <Image
                                alt="Trending Product"
                                loading="lazy"
                                width={200}
                                height={200}
                                className="object-contain transition-all duration-300 group-hover:opacity-90"
                                src="/chair7.png"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
                            <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
                            <span className="text-gray-500 line-through ml-2">$42.00</span>
                        </div>
                    </div>


 {/* Product 2 */}
 <div className="group relative shadow-custom w-[270px] h-[350px] flex items-center justify-center flex-col">
                        <div className="bg-gray-200 flex justify-center items-center p-6 h-[244px] w-[247px] relative">
                            <Image
                                alt="Trending Product"
                                loading="lazy"
                                width={200}
                                height={200}
                                className="object-contain transition-all duration-300 group-hover:opacity-90"
                                src="/chair6.png"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
                            <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
                            <span className="text-gray-500 line-through ml-2">$42.00</span>
                        </div>
                    </div>

                    {/* Repeat similar blocks for other products */}
                </div>

                <div className="w-full max-w-screen-xl lg:w-[1177px] mx-auto grid grid-cols-1 place-items-center md:flex md:items-center md:justify-between md:flex-wrap gap-6">
                    {/* Discount Block 1 */}
                    <div className="bg-[#fff6fb] p-8 flex flex-col justify-between relative w-full md:w-[420px] h-[270px] shadow-custom">
                        <div className="top-[34px] left-4 w-[269px] h-[56px]">
                            <h3 className="text-[#151857] text-2xl font-semibold font-sans text-center mb-4">
                                23% Off in all products
                            </h3>
                            <button className="text-pink-600 underline text-sm font-semibold text-center font-sans">Shop Now</button>
                        </div>
                        <Image
                            alt="Voucher Image"
                            loading="lazy"
                            width={200}
                            height={200}
                            className="absolute top-20 left-[120px] object-contain"
                            src="/voucher.png"
                        />
                    </div>

                    {/* Discount Block 2 */}
                    <div className="bg-[#eeeffb] p-8 flex flex-col justify-between relative w-full md:w-[420px] h-[270px] shadow-custom">
                        <div className="top-[34px] left-6 w-[269px] h-[56px]">
                            <h3 className="text-[#151857] text-2xl font-semibold font-sans text-center mb-4">
                                23% Off in all products
                            </h3>
                            <button className="text-pink-600 underline text-sm font-semibold text-center font-sans">Shop Now</button>
                        </div>
                        <Image
                            alt="Voucher Image"
                            loading="lazy"
                            width={200}
                            height={200}
                            className="absolute bottom-6 right-2 object-contain"
                            src="/voucher2.png"
                        />
                    </div>

                    {/* Repeat similar blocks for other components */}
                </div>
            </div>
        </div>
    );
};

export default Trendingproduct;
