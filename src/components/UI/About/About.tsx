import Image from 'next/image';

const About = () => {
    return (
        <div className="text-gray-600 body-font px-12">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        width={500}
                        height={500}
                        alt="gallery"
                        className="w-full object-cover h-full object-center block rounded"
                        src="https://i.ibb.co/jfW5R8k/traveling-based-on-fare-deals.jpg"
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Embark on Unforgettable Journeys with
                        <br className="hidden lg:inline-block" />Wayfarer Travels
                    </h1>
                    <p className="mb-8 leading-relaxed">Your Passport to Adventure and Exploration! Discover captivating destinations, create lasting memories, and experience the worlds wonders with our expertly crafted travel experiences.</p>
                    <div className="flex justify-center">
                        <div className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                            <a>
                                <span className="bg-indigo-100 text-[#13357b] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Passionate Travel Experts
                            </a>
                            <a>
                                <span className="bg-indigo-100 text-[#13357b] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Worldwide Destinations
                            </a>
                            <a>
                                <span className="bg-indigo-100 text-[#13357b] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Tailored Travel Experiences
                            </a>
                            <a>
                                <span className="bg-indigo-100 text-[#13357b] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Customer-Centric Approach
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;