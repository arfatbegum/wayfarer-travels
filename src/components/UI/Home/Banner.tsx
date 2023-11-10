import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="mx-auto container p-10">
            <div className="relative rounded-md">
                <Image quality={100} width={500} height={200} src="https://i.ibb.co/CpcTvnk/0x0.jpg" alt="" className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden" />
                <div className="text-xl relative z-20 bg-gradient-to-r from-[#0f337a] to-transparent w-full h-full top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                    <div>
                        <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Book Before It’s Too Late!</h1>
                        <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">Your Passport to Adventure and Exploration! Discover captivating destinations, create lasting memories, and experience the worlds wonders with our expertly crafted travel experiences.</p>
                    </div>
                    <div className="md:mt-12 mt-20">
                        <Link href={"/package"} className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded-full px-6 py-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">Explore More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;