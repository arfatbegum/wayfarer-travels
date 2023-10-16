"use client";

import ActionBar from "@/components/UI/ActionBar";
import BreadCrumb from "@/components/UI/BreadCrumb";
import Loader from "@/constants/Loader";
import { useGetProfileQuery } from "@/redux/api/adminApi";
import { EditOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
    const { data, isLoading } = useGetProfileQuery({});

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
                        label: "Profile",
                        link: "/admin/profile",
                    },
                ]}
            />
            <ActionBar title="Profile" />
            <div className="flex gap-5">
                <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <Image width={350} height={350} src={data?.profileImg} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {data?.name}
                        </h4>
                        <p className="block bg-gradient-to-tr from-violet-600 to-violet-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased uppercase">
                            {data?.role}
                        </p>
                    </div>
                </div>
                <div className="py-10 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="flex justify-between items-center px-8 mb-5">
                    <h1 className="text-lg font-bold">Profile information</h1>
                    <Link href={`/super_admin/profile/update`}>
                            <button className="flex items-center gap-2 bg-violet-700 text-white font-bold py-1 px-2 rounded mr-2">
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