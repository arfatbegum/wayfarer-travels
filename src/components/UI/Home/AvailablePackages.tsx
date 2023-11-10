'use client'

import dayjs from "dayjs";
import Loader from '@/components/UI/Shared/Loader';
import Link from 'next/link';
import PackageCard from './PackageCard';
import { usePackagesQuery } from "@/redux/api/packageApi";

const AvailablePackages = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = usePackagesQuery({ ...query });
    const packages = data?.packages;
    const currentDate = new Date();

    if (isLoading) {
        return <Loader />
    }

    // Filter services based on valid_from and valid_to
    const availablePackages = packages?.filter((tourPackage: any) => {
        const validFrom = new Date(dayjs(tourPackage?.validFrom).format("MMM D, YYYY hh:mm A"));
        if (tourPackage?.validTill) {
            const validTill = new Date(dayjs(tourPackage?.validTill).format("MMM D, YYYY hh:mm A"));
            return currentDate >= validFrom;
        }
        return currentDate >= validFrom;
    });


    return (
        <div className="container p-10 mx-auto">
            <div className="text-center mb-10">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">Explore Our Available Tour Packages</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Our diverse range of tour services spans the globe, taking you to the most stunning destinations, from bustling cities to tranquil natural landscapes.</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-[#0f337a] inline-flex"></div>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-3 md:space-y-0 space-y-6">
                {availablePackages && availablePackages?.length > 0 ? (
                    availablePackages?.slice(-4).map((tourPackage: any) => (
                        <PackageCard key={tourPackage.id} tourPackage={tourPackage} />
                    ))
                ) : (
                    <p className="w-full text-center">No available packages available.</p>
                )}
            </div>
            <Link href="/package" className="mx-auto mt-16 flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-yellow-400 hover:after:opacity-100 hover:after:scale-[2.5] bg-[#0f337a] border-transparent hover:border-yellow-400">
                <span className="relative z-10 text-white font-bold flex items-center">
                    Explore All Packages
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </span>
            </Link>
        </div>
    );
};

export default AvailablePackages;