//@ts-ignore
import ReactStars from "react-rating-stars-component";
import Link from 'next/link';
import React, { ReactNode } from 'react';
import dayjs from "dayjs";
import Image from "next/image";

interface ServiceCardProps {
    service: {
        [x: string]: ReactNode;
        id: number;
        reviews: any;
        validFrom: string;
    };
}

const UpcomingServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const validFrom = service.validFrom;

    const formattedValidDate = dayjs(validFrom).format("MMM D,");
    const formattedValidYear = dayjs(validFrom).format("YYYY");

    const totalReviews = Array.isArray(service?.reviews) ? service?.reviews?.length : 0;

    // Calculate the sum of ratings
    const sumOfRatings = Array.isArray(service?.reviews)
        ? service.reviews.reduce((total, rating) => total + rating, 0)
        : 0;

    // Calculate the average rating
    const averageRating = totalReviews > 0 ? sumOfRatings / totalReviews : 0;

    return (
        <div className="p-2 md:w-1/2 lg:w-1/4  flex flex-col">
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative z-0 overflow-hidden rounded-xl rounded-b-none bg-blue-gray-500 bg-clip-border text-white shadow-md shadow-blue-gray-500/40">
                    <Image
                        width={500}
                        height={500}
                        src={typeof service?.image === 'string' ? service.image : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                        alt="ui/ux review check"
                    />
                    <span
                        className="!absolute top-4 left-4  select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white"
                    >
                        {service?.location}
                    </span>
                </div>
                <span
                    className="flex flex-col absolute z-50 bottom-44 right-4 bg-violet-600 p-4 select-none rounded-full text-center align-middle font-sans text-xs font-medium text-white"
                >
                    <span>Valid From</span>
                    <span>{formattedValidDate}</span>
                    <span>   {formattedValidYear}</span>
                </span>
                <div className="px-6 pb-6 pt-2 relative z-0">
                    <p className="flex flex-col font-sans text-base font-normal pb-2 text-blue-gray-900 antialiased">
                        <ReactStars
                            count={5}
                            size={22}
                            value={averageRating}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                        <span>{totalReviews} Reviews</span>
                    </p>
                    <h5 className="block font-sans text-xl pb-2 font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {service?.name}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    {typeof service?.description === 'string' ? service.description.slice(0, 50) : ''}
                    </p>
                    <div className="flex items-center justify-between pt-6">
                        <Link href={`/service/details/${service?.id}`} className="text-white bg-violet-600 hover-bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Details</Link>
                        <span className="text-3xl font-bold text-black">${service?.price}</span>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default UpcomingServiceCard;
