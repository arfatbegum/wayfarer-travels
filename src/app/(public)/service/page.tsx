'use client'

import React, { useState, useEffect } from "react";
import { useServicesQuery } from "@/redux/api/serviceApi";
import Loader from "@/components/UI/Shared/Loader";
import ServiceCard from "@/components/UI/Home/ServiceCard";
import ActionBar from "@/components/UI/Shared/ActionBar";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import { Input, Pagination } from "antd";
import { useDebounced } from "@/redux/hooks";
import Footer from "@/components/UI/Footer/Footer";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
const Service = () => {
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

    const { data, isLoading } = useServicesQuery(query);
    const services = data?.services;

    if (isLoading) {
        return <Loader />;
    }

    const resetFilters = () => {
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
    };

    return (
        <div className="p-12">
            <ActionBar title="Explore All Service">
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search ..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {(!!sortBy || !!sortOrder || !!searchTerm) && (
                    <button
                        onClick={resetFilters}
                        className="bg-violet-600 px-4 py-2 ml-2 text-white rounded font-semibold float-right"
                    >
                        <ReloadOutlined />
                    </button>
                )}
            </ActionBar>
            <div className="my-12 px-12">
                <div className="text-gray-900 body-font relative">
                    <div className="container pt-5 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-1/5 p-4 h-min height:min-content flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
                        <div className="lg:w-4/5">
                            <div className="flex flex-wrap sm:-m-4 -mx-4 lg:px-16 px-4">
                                {services && services?.map((service: any) => (
                                    <ServiceCard key={service.id} service={service} />
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
                    showSizeChanger
                    onShowSizeChange={handlePaginationChange}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Service;
