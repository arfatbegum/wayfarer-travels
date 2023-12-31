"use client";
//@ts-ignore
import ReactStars from "react-rating-stars-component";
import { IDProps } from "@/types";
import Image from "next/image";
import Loader from "@/components/UI/Shared/Loader";
import ReviewForm from "@/components/UI/Review/ReviewForm";
import Reviews from "@/components/UI/Review/Reviews";
import { useNewsQuery } from "@/redux/api/newsApi";
import { BiTimeFive, BiCategoryAlt } from 'react-icons/bi';
import dayjs from "dayjs";
import Footer from "@/components/UI/Footer/Footer";
import RecentNews from "@/components/UI/News/RecentNews";
import UIBreadCrumb from "@/components/UI/Shared/UIBreadcrumb";
import banner from "@/assets/newsDetails-banner.jpg"

const ServiceDetails = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useNewsQuery(id);
    const date = data?.date;
    const formattedDate = dayjs(date).format("MMM D, YYYY");

    const totalReviews = Array.isArray(data?.reviews) ? data?.reviews.length : 0;

    // Calculate the sum of ratings
    const sumOfRatings = Array.isArray(data?.reviews)
        ? data?.reviews.reduce((total: any, review: any) => total + review.rating, 0)
        : 0;

    // Calculate the average rating
    const averageRating = totalReviews > 0 ? sumOfRatings / totalReviews : 0;

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="relative bg-white">
                            <Image src={banner} alt="Hero image" width="2350" height="2359"
                                className="absolute w-full object-cover lg:h-76 opacity-90" />
                            <h1 className='lg:text-3xl text-lg font-bold text-center lg:mb-2 relative lg:pt-36 pt-2 text-white'>{data?.title}</h1>
                            <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 flex  lg:flex-row gap-10 lg:gap-12">
                                <div className="relative mx-auto">
                                    <UIBreadCrumb
                                        items={[
                                            {
                                                label: "News",
                                                link: `/news`,
                                            },
                                            {
                                                label: "News Details",
                                                link: `/news/details/${data.id}`,
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container pt-5 mx-auto flex sm:flex-nowrap flex-wrap gap-6 px-12 mt-20">
                            <div className="lg:w-2/3 md:w-1/2 p-8 h-min height:min-content flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                                <div className="flex flex-wrap sm:flex-row flex-col justify-between">
                                    <div>
                                        <h1 className="text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">{data?.title}</h1>
                                        <span className="inline-flex items-center mt-2">
                                            <Image
                                                width={300}
                                                height={300}
                                                src={typeof data?.user?.profileImg === 'string' ? data?.user?.profileImg : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                                                alt="ui/ux review check"
                                                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-3">
                                                <span className="title-font font-medium text-gray-900">{data?.user?.name}</span>
                                            </span>
                                        </span>
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
                                <div className="w-full h-50% mt-6">
                                    <Image
                                        width={1000}
                                        height={300}
                                        src={typeof data?.image === 'string' ? data.image : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                                        alt="ui/ux review check"
                                        className="rounded"
                                    />
                                </div>
                                <div className="flex gap-5 my-4">
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-yellow-400 text-xl"><BiCategoryAlt /></span>
                                        <span className="text-md text-[#0f337a]"> {data?.contentType}</span>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-yellow-400 text-xl"><BiTimeFive /></span>
                                        <span className="text-md text-[#0f337a]"> {formattedDate}</span>
                                    </div>
                                </div>
                                <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: data?.content }}></p>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2">
                                <RecentNews />
                                {data?.reviews.length > 0 ? <Reviews reviews={data?.reviews} /> : null}
                                <ReviewForm newsId={data?.id} packageId={""} />
                            </div>
                        </div>
                        <Footer />
                    </>
                )
            }
        </>
    );
};

export default ServiceDetails;