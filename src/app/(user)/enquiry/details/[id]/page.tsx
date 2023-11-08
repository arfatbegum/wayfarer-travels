"use client"
import ActionBar from "@/components/UI/Shared/ActionBar";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import { IDProps } from "@/types";
import image from "@/assets/enquiry.png"
import Image from "next/image";
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMailOpen, HiStatusOnline } from 'react-icons/hi';
import { useGetMySingleEnquiryQuery } from "@/redux/api/userApi";


const ContactDetails = ({ params }: IDProps) => {
    const { id } = params;
    const { data } = useGetMySingleEnquiryQuery(id);

    return (
        <>
            <BreadCrumb
                items={[
                    {
                        label: "Enquiry",
                        link: "/enquiry",
                    },
                ]}
            />
            <ActionBar title="Enquiry Details" />
            <div className="py-10 relative flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                <div className="flex justify-between px-8">
                    <div className="p-4">
                        <h1 className="text-lg font-bold mb-2">{data?.name}</h1>
                        <p className="flex gap-2 text-md font-medium items-center my-4">
                            <HiOutlineMailOpen className="text-[#0f337a] text-xl" />
                            {data?.email}
                        </p>
                        <p className="flex gap-2 text-md font-medium items-center my-3">
                            <FiPhoneCall className="text-[#0f337a] text-lg" />
                            {data?.contactNo}
                        </p>
                        <p className="flex gap-2 text-md font-medium items-center my-4 capitalize">
                        <HiStatusOnline className="text-[#0f337a] text-xl" />
                            {data?.status}
                        </p>
                        <div className="mt-2">
                            <h4 className="text-md font-medium my-2">Message</h4>
                            <p>{data?.message}</p>
                        </div>
                    </div>
                    <Image src={image} width={500} height={300} alt="" className="border-l border-gray-200 " />
                </div>
            </div>
        </>
    );
};

export default ContactDetails;