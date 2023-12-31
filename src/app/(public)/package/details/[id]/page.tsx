"use client";
//@ts-ignore
import ReactStars from "react-rating-stars-component";
import { IDProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import BookingDrawer from "@/components/UI/Booking/BookingDrawer";
import Loader from "@/components/UI/Shared/Loader";
import ReviewForm from "@/components/UI/Review/ReviewForm";
import Reviews from "@/components/UI/Review/Reviews";
import UIBreadCrumb from "@/components/UI/Shared/UIBreadcrumb";
import banner from "@/assets/packageDetails-banner.jpg"
import { usePackageQuery } from "@/redux/api/packageApi";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import type { DrawerProps } from 'antd/es/drawer';

const PackageDetails = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = usePackageQuery(id);

    const [open, setOpen] = useState(false);
    const [size, setSize]:["default" | "large" | undefined, React.Dispatch<React.SetStateAction<"default" | "large" | undefined>>] = useState<DrawerProps['size']>("large");

    const totalReviews = Array.isArray(data?.reviews) ? data?.reviews.length : 0;

    // Calculate the sum of ratings
    const sumOfRatings = Array.isArray(data?.reviews)
        ? data?.reviews.reduce((total: any, review: any) => total + review.rating, 0)
        : 0;

    // Calculate the average rating
    const averageRating = totalReviews > 0 ? sumOfRatings / totalReviews : 0;


    const showDrawer = () => {
        setSize('large');
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    console.log(data?.reviews)

    return (
        <>
            {
                isLoading ?
                    (
                        <Loader />
                    ) :
                    (
                        <>
                            <div className="relative">
                                <Image src={banner} alt="Hero image" width="2350" height="2359"
                                    className="absolute w-full object-cover lg:h-76 opacity-90" />
                                <h1 className='lg:text-3xl text-xl font-bold text-center relative lg:pt-36 pt-2 text-white'>{data?.name}</h1>
                                <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 flex  lg:flex-row gap-10 lg:gap-12">
                                    <div className="relative mx-auto">
                                        <UIBreadCrumb
                                            items={[
                                                {
                                                    label: "Package",
                                                    link: `/package`,
                                                },
                                                {
                                                    label: "Package Details",
                                                    link: `/package/details/${data.id}`,
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="my-10 px-10">
                                <div className="text-gray-900 body-font relative">
                                    <div className="container pt-5 mx-auto flex sm:flex-nowrap flex-wrap gap-6 ">
                                        <div className="lg:w-2/3 md:w-1/2 p-8 h-min height:min-content flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                                            <div className="flex flex-wrap sm:flex-row flex-col justify-between">
                                                <div>
                                                    <h1 className="text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">{data?.name}</h1>
                                                    <span className="flex gap-1 items-center mt-2"><HiOutlineLocationMarker className='text-lg text-yellow-400' /> {data?.country}</span>
                                                </div>
                                                <div className="flex flex-col font-sans text-base font-normal text-blue-gray-900 antialiased">
                                                    <ReactStars
                                                        count={5}
                                                        size={22}
                                                        value={averageRating}
                                                        edit={false}
                                                        activeColor="#e6bd00"
                                                    />
                                                    <span className="text-[#0f337a]">{totalReviews} Reviews</span>
                                                </div>
                                            </div>
                                            <div className="text-gray-900 body-font ">
                                                <div className="container py-4 my-8 mx-auto border-t border-b border-gray-150">
                                                    <div className="flex flex-wrap -m-4">
                                                        <div className="p-4 sm:w-1/4 w-1/2">
                                                            <h2 className="title-font font-bold text-md text-gray-900">Duration</h2>
                                                            <p className="leading-relaxed">{data?.duration}</p>
                                                        </div>
                                                        <div className="p-4 sm:w-1/4 w-1/2">
                                                            <h2 className="title-font font-bold text-md text-gray-900">Tour Type</h2>
                                                            <p className="leading-relaxed">{data?.categorires?.name}</p>
                                                        </div>
                                                        <div className="p-4 sm:w-1/4 w-1/2">
                                                            <h2 className="title-font font-bold text-md text-gray-900">People</h2>
                                                            <p className="leading-relaxed">{data?.people}</p>
                                                        </div>
                                                        <div className="p-4 sm:w-1/4 w-1/2">
                                                            <h2 className="title-font font-bold text-md text-gray-900">Location</h2>
                                                            <p className="leading-relaxed">{data?.location}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <Image
                                                    width={1000}
                                                    height={300}
                                                    src={typeof data?.image === 'string' ? data.image : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                                                    alt="ui/ux review check"
                                                    className="rounded h-[400px]"
                                                />
                                            </div>
                                            <div className="mt-6 ">
                                                <h2 className="text-lg font-bold pb-1">Description</h2>
                                                <div className="w-16 h-1 rounded-full bg-[#0f337a] inline-flex mb-6"></div>
                                                <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: data?.description }}></p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 md:w-1/2">
                                            <div className="height:min-content p-8 flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                                                <h1 className="pb-1 text-lg font-bold">Tour Details</h1>
                                                <div className="w-20 h-1 rounded-full bg-[#0f337a] inline-flex mb-6"></div>
                                                <div className="flex flex-wrap sm:flex-row flex-col justify-between mb-5">
                                                    <div>
                                                        <h1 className="text-gray-900 font-bold title-font text-md mb-2 sm:mb-0">Valid From</h1>
                                                        <span> {data?.validFrom.slice(0, 10)}</span>
                                                    </div>
                                                    <div>
                                                        <h1 className="text-gray-900 font-bold title-font text-md mb-2 sm:mb-0">Valid Till</h1>
                                                        <span> {data?.validTill.slice(0, 10)}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1 className="text-gray-900 font-bold text-2xl mb-4">${data?.price}</h1>
                                                    <h1 className="pb-1 text-lg font-bold">Tour Facilities</h1>
                                                    <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: data?.facilities }}></p>
                                                    <h1 className="pb-1 text-lg font-bold mt-5">Why choose us</h1>
                                                    <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: data?.whyChooseUs }}></p>
                                                    <button onClick={showDrawer} className="bg-[#0f337a] text-white py-2 rounded mt-8 font-semibold w-full">Book Now</button>
                                                    <BookingDrawer
                                                        size={size}
                                                        onClose={onClose}
                                                        availableQunatity={data?.availableQunatity}
                                                        price={data?.price}
                                                        validFrom={data?.validFrom}
                                                        validTill={data?.validTill}
                                                        open={open}
                                                        packageId={data?.id}
                                                        packageName={data?.name}
                                                    />
                                                </div>
                                            </div>
                                            {data?.reviews?.length > 0 ? <Reviews reviews={data?.reviews} /> : null}
                                            <ReviewForm packageId={data?.id} newsId={""} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
            }
        </>

    );
};

export default PackageDetails;