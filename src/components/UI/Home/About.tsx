import image from "@/assets/about.png"
import clock from '@/assets/clock.png';
import expertIcon from '@/assets/expert.png';
import mindIcon from '@/assets/mind.png';
import experiencedIcon from '@/assets/experienced-icon.png';
import Image from 'next/image';

const About = () => {
    return (
        <div className="container mx-auto lg:p-10 p-4">
            <div className="flex flex-wrap flex-row-reverse items-center">
                <div className='lg:w-2/3 lg:pl-12 mb-12 lg:mb-0'>
                    <h1 className="font-md font-semibold mb-3 text-lg text-[#0f337a]">About Us</h1>
                    <p className="text-lg leading-7 text-gray-600 mt-4 w-full">We understand that the world is filled with travel options. But why should you choose us for your next adventure? The answer lies in our unwavering commitment to excellence and your satisfaction. </p>
                    <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                        <div className="flex items-center">
                            <div className="w-16 h-16 relative">
                                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <Image width={64} height={64} src={clock} alt="clock" />
                                </div>
                            </div>
                            <div className="flex items-start flex-col ml-6 pt-8">
                                <h2 className="text-lg font-semibold leading-4 text-gray-800">Expertise</h2>
                                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">We offers valuable expertise and in-depth knowledge.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-16 relative">
                                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <Image width={64} height={64} src={expertIcon} alt="clock" />                                    </div>
                            </div>
                            <div className="flex items-start flex-col ml-6 pt-8">
                                <h2 className="text-lg font-semibold leading-4 text-gray-800">Time & Cost Savings</h2>
                                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">We save your time and effort by handling all the trip.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-16 relative">
                                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <Image width={64} height={64} src={mindIcon} alt="clock" />                                    </div>
                            </div>
                            <div className="flex items-start flex-col ml-6 pt-8">
                                <h2 className="text-lg font-semibold leading-4 text-gray-800">Peace of Mind</h2>
                                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">We offer support before, during, and after your journey.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-16 relative">
                                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <Image width={64} height={64} src={experiencedIcon} alt="clock" />                                    </div>
                            </div>
                            <div className="flex items-start flex-col ml-6 pt-8">
                                <h2 className="text-lg font-semibold leading-4 text-gray-800">Personalized Experiences</h2>
                                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">We can create personalized travel experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full relative h-96 flex items-end justify-center">
                    <Image
                        width={500}
                        height={500}
                        alt="gallery"
                        className="w-full object-cover h-full object-center block rounded"
                        src={image}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;