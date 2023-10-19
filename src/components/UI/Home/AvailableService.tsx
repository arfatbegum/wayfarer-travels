'use client'

import ServiceCard from './ServiceCard';
import { useServicesQuery } from '@/redux/api/serviceApi';
import dayjs from "dayjs";
import Loader from '@/components/UI/Shared/Loader';

const AvailableService = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = useServicesQuery({ ...query });
    const services = data?.services;
    const currentDate = new Date();

    if (isLoading) {
        return <Loader />
    }

    // Filter services based on valid_from and valid_to
    const validServices = services?.filter((service: any) => {
        const validFrom = new Date(dayjs(service?.validFrom).format("MMM D, YYYY hh:mm A"));
        if (service?.validTill) {
            const validTill = new Date(dayjs(service?.validTill).format("MMM D, YYYY hh:mm A"));
            return currentDate >= validFrom && currentDate <= validTill;
        }
        return currentDate >= validFrom;
    });

    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-14">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Explore Our Available Tour Services</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Our diverse range of tour services spans the globe, taking you to the most stunning destinations, from bustling cities to tranquil natural landscapes.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-violet-600 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 lg:px-16 px-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {validServices && validServices?.map((service: any) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
                <button className="flex mx-auto mt-16 text-white bg-violet-600 border-0 py-2 px-8 focus:outline-none hover:bg-violet-800 rounded text-lg">EXPLORE ALL SERVICES</button>
            </div>
        </div>
    );
};

export default AvailableService;