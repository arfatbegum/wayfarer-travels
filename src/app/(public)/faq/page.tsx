'use client'

import ActionBar from '@/components/UI/ActionBar';
import FAQSection from '@/components/UI/FAQSection';
import { useFaqsQuery } from '@/redux/api/faqApi';
import { useDebounced } from '@/redux/hooks';
import { Input } from 'antd';
import Image from 'next/image';
import {
    SearchOutlined,
    ReloadOutlined,
} from "@ant-design/icons";
import React, { useState } from 'react';
import Loader from '@/constants/Loader';


const FAQ: React.FC = () => {
    const query: Record<string, any> = {};
    const [openSections, setOpenSections] = useState<number[]>([]);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");

    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    const debouncedSearchTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    if (!!debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }

    const { data, isLoading } = useFaqsQuery({ ...query });
    const faqs = data?.faqs;

    if (isLoading) {
        return <Loader />
    }

    const toggleSection = (index: number) => {
        if (openSections.includes(index)) {
            setOpenSections(openSections.filter((item) => item !== index));
        } else {
            setOpenSections([...openSections, index]);
        }
    };
    const resetFilters = () => {
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
    };

    return (
        <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <h2 className="font-semibold text-center lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
                Frequently Asked Questions
            </h2>
            <div className="mt-4 flex md:justify-between md:items-center md:flex-row flex-col justify-start items-center">
                <div className="">
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                        Find answers to common questions about our travel agency and services.
                    </p>
                </div>
                <div className="flex justify-center items-center max-w-full ">
                    <ActionBar title="">
                        <Input
                            addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                            placeholder="Search Faq ......"
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
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
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:space-x-8 mt-8">
                <div className="md:w-5/12 lg:w-4/12 w-full">
                    <Image
                        width={500}
                        height={500}
                        src="https://i.ibb.co/VQrfNDJ/MO2-QEz-Gr-destinations-for-vaccinated-tourists-2021-1200x800.jpg"
                        alt="Image of Glass bottle"
                        className="w-full md:block hidden rounded"
                    />
                    <Image
                        width={500}
                        height={500}
                        src="https://i.ibb.co/VQrfNDJ/MO2-QEz-Gr-destinations-for-vaccinated-tourists-2021-1200x800.jpg"
                        alt="Image of Glass bottle"
                        className="w-full md:hidden block rounded"
                    />
                </div>
                <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {faqs && faqs?.map((faq: any) => (
                        <>
                            <FAQSection
                                title={faq?.question}
                                content={faq?.answer}
                                isOpen={openSections.includes(1)}
                                onToggle={() => toggleSection(1)}
                            />
                            <hr className="my-7 bg-gray-200" />
                        </>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default FAQ;
