'use client'

import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { useNewsesQuery } from '@/redux/api/newsApi';
import NewsCard from '@/components/UI/News/NewsCard';
import Image from "next/image";
import banner from "@/assets/news-banner.jpg"
import UIBreadCrumb from '@/components/UI/Shared/UIBreadcrumb';
import Footer from '@/components/UI/Footer/Footer';
import Loader from '../Shared/Loader';

const NewsPage = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = useNewsesQuery({ ...query });
    const newses = data?.newses;

    // Get unique content types using a Set
    const uniqueContentTypes = new Set(
        newses?.map((news: any) => news.contentType)
    );

    // Convert the Set back to an array, and add "All News"
    const tabList = ['All News', ...Array.from(uniqueContentTypes)];

    // State variables to manage the active tab and filtered news
    const [activeTab, setActiveTab] = useState('All News');
    const [filteredNews, setFilteredNews] = useState([]);

    // Handle tab change
    const handleTabChange = (key: any) => {
        setActiveTab(key);
    };

    // Set initial tab when categories data is available
    useEffect(() => {
        setActiveTab('All News');
    }, []);

    // Filter news based on the active tab/category
    useEffect(() => {
        const filtered = activeTab === 'All News' ? newses : newses?.filter((news: any) => news.contentType === activeTab);
        setFilteredNews(filtered);
    }, [activeTab, newses]);

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="relative">
                            <Image src={banner} alt="Hero image" width="2350" height="2359"
                                className="absolute w-full object-cover lg:h-76 opacity-90" />
                            <h1 className='lg:text-3xl text-xl font-bold lg:mb-3 mb-0  text-center relative lg:pt-36 pt-2 text-white'>News</h1>
                            <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 flex  lg:flex-row gap-10 lg:gap-12">
                                <div className="relative mx-auto">
                                    <UIBreadCrumb
                                        items={[
                                            {
                                                label: "News",
                                                link: "/news",
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-20 mb-5">
                            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">Explore Latest Travel News</h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 px-4 lg:px-0">In our Latest Travel News section, we keep you in the loop with the most current and relevant updates from the world of travel</p>
                        </div>
                        <Tabs
                            defaultActiveKey="All"
                            centered
                            activeKey={activeTab}
                            onChange={handleTabChange}
                        >
                            {tabList.slice(-6).map((contentType) => (
                                <Tabs.TabPane tab={contentType as string} key={contentType as string}>
                                    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:gap-4 px-10 ">
                                        {filteredNews?.map((news: any) => (
                                            <NewsCard key={news.id} news={news} />
                                        ))}
                                    </div>
                                </Tabs.TabPane>
                            ))}
                        </Tabs>
                        <Footer />
                    </>
                )
            }
        </>
    );
};

export default NewsPage;
