//@ts-ignore
import ReactStars from "react-rating-stars-component";
import Link from 'next/link';
import React, { ReactNode } from 'react';
import dayjs from "dayjs";
import Image from "next/image";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiDollarCircle, BiTimeFive, BiUserCircle } from 'react-icons/bi';
import { MdOutlineEventAvailable } from 'react-icons/md';

interface ServiceCardProps {
    service: {
        [x: string]: ReactNode;
        id: number;
        reviews: any;
        validTill: string;
        validFrom: string;
    };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const validFrom = service.validFrom;
    const validTill = service.validTill;

    const formattedValidFrom = dayjs(validFrom).format("MMM D, YYYY");
    const formattedValidTill = dayjs(validTill).format("MMM D, YYYY");

    const totalReviews = Array.isArray(service?.reviews) ? service?.reviews.length : 0;

    // Calculate the sum of ratings
    const sumOfRatings = Array.isArray(service?.reviews)
        ? service?.reviews.reduce((total: any, review: any) => total + review.rating, 0)
        : 0;

    // Calculate the average rating
    const averageRating = totalReviews > 0 ? sumOfRatings / totalReviews : 0;

    return (
        <div className="p-2 md:w-1/2 lg:w-1/4 flex flex-col">
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                <div className="relative z-0 overflow-hidden rounded-xl rounded-b-none bg-blue-gray-500 bg-clip-border text-white shadow-md shadow-blue-gray-500/40">
                    <Image
                        width={500}
                        height={500}
                        src={typeof service?.image === 'string' ? service.image : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                        alt="ui/ux review check"
                    />
                    <span
                        className="!absolute top-4 left-4 bg-[#13357b] p-2 select-none rounded text-center align-middle font-sans text-xs font-medium uppercase text-white"
                    ><span className="flex gap-1 items-center">
                            <HiOutlineLocationMarker className='text-lg' />{service?.location}</span>
                    </span>
                </div>
                <div className="px-6 pb-6 pt-2 relative z-0">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-xl"><BiDollarCircle /></span>
                            <span className="text-xl font-bold text-black "> {service?.price}</span>
                        </div>
                        <p className="flex items-center gap-1 float-right text-base font-normal pb-2 text-blue-gray-900 antialiased">
                            <ReactStars
                                count={5}
                                size={22}
                                value={averageRating}
                                edit={false}
                                activeColor="#f3941e"
                            />
                            <span className="text-md text-[#f3941e] font-semibold">{totalReviews}.0</span>
                        </p>
                    </div>
                    <h5 className="block font-sans text-xl pb-2 font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {service?.name}
                    </h5>
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex flex-col items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-xl"><BiUserCircle /></span>
                            <span className="text-md"> {service?.person} persons</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-xl"><BiTimeFive /></span>
                            <span className="text-md"> {service?.duration}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-xl"><MdOutlineEventAvailable /></span>
                            <span className="text-md"> {service?.availableQunatity} available</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col justify-between mt-3">
                        <div>
                            <h1 className="text-gray-900 font-bold title-font text-md mb-2 sm:mb-0">Valid From</h1>
                            <span className="text-yellow-400"> {formattedValidFrom}</span>
                        </div>
                        <div>
                            <h1 className="text-gray-900 font-bold title-font text-md mb-2 sm:mb-0">Valid Till</h1>
                            <span className="text-yellow-400"> {formattedValidTill}</span>
                        </div>
                    </div>
                    <div className="flex items-cente pt-6">
                        <Link href={`/service/details/${service?.id}`} className="w-full flex justify-center items-center rounded py-1.5 outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-yellow-400 hover:after:opacity-100 hover:after:scale-[2.5] bg-[#13357b] border-transparent hover:border-yellow-400">
                            <span className="relative z-10 text-white font-bold flex items-center">
                                Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
