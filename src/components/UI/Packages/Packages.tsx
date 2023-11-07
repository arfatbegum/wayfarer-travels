'use client'

import React, { useState } from "react";
import Loader from "@/components/UI/Shared/Loader";
import ActionBar from "@/components/UI/Shared/ActionBar";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import { Input, Pagination } from "antd";
import { useDebounced } from "@/redux/hooks";
import Footer from "@/components/UI/Footer/Footer";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import PackageCard from "@/components/UI/Home/PackageCard";
import UIBreadCrumb from "../Shared/UIBreadcrumb";
import banner from "@/assets/package-banner.jpg"
import Image from "next/image";
import { usePackagesQuery } from "@/redux/api/packageApi";

const Packages = () => {
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const debouncedSearchTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    // Function to handle pagination change
    const handlePaginationChange = (pageNumber: number, pageSize?: number) => {
        setPage(pageNumber);
        if (pageSize) {
            setSize(pageSize);
        }
    };

    // Use the current page and size to build the query
    const query: Record<string, any> = {
        page,
        size,
        sortBy,
        sortOrder,
    };

    const { data: categoryData } = useCategoriesQuery({ ...query });
    const categories = categoryData?.categories;

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    if (!!debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }

    const { data, isLoading } = usePackagesQuery(query);
    const packages = data?.packages;

    if (isLoading) {
        return <Loader />;
    }

    const resetFilters = () => {
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
    };

    return (
        <div>
            <div className="relative">
                <Image src={banner} alt="Hero image" width="2350" height="2359"
                    className="absolute w-full object-cover h-76 opacity-90" />
                <h1 className='text-3xl text-white font-bold pt-36 pb-2 text-center mb-2'>Explore All Tour Packages</h1>
                <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 flex  lg:flex-row gap-10 lg:gap-12">
                    <div className="relative mx-auto">
                        <UIBreadCrumb
                            items={[
                                {
                                    label: "Packages",
                                    link: "/package",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className="px-12 pt-12">
                <ActionBar>
                    <Input
                        addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                        placeholder="Search ..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {(!!sortBy || !!sortOrder || !!searchTerm) && (
                        <button
                            onClick={resetFilters}
                            className="bg-[#0f337a] px-4 py-2 ml-2 text-white rounded font-semibold float-right"
                        >
                            <ReloadOutlined />
                        </button>
                    )}
                </ActionBar>
                <div className="text-gray-900 body-font relative">
                    <div className="container pt-5 grid grid-cols-5 gap-4">
                        <div className="col-span-1 mt-3 p-4 h-min height:min-content flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm">
                            <div className="p-4">
                                <h1 className="my-2 font-semibold text-lg">Filter by category</h1>
                                <p
                                    onClick={() => handleCategoryClick("")}
                                    className={selectedCategory === "" ? "text-violet-500 cursor-pointer" : "cursor-pointer"}
                                >
                                    All
                                </p>
                                {categories && categories.map((category: any) => (
                                    <p
                                        key={category.id}
                                        onClick={() => handleCategoryClick(category.name)}
                                        className={selectedCategory === category.name ? "text-violet-500 cursor-pointer my-2" : "cursor-pointer my-2"}
                                    >
                                        {category.name}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="grid grid-cols-3">
                                {packages && packages?.map((tourPackage: any) => (
                                    <PackageCard key={tourPackage.id} tourPackage={tourPackage} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="float-right mb-20">
                <Pagination
                    current={page}
                    pageSize={size}
                    total={data?.meta?.total || 0}
                    onChange={handlePaginationChange}
                    showSizeChanger={true}
                    onShowSizeChange={handlePaginationChange}
                />
            </div>
            <Footer />
        </div>
    );
};
export default Packages;