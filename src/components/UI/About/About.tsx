
'use client'

import Image from 'next/image';
import Intro from './Intro';
import UIBreadCrumb from '../Shared/UIBreadcrumb';
import banner from '@/assets/about-banner.jpg'
import WhyChooseUs from './WhyChooseUs';
import Team from './Team';
import Footer from '../Footer/Footer';
import Partners from './Partners';

const About = () => {
    return (
        <div>
              <div className="relative">
                <Image src={banner} alt="Hero image" width="2350" height="2359"
                    className="absolute w-full object-cover lg:h-76 h-76 opacity-90" />
                  <h1 className='text-3xl font-bold mb-3 text-center relative lg:pt-36 pt-4 text-white'>About Us</h1>
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
            <Team />
            <WhyChooseUs />
            <Partners/>
            <Footer/>
        </div>
    );
};

export default About;