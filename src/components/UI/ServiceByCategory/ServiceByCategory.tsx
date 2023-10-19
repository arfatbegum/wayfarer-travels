import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { useServicesQuery } from '@/redux/api/serviceApi';
import ServiceCard from '../Home/ServiceCard';
import { useCategoriesQuery } from '@/redux/api/categoryApi';

const ServiceByCategory = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = useServicesQuery({ ...query });
    const services = data?.services;
    const { data: categoryData } = useCategoriesQuery({ ...query });
    const categories = categoryData?.categories;

    // State variables to manage the active tab and filtered services
    const [activeTab, setActiveTab] = useState('Honeymoon');
    const [filteredServices, setFilteredServices] = useState([]);

    // Handle tab change
    const handleTabChange = (key: any) => {
        setActiveTab(key);
    };
    console.log(services)
    useEffect(() => {
        // Filter services based on the active tab/category
        const filtered = services?.filter((service: any) => service.categorires?.name === activeTab);
        setFilteredServices(filtered);
        console.log('activeTab:', activeTab);
        console.log('filteredServices:', filtered);
    }, [activeTab, services]);

    return (
        <>
            <div className="text-center mb-5">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Explore Our Service By Category</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Our diverse range of tour services spans the globe, taking you to the most stunning destinations, from bustling cities to tranquil natural landscapes.</p>
            </div>
            <Tabs
                defaultActiveKey='Honeymoon'
                centered
                activeKey={activeTab}
                onChange={handleTabChange}
            >
                {categories?.map((category: any) => (
                    <Tabs.TabPane tab={category.name} key={category.name}>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 lg:px-16 px-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            {filteredServices?.map((service: any) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </>
    );
};

export default ServiceByCategory;
