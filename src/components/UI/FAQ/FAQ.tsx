"use client"

import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useFaqsQuery } from '@/redux/api/faqApi';
import Loader from '@/components/UI/Shared/Loader';
import Image from "next/image";
import banner from "@/assets/faq-banner.jpg"
import UIBreadCrumb from '@/components/UI/Shared/UIBreadcrumb';
import Footer from '@/components/UI/Footer/Footer';

const FAQ: React.FC = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = useFaqsQuery({ ...query });
    const faqs = data?.faqs || [];

    if (isLoading) {
        return <Loader />
    }

    const panelStyle = {
        marginBottom: 24,
        background: '#f1f1f1',
        borderRadius: '5px',
        border: '1px solid #0f337a',
    };

    const getItems = (panelStyle: any) => {
        return faqs.map((faq: any) => ({
            key: faq.id,
            label: faq.question,
            children: <p>{faq.answer}</p>,
            style: panelStyle,
        }));
    };

    return (
        <>
            <div className="relative bg-white">
                <Image src={banner} alt="Hero image" width="2350" height="2359"
                    className="absolute w-full object-cover h-76 opacity-90" />
                  <h1 className='text-3xl font-bold pb-2 text-center mb-2 relative pt-36 text-white'>Frequently Asked Question</h1>
                <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 flex  lg:flex-row gap-10 lg:gap-12">
                    <div className="relative mx-auto">
                        <UIBreadCrumb
                            items={[
                                {
                                    label: "FAQ",
                                    link: "/faq",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className="text-center mb-10 my-24">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">Explore Our Frequently Asked Questions</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Discover quick answers to common queries about our tour agency`s services. From booking tours to travel tips, our FAQs cover everything you need to know to make your journey unforgettable!</p>
            </div>
            <div className="w-full md:mt-0 sm:mt-14 my-10 px-16 ">
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    items={getItems(panelStyle)}
                />
            </div>
            <Footer/>
        </>
    );
}

export default FAQ;
