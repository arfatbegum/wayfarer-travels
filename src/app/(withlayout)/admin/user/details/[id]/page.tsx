"use client";

import ActionBar from "@/components/UI/Shared/ActionBar";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import Loader from "@/components/UI/Shared/Loader";
import { EditOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { IDProps } from "@/types";
import { useUserQuery } from "@/redux/api/userApi";

const Profile = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useUserQuery(id);

    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                    {
                        label: "User",
                        link: "/admin/user",
                    },
                ]}
            />
            <ActionBar title="User Profile" />
            <div className="flex gap-5">
                <div className="relative flex w-96 flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                    <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                        <Image width={350} height={350} src={data?.profileImg || "https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {data?.name}
                        </h4>
                        <p className="block bg-gradient-to-tr from-[#0f337a] to-violet-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased uppercase">
                            {data?.role}
                        </p>
                    </div>
                </div>
                <div className="py-10 relative flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                    <div className="flex justify-between items-center px-8 mb-5">
                        <h1 className="text-lg font-bold">User information</h1>
                        <Link href={`/admin/update/${data.id}`}>
                            <button className="flex items-center gap-2 bg-[#0f337a] text-white font-bold py-1 px-2 rounded mr-2">
                                Edit
                                <EditOutlined />
                            </button>
                        </Link>
                    </div>
                    <table className="text-sm">
                        <tbody>
                            <div>
                                <tr>
                                    <td className="px-10 py-2 text-gray-700 font-bold">ID</td>
                                    <td className="px-10 py-2">{data?.id}</td>
                                </tr>
                                <tr>
                                    <td className="px-10 py-2 text-gray-700 font-bold">Email</td>
                                    <td className="px-10 py-2">{data?.email}</td>
                                </tr>
                                <tr>
                                    <td className="px-10 py-2 text-gray-700 font-bold">Contact No</td>
                                    <td className="px-10 py-2">{data?.contactNo}</td>
                                </tr>
                                <tr>
                                    <td className="px-10 py-2 text-gray-700 font-bold">Present Address</td>
                                    <td className="px-10 py-2">{data?.address}</td>
                                </tr>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Profile;