import Image from "next/image";
import image from "@/assets/about.png"
import { FaFontAwesomeFlag, FaRegUser, FaRegAddressBook } from 'react-icons/fa';

const Intro = () => {
    return (
        <div className="text-gray-600 body-font lg:pr-16 my-12">
            <div className="container mx-auto flex md:flex-row flex-col items-center pb-12">
                <div className="lg:w-1/2 w-full mb-10 md:mb-0 lg:p-14 ">
                    <Image
                        width={500}
                        height={500}
                        alt="gallery"
                        className="w-full object-cover h-full object-center block rounded"
                        src={image}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    <p className="font-md font-semibold mb-3 text-lg text-[#0f337a]">About Us</p>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                        Embark on Unforgettable Journeys with
                        <br className="hidden lg:inline-block" />Wayfarer Travels
                    </h1>
                    <p className="mb-8 leading-relaxed"> Your Gateway to Unforgettable Adventures! At Wayfarer, we are passionate about crafting memorable journeys. With years of experience and a deep love for travel, we specialize in curating extraordinary adventures that cater to your every need. Our team of experts is dedicated to providing you with personalized and hassle-free travel experiences, offering a wide range of destinations and services to suit your preferences. We believe that every journey should be a story to tell, and we are here to help you create your own unforgettable tales.</p>
                    <div className="flex justify-center">
                        <div className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                            <a>
                                <span className="bg-indigo-100 text-[#0f337a] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Passionate Travel Experts
                            </a>
                            <a>
                                <span className="bg-indigo-100 text-[#0f337a] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Worldwide Destinations
                            </a>
                            <a>
                                <span className="bg-indigo-100 text-[#0f337a] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Tailored Travel Experiences
                            </a>
                            <a>
                                <span className="bg-indigo-100 text-[#0f337a] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Customer-Centric Approach
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:pl-16">
                <div className="relative">
                    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                        <div className="z-20 w-12 h-12 bg-indigo-100 text-[#0f337a] rounded-full flex justify-center items-center">
                            <FaFontAwesomeFlag classNmae="text-3xl" />
                        </div>
                        <div className="z-20 w-12 h-12 bg-indigo-100 text-[#0f337a] rounded-full flex justify-center items-center">
                            <FaRegAddressBook classNmae="text-3xl" />
                        </div>
                        <div className="z-20 w-12 h-12 bg-indigo-100 text-[#0f337a] rounded-full flex justify-center items-center">
                            <FaRegUser classNmae="text-3xl" />
                        </div>
                    </div>
                    <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Founded</p>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">50M montly enrichments</p>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="sm:block hidden">
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k User</p>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className="sm:hidden block relative mt-8">
                    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                        <div className="z-20 w-12 h-12 bg-indigo-100 text-[#0f337a] rounded-full flex justify-center items-center">
                            <FaRegUser />
                        </div>
                    </div>
                    <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
                </div>
                <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k User</p>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;