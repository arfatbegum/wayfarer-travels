import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <div className="text-gray-600 body-font">
            <div className="text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Gallery</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Stay Informed About the Latest Gallery and Trends</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-[#13357b] inline-flex"></div>
                </div>
            </div>
            <div className="container px-12 py-12 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <Image alt="gallery" className="w-full h-full object-cover object-center block" width={500}
                                height={500}
                                src="https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                width={500}
                                height={500}
                                alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;