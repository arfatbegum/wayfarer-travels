import Image from "next/image";
import UIBreadCrumb from "../Shared/UIBreadcrumb";
import ContactForm from "./ContactForm";
import Info from "./Info";
import banner from "@/assets/contact-banner.jpg"
import Footer from "../Footer/Footer";

const Contact = () => {
    return (
        <div>
              <div className="relative bg-white">
                <Image src={banner} alt="Hero image" width="2350" height="2359"
                    className="absolute w-full object-cover lg:h-76 opacity-90" />
                  <h1 className='lg:text-3xl text-xl font-bold lg:mb-3 mb-0  text-center relative lg:pt-36 pt-2 text-white'>Contact Us</h1>
                <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 flex  lg:flex-row gap-10 lg:gap-12">
                    <div className="relative mx-auto">
                        <UIBreadCrumb
                            items={[
                                {
                                    label: "Contact",
                                    link: "/contact",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className="text-center mt-10 lg:mt-20 mb-10">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">Contact With Us</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 lg:px-0 px-4">Contact Us for Your Unforgettable Journey! Whether you have questions, need assistance, or are ready to book your dream vacation, our tour agency is here to help. Get in touch with our friendly team to start planning your next adventure today!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 col gap-6 lg:px-10 px-4">
            <Info />
            <ContactForm />
          </div>
            <Footer/>
        </div>
    );
};

export default Contact;