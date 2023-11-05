"use client"
import ActionBar from "@/components/UI/Shared/ActionBar";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import { useContactQuery, useUpdateContactMutation } from "@/redux/api/contactApi";
import { IDProps } from "@/types";
import image from "@/assets/enquiry.png"
import Image from "next/image";
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMailOpen, HiStatusOnline } from 'react-icons/hi';
import { Select, message } from "antd";


const ContactDetails = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useContactQuery(id);
    const [updateContact] = useUpdateContactMutation();

    const updateStatus = async (id: string, newStatus: string) => {
        message.loading("Updating.....");
        try {
            await updateContact({ id, body: { status: newStatus } });
            message.success("Admin Role Updated successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const status = [
        { label: 'pending', value: 'Pending' },
        { label: 'contacted', value: 'Contacted' },
    ];

    return (
        <>
            <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                    {
                        label: "Enquiry",
                        link: "/admin/contact",
                    },
                ]}
            />
            <ActionBar title="Enquiry Details" />
            <div className="py-10 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
                        <p className="flex gap-2 text-md font-medium items-center my-4">
                            <HiStatusOnline className="text-[#0f337a] text-xl" />
                            <Select
                                defaultValue={data?.status}
                                style={{ width: 120 }}
                                options={status}
                                onChange={(newStatus) => updateStatus(data?.id, newStatus)}

                            />
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