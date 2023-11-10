import { GiDetour } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi';
import { MdShareLocation } from 'react-icons/md';
import Image from 'next/image';

const Overview = () => {
    return (
        <div className="container mx-auto p-10">
            <div className="text-center mb-10">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Overview Of Wayfarer Travels</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Embark on a journey through the comprehensive overview of Wayfarer Travels, your gateway to a world of remarkable adventures</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-[#0f337a] inline-flex"></div>
                </div>
            </div>
            <div className="relative rounded-md">
                <Image quality={100} width={500} height={200} src="https://i.ibb.co/Y29Ky72/5f1e4fc16c621ca1199aff3d-aerial-photography-sand-bars-maldives.jpg" alt="" className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden" />
                <div className="text-xl relative z-20 bg-gradient-to-b from-[#0f337a] to-transparent w-full h-full top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                    <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-2  lg:gap-3 text-center md:space-y-0 space-y-6">
                        <div className="text-center p-4 pb-5 border-2 border-gray-200 border-opacity-60 rounded-lg bg-white shadow-sm flex flex-col">
                            <FaUsers className="p-2 text-8xl font-bold text-yellow-400 text-center mx-auto mb-3" />
                            <h2 className="title-font font-semibold sm:text-4xl text-3xl text-[#0f337a]">2.7K</h2>
                            <p className="leading-relaxed">Travellers</p>
                        </div>
                        <div className="p-4 pb-5 border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border shadow-sm flex flex-col">
                            <GiDetour className="p-2 text-8xl font-bold text-yellow-400 text-center mx-auto mb-3" />
                            <h2 className="title-font font-semibold sm:text-4xl text-3xl text-[#0f337a]">1.8K</h2>
                            <p className="leading-relaxed">Tours</p>
                        </div>
                        <div className="p-4 pb-5  border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border shadow-sm flex flex-col">
                            <FiPackage className="p-2 text-8xl font-bold text-yellow-400 text-center mx-auto mb-3" />
                            <h2 className="title-font font-semibold sm:text-4xl text-3xl text-[#0f337a]">1.4K</h2>
                            <p className="leading-relaxed">Packages</p>
                        </div>
                        <div className="p-4 pb-5  border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border shadow-sm flex flex-col">
                            <MdShareLocation className="p-2 text-8xl font-bold text-yellow-400 text-center mx-auto mb-3" />
                            <h2 className="title-font font-semibold sm:text-4xl text-3xl text-[#0f337a]">3.5k</h2>
                            <p className="leading-relaxed">Locations</p>
                        </div>
                        <div className="p-4 pb-5  border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border shadow-sm flex flex-col">
                            <BiCategoryAlt className="p-2 text-8xl font-bold text-yellow-400 text-center mx-auto mb-3" />
                            <h2 className="title-font font-semibold sm:text-4xl text-3xl text-[#0f337a]">1.1k</h2>
                            <p className="leading-relaxed">Categories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;