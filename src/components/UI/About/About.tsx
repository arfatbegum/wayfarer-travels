
'use client'

import Image from 'next/image';
import Intro from './Intro';
import UIBreadCrumb from '../Shared/UIBreadcrumb';
import banner from '@/assets/about-banner.jpg'
import WhyChooseUs from './WhyChooseUs';
import Team from './Team';
import Footer from '../Footer/Footer';
import Partners from './Partners';
import { useTeamsQuery } from '@/redux/api/teamApi';
import Loader from '../Shared/Loader';

const About = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = useTeamsQuery({ ...query });
    const teams = data?.teams;
    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <div className="relative">
                            <Image quality={100} src={banner} alt="Hero image" width={500} height={200}
                                className="absolute w-full object-cover lg:h-76 opacity-90" />
                            <h1 className='lg:text-3xl text-xl font-bold lg:mb-3 mb-0  text-center relative lg:pt-36 pt-2 text-white'>About Us</h1>
                            <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 flex  lg:flex-row gap-10 lg:gap-12">
                                <div className="relative mx-auto">
                                    <UIBreadCrumb
                                        items={[
                                            {
                                                label: "About",
                                                link: "/about",
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <Intro />
                        <Team teams={teams} />
                        <WhyChooseUs />
                        <Partners />
                        <Footer />
                    </div>
                )
            }
        </>
    );
};

export default About;