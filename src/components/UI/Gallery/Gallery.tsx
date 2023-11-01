import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <div className="text-gray-600 body-font">
            <div className="text-center">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Our Gallery</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Our gallery showcases the mesmerizing beauty and diversity of destinations we curate for your unforgettable journeys. Each image in our gallery is a glimpse of the extraordinary adventures awaiting you!</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-[#0f337a] inline-flex"></div>
                </div>
            </div>
            <div className="container px-12 py-12 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery" className="w-full rounded-lg object-cover h-full object-center block" src="https://i.ibb.co/bzNB2wb/fuji-3840x2160-4k-hd-wallpaper-japan-travel-tourism-national-10326.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery" className="w-full rounded-lg object-cover h-full object-center block" src="https://i.ibb.co/cY4kSJH/pexels-jimmy-teoh-1010657.jpg"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery" className="w-full rounded-lg h-full object-cover object-center block" src="https://i.ibb.co/yYRhGLH/young-tourist-woman-are-enjoying-bangkok-thailand-33799-5186.jpg" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <Image alt="gallery" className="w-full rounded-lg h-full object-cover object-center block" width={500}
                                height={500}
                                src="https://i.ibb.co/G7knLSb/photo-1465778893808-9b3d1b443be4-auto-format-fit-crop-q-80-w-2075-ixlib-rb-4-0.jpg"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery"
                                className="w-full rounded-lg object-cover h-full object-center block"
                                src="https://i.ibb.co/BtBJVSJ/5c0fcdb298cebba7086e9c6d-Visiting-taj-mahal.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery" className="w-full object-cover rounded-lg h-full object-center block" src="https://i.ibb.co/djv7jWQ/woman-travel-italy-europe-girl-enjoy-venice-female-tourist-walking-streets-venezia-494619-320.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;