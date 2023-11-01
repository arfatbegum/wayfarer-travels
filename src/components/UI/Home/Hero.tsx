'use client'

import Image from "next/image";
import banner from "@/assets/banner.jpg"
import Header from "../Headers/Header";

const Hero = () => {
    return (
        <div>
            <Header />
            <div className="relative bg-white">
                <Image src={banner} alt="Hero image" width="2350" height="2359"
                    className="absolute w-full object-cover min-h-screen h-96" />
                <div className="mx-auto py-44 lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 flex  lg:flex-row gap-10 lg:gap-12">
                    <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:w-1/2">
                        <h1 className="text-2xl leading-tight sm:text-4xl md:text-5xl xl:text-5xl font-bold text-gray-900">
                            Embark on <span
                                className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-[#0f337a] via-30% to-[#0f337a]">Unforgettable </span>
                            Journeys with Wayfarer Travels.
                        </h1>
                        <p className="mt-8 text-gray-700">
                            Your Passport to Adventure and Exploration! Discover captivating destinations, create lasting memories, and experience the worlds wonders with our expertly crafted travel experiences.
                        </p>
                        <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                            <div className="flex sm:flex-row flex-col gap-5 w-full">

                                <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-[#0f337a] border-transparent hover:border-[#172554]">
                                    <span className="hidden sm:flex relative z-[5]">
                                        Discover more
                                    </span>
                                    <span className="flex sm:hidden relative z-[5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;