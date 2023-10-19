"use client";
//@ts-ignore
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "@/components/UI/BreadCrumb";
import PublicHeader from "@/components/UI/PublicHeader";
import { useServiceQuery } from "@/redux/api/serviceApi";
import { IDProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import BookingDrawer from "@/components/UI/Booking/BookingDrawer";
import Loader from "@/constants/Loader";


const UpdateService = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useServiceQuery(id);

    const [open, setOpen] = useState(false);

    if (isLoading) {
        return <Loader />
    }

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="my-28 px-12 ">
                <BreadCrumb
                    items={[
                        {
                            label: "Service",
                            link: "/service",
                        },
                    ]}
                />
                <div className="text-gray-900 body-font relative">
                    <div className="container pt-5 mx-auto flex sm:flex-nowrap flex-wrap gap-6 ">
                        <div className="lg:w-2/3 md:w-1/2 p-8 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="flex flex-wrap sm:flex-row flex-col justify-between">
                                <div>
                                    <h1 className="text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">{data?.name}</h1>
                                    <span> {data?.location}</span>
                                </div>
                                <div className="flex flex-col font-sans text-base font-normal text-blue-gray-900 antialiased">
                                    <ReactStars
                                        count={5}
                                        size={22}
                                        value={data?.rating}
                                        edit={false}
                                        activeColor="#e6bd00"
                                    />
                                    <span className="text-violet-600">{data?.reviews?.length} Reviews</span>
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
                                            <h2 className="title-font font-bold text-md text-gray-900">Person</h2>
                                            <p className="leading-relaxed">{data?.person}</p>
                                        </div>
                                        <div className="p-4 sm:w-1/4 w-1/2">
                                            <h2 className="title-font font-bold text-md text-gray-900">Location</h2>
                                            <p className="leading-relaxed">{data?.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-50%">
                                <Image
                                    width={1000}
                                    height={300}
                                    src={typeof data?.image === 'string' ? data.image : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                                    alt="ui/ux review check"
                                    className="rounded"
                                />
                            </div>
                            <div className="mt-6 ">
                                <h2 className="text-lg font-bold pb-1">Description</h2>
                                <div className="w-16 h-1 rounded-full bg-violet-600 inline-flex mb-6"></div>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 h-min height: min-content p-8 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <h1 className="pb-1 text-lg font-bold">Tour Details</h1>
                            <div className="w-20 h-1 rounded-full bg-violet-600 inline-flex mb-6"></div>
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
                            <h1 className="text-gray-900 font-bold text-2xl mb-4">${data?.price}</h1>
                            <h1 className="pb-1 text-lg font-bold">Tour Facilities</h1>
                            <p>{data?.whyChooseUs}</p>
                            <h1 className="pb-1 text-lg font-bold mt-5">Why choose us</h1>
                            <p>{data?.facilities}</p>
                            <button onClick={showDrawer} className="bg-violet-600 text-white py-2 rounded mt-8 text-semibold">Book Now</button>
                            <BookingDrawer onClose={onClose} price={data?.price} validFrom={data?.validFrom} validTill={data?.validTill} open={open} myserviceId={data?.id} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default UpdateService;