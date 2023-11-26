'use client'

import React, { useState, useEffect } from 'react';
import Loader from "@/components/UI/Shared/Loader";
import ActionBar from "@/components/UI/Shared/ActionBar";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import { Input, Pagination } from "antd";
import { useDebounced } from "@/redux/hooks";
import UIBreadCrumb from "../Shared/UIBreadcrumb";
import banner from "@/assets/package-banner.jpg"
import Image from "next/image";
import { usePackagesQuery } from "@/redux/api/packageApi";
import FilterPackages from './FilterPackages';
import FilterCategories from './FilterCategories';
import FilterByPrice from './FilterByPrice';
import dayjs from "dayjs";
import CheckAvailablity from './CheckAvailablity';
import FilterByDestinations from './FilterByDestinations';
import Footer from '../Footer/Footer';

const Packages = () => {
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(9);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedDestinations, setSelectedDestinations] = useState<string>('All');
    const [selectedValidFrom, setSelectedValidFrom] = useState<string>('');
    const [selectedValidTill, setSelectedValidTill] = useState<string>('');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
    const [filteredPackages, setFilteredPackages] = useState([]);

    const debouncedSearchTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    const handlePaginationChange = (pageNumber: number, pageSize?: number) => {
        setPage(pageNumber);
        if (pageSize) {
            setSize(pageSize);
        }
    };


    const query: Record<string, any> = {
        page,
        size,
        sortBy,
        sortOrder,
    };

    if (!!debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }

    const { data: packageData, isLoading: isPackageLoading } = usePackagesQuery({ ...query });
    const packages = packageData?.packages;

    const resetFilters = () => {
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
        setSelectedValidFrom("")
        setSelectedValidTill("")

    };

    useEffect(() => {
        const startDate = selectedValidFrom ? dayjs(selectedValidFrom) : null;
        const endDate = selectedValidTill ? dayjs(selectedValidTill) : null;

        const filteredCategory = selectedCategory === 'All'
            ? packages
            : packages?.filter((tourPackage: any) => tourPackage.categorires?.name === selectedCategory);

        const filteredDestinations = selectedDestinations === 'All'
            ? packages
            : packages?.filter((tourPackage: any) => tourPackage?.country === selectedDestinations);

        const filteredWithinDateRange = packages?.filter((tourPackage: any) => {
            const tourPackageValidFrom = dayjs(tourPackage.validFrom);
            const tourPackageValidTill = dayjs(tourPackage.validTill);
            const isWithinDateRange =
                (!startDate || tourPackageValidTill.isAfter(startDate, 'day') || tourPackageValidFrom.isSame(startDate, 'day') || tourPackageValidFrom.isAfter(startDate, 'day')) &&
                (!endDate || tourPackageValidFrom.isBefore(endDate, 'day') || tourPackageValidTill.isSame(endDate, 'day') || tourPackageValidTill.isBefore(endDate, 'day'));

            return isWithinDateRange;
        });

        const minPrice = priceRange[0];
        const maxPrice = priceRange[1];

        const filteredByPrice = packages?.filter((tourPackage: any) => {
            const packagePrice = tourPackage.price;
            return packagePrice >= minPrice && packagePrice <= maxPrice;
        });


        if (selectedCategory !== 'All') {
            setFilteredPackages(filteredCategory);
        } else if (selectedDestinations !== 'All') {
            setFilteredPackages(filteredDestinations);
        } else if (priceRange) {
            setFilteredPackages(filteredByPrice);
        } else {
            setFilteredPackages(filteredWithinDateRange);
        }

    }, [selectedCategory, priceRange, selectedDestinations, packages, selectedValidFrom, selectedValidTill]);

    return (
        <>
            {
                isPackageLoading ? (
                    <Loader />
                ) : (
                    <>
                        <div>
                            <div className="relative bg-white">
                                <Image src={banner} alt="Hero image" width="2350" height="2359"
                                    className="absolute w-full object-cover lg:h-76 opacity-90" />
                                <h1 className='lg:text-3xl text-xl font-bold lg:mb-3 mb-0  text-center relative lg:pt-36 pt-2 text-white'>Explore All Packages</h1>
                                <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 flex  lg:flex-row gap-10 lg:gap-12">
                                    <div className="relative mx-auto">
                                        <UIBreadCrumb
                                            items={[
                                                {
                                                    label: "Package",
                                                    link: "/package",
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <ActionBar>
                                    <Input
                                        addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                                        placeholder="Search ..."
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    {(!!sortBy || !!sortOrder || !!searchTerm || !!selectedValidFrom || !!selectedValidTill) && (
                                        <button
                                            onClick={resetFilters}
                                            className="flex w-40 gap-2 items-center bg-[#0f337a] px-4 py-2 ml-2 text-white rounded font-semibold float-right"
                                        >
                                            Reset Filters<ReloadOutlined />
                                        </button>
                                    )}
                                </ActionBar>
                                <div className="text-gray-900 body-font relative">
                                    <div className="container pt-5 lg:grid lg:grid-cols-5 lg:gap-4">
                                        <div className="col-span-1 lg:flex flex-col hidden">
                                            <CheckAvailablity
                                                packages={packages}
                                                setFilteredPackages={setFilteredPackages}
                                                selectedValidFrom={selectedValidFrom}
                                                selectedValidTill={selectedValidTill}
                                                setSelectedValidFrom={setSelectedValidFrom}
                                                setSelectedValidTill={setSelectedValidTill}
                                            />
                                            <FilterByPrice
                                                priceRange={priceRange}
                                                setPriceRange={setPriceRange}
                                            />
                                            <FilterByDestinations
                                                packages={packages}
                                                selectedDestinations={selectedDestinations}
                                                setSelectedDestinations={setSelectedDestinations}
                                            />
                                            <FilterCategories
                                                selectedCategory={selectedCategory}
                                                setSelectedCategory={setSelectedCategory}
                                            />
                                        </div>
                                        <div className="lg:col-span-4 w-full">
                                            <FilterPackages filteredPackages={filteredPackages} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="float-right mb-20">
                                <Pagination
                                    current={page}
                                    pageSize={size}
                                    total={packageData?.meta?.total || 0}
                                    onChange={handlePaginationChange}
                                    onShowSizeChange={handlePaginationChange}
                                />
                            </div>
                        </div>
                        <Footer />
                    </>
                )
            }
        </>
    );
};
export default Packages;