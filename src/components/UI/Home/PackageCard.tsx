//@ts-ignore
import ReactStars from "react-rating-stars-component";
import Link from 'next/link';
import React, { ReactNode } from 'react';
import dayjs from "dayjs";
import Image from "next/image";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiDollarCircle, BiTimeFive, BiUserCircle } from 'react-icons/bi';
import { MdOutlineEventAvailable } from 'react-icons/md';

interface PackageCardProps {
    tourPackage: {
        [x: string]: ReactNode;
        id: number;
        reviews: any;
        validTill: string;
        validFrom: string;
    };
}

const PackageCard: React.FC<PackageCardProps> = ({ tourPackage }) => {
    const validFrom = tourPackage.validFrom;
    const validTill = tourPackage.validTill;

    const formattedValidFrom = dayjs(validFrom).format("MMM D, YYYY");
    const formattedValidTill = dayjs(validTill).format("MMM D, YYYY");

    const totalReviews = Array.isArray(tourPackage?.reviews) ? tourPackage?.reviews.length : 0;

    // Calculate the sum of ratings
    const sumOfRatings = Array.isArray(tourPackage?.reviews)
        ? tourPackage?.reviews.reduce((total: any, review: any) => total + review.rating, 0)
        : 0;

    // Calculate the average rating
    const averageRating = totalReviews > 0 ? sumOfRatings / totalReviews : 0;

    return (
        <div className="p-2 flex flex-col">
            <div className="relative flex w-full max-w-[26rem] flex-col bg-white bg-clip-border text-gray-700 shadow-sm  border-2 border-gray-200 border-opacity-60 rounded-lg">
                <div className="relative z-0 overflow-hidden rounded-xl rounded-b-none bg-blue-gray-500 bg-clip-border text-white shadow-md shadow-blue-gray-500/40">
                    <Image
                        width={500}
                        height={500}
                        src={typeof tourPackage?.image === 'string' ? tourPackage.image : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                        alt="ui/ux review check"
                    />
                    <span
                        className="!absolute top-4 left-4 bg-[#0f337a] p-2 select-none rounded text-center align-middle font-sans text-xs font-medium uppercase text-white"
                    ><span className="flex gap-1 items-center">
                            <HiOutlineLocationMarker className='text-lg' />{tourPackage?.location}</span>
                    </span>
                </div>
                <div className="px-6 pb-6 pt-2 relative z-0">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-xl"><BiDollarCircle /></span>
                            <span className="text-xl font-bold text-black "> {tourPackage?.price}</span>
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
                        {tourPackage?.name}
                    </h5>
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex flex-col items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-xl"><BiUserCircle /></span>
                            <span className="text-md"> {tourPackage?.person} persons</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-xl"><BiTimeFive /></span>
                            <span className="text-md"> {tourPackage?.duration}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-xl"><MdOutlineEventAvailable /></span>
                            <span className="text-md"> {tourPackage?.availableQunatity} available</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col justify-between mt-3">
                        <div>
                            <h1 className="text-gray-900 font-bold title-font text-md mb-2 sm:mb-0">Valid From</h1>
                            <span className="text-[#0f337a]"> {formattedValidFrom}</span>
                        </div>
                        <div>
                            <h1 className="text-gray-900 font-bold title-font text-md mb-2 sm:mb-0">Valid Till</h1>
                            <span className="text-[#0f337a]"> {formattedValidTill}</span>
                        </div>
                    </div>
                    <div className="flex items-cente pt-6">
                        <Link href={`/service/details/${tourPackage?.id}`} className="w-full flex justify-center items-center rounded py-1.5 outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-yellow-400 hover:after:opacity-100 hover:after:scale-[2.5] bg-[#0f337a] border-transparent hover:border-yellow-400">
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

export default PackageCard;
