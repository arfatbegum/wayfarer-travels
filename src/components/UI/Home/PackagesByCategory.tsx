'use client'

import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import PackageCard from './PackageCard';
import { useCategoriesQuery } from '@/redux/api/categoryApi';
import { usePackagesQuery } from '@/redux/api/packageApi';

const PackagesByCategory = () => {
    const query: Record<string, any> = {};
    const { data } = usePackagesQuery({ ...query });
    const packages = data?.packages;
    const { data: categoryData } = useCategoriesQuery({ ...query });
    const categories = categoryData?.categories;

    // State variables to manage the active tab and filtered services
    const [activeTab, setActiveTab] = useState('Honeymoon');
    const [filteredPackages, setFilteredPackages] = useState([]);

    // Handle tab change
    const handleTabChange = (key: any) => {
        setActiveTab(key);
    };

    useEffect(() => {
        const filtered = packages?.filter((tourPackage: any) => tourPackage.categorires?.name === activeTab);
        setFilteredPackages(filtered);
    }, [activeTab, packages]);

    return (
        <div className='container lg:p-10 p-4 mx-auto'>
            <div className="text-center mb-10">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">Explore Our Tour Packages By Category</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Our diverse range of tour services spans the globe, taking you to the most stunning destinations, from bustling cities to tranquil natural landscapes.</p>
            </div>
            <Tabs
                defaultActiveKey={"Honeymoon"}
                centered
                activeKey={activeTab}
                onChange={handleTabChange}
            >
                {categories?.slice(-6).map((category: any) => (
                    <Tabs.TabPane tab={category.name} key={category.name}>
                        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-3 md:space-y-0 space-y-6">
                            {filteredPackages?.map((tourPackage: any) => (
                                <PackageCard key={tourPackage.id} tourPackage={tourPackage} />
                            ))}
                        </div>
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </div>
    );
};

export default PackagesByCategory;
