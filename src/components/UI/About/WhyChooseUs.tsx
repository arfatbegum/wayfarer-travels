import image from '@/assets/choose.png';
import clock from '@/assets/clock.png';
import expertIcon from '@/assets/expert.png';
import mindIcon from '@/assets/mind.png';
import experiencedIcon from '@/assets/experienced-icon.png';
import Image from 'next/image';


const WhyChooseUs = () => {
    return (
        <div className='overflow-y-hidden'>
            <div className="container lg:px-16 px-4 py-12">
                <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
                    <div className='w-1/2'>
                        <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">Why choose us</p>
                        <p className="text-lg leading-7 text-gray-600 mt-4 w-full">We understand that the world is filled with travel options. But why should you choose us for your next adventure? The answer lies in our unwavering commitment to excellence and your satisfaction. </p>
                        <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                            <Image width={400} height={400} src={image} alt='image' className="w-full obejct-fit object-center object-fill h-full" />
                        </div>
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
                    <div className="hidden lg:block lg:w-1/2 w-full lg:mt-0 mt-6">
                        <Image width={400} height={400} src={image} alt="ongoing meeting" className="w-full obejct-fit object-center object-fill h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;