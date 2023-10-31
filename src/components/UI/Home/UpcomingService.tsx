'use client'

import dayjs from "dayjs";
import { useServicesQuery } from "@/redux/api/serviceApi";
import Loader from "@/components/UI/Shared/Loader";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const UpcomingService = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = useServicesQuery({ ...query });
    const services = data?.services;
    const currentDate = new Date();

    if (isLoading) {
        return <Loader />
    }
    // Filter services based on valid_from and valid_to
    const upcomingServices = services?.filter((service: any) => {
        const validFrom = new Date(dayjs(service?.validFrom).format("MMM D, YYYY hh:mm A"));
        if (service?.validTill) {
            const validTill = new Date(dayjs(service?.validTill).format("MMM D, YYYY hh:mm A"));
            return currentDate < validFrom;
        }
        return currentDate < validFrom;
    });

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-24 mx-auto">
                <div className="text-center mb-14">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">Explore Our Upcoming Tour Packages</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Discover our upcoming tour services that will take you to amazing destinations in the future.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-[#0f337a] inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 lg:px-16 px-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {upcomingServices && upcomingServices?.map((service: any) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
                <Link href="/sevice" className="mx-auto mt-16 flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-yellow-400 hover:after:opacity-100 hover:after:scale-[2.5] bg-[#0f337a] border-transparent hover:border-yellow-400">
                    <span className="relative z-10 text-white font-bold flex items-center">
                        Explore All Packages
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default UpcomingService;
