import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { useServicesQuery } from '@/redux/api/serviceApi';
import ServiceCard from './PackageCard';
import { useCategoriesQuery } from '@/redux/api/categoryApi';

const PackagesByCategory = () => {
    const query: Record<string, any> = {};
    const { data } = useServicesQuery({ ...query });
    const packages = data?.services;
    const { data: categoryData } = useCategoriesQuery({ ...query });
    const categories = categoryData?.categories;

    // State variables to manage the active tab and filtered services
    const [activeTab, setActiveTab] = useState('');
    const [filteredPackages, setFilteredPackages] = useState([]);

    // Handle tab change
    const handleTabChange = (key: any) => {
        setActiveTab(key);
    };

    // Set initial tab when categories data is available
    useEffect(() => {
        if (categories && categories.length > 0) {
            setActiveTab(categories[0].name);
        }
    }, [categories]);

    // Filter services based on the active tab/category
    useEffect(() => {
        const filtered = packages?.filter((tourPackage: any) => tourPackage.categorires?.name === activeTab);
        setFilteredPackages(filtered);
    }, [activeTab, packages]);

    return (
        <>
            <div className="text-center mb-5">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">Explore Our Tour Packages By Category</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Our diverse range of tour services spans the globe, taking you to the most stunning destinations, from bustling cities to tranquil natural landscapes.</p>
            </div>
            <Tabs
                defaultActiveKey={activeTab}
                centered
                activeKey={activeTab}
                onChange={handleTabChange}
            >
                {categories?.map((category: any) => (
                    <Tabs.TabPane tab={category.name} key={category.name}>
                        <div className="grid grid-cols-4 px-16 md:space-y-0 space-y-6">
                            {filteredPackages?.map((tourPackage: any) => (
                                <ServiceCard key={tourPackage.id} tourPackage={tourPackage} />
                            ))}
                        </div>
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </>
    );
};

export default PackagesByCategory;