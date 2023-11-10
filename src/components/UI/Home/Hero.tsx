'use client'

import Image from "next/image";
import banner from "@/assets/hero-image.jpg"
import Header from "../Headers/Header";
import Link from "next/link";

const Hero = () => {
    return (
        <div>
            <Header />
            <div className="mx-auto container lg:pt-20">
                <div className="relative">
                    <Image layout="responsive" quality={100} width={500} height={400} src={banner} alt="" className="w-full h-full object-center object-fill absolute sm:block hidden" />
                    <div className="text-xl relative z-20 bg-gradient-to-r from-[#0f337a] to-transparent w-full h-full top-0 lg:px-16 lg:pt-36 pb-56 p-6 flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl leading-tight sm:text-4xl md:text-5xl xl:text-5xl font-bold text-white">
                                Your Gateway to <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 from-20% via-yellow-400 via-30% to-yellow-300">Unforgettable </span> Adventures!
                                <p className="mt-4">
                                    Embark with <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 from-20% via-yellow-400 via-30% to-yellow-300">Wayfarer Travels. </span>
                                </p>
                            </h1>
                            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">Your Passport to Adventure and Exploration! Discover captivating destinations, create lasting memories, and experience the worlds wonders with our expertly crafted travel experiences.</p>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <Link href={"/package"} className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded-full px-6 py-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">Explore More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;