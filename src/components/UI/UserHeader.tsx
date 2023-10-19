'use client'

import { Layout } from "antd";
import Link from 'next/link';
import DropDown from "./DropDown";
import { useGetProfileQuery } from "@/redux/api/userApi";

const { Header } = Layout;

const UserHeader = () => {
    const { data, isLoading } = useGetProfileQuery({});
    return (
        <Header className="flex items-center justify-between"  >
            <Link href={`/`}> Travel Agency</Link>
            <div className="flex gap-5 text-md font-semibold">
                <Link href={`/`}>Home</Link>
                <Link href={`/service`}>Service</Link>
                <Link href={`/news`}>News</Link>
                <Link href={`/faq`}>FAQ</Link>
            </div>
            <div>
            <span className="mr-2 capitalize text-white font-bold">{data?.name}</span>
                <DropDown />
            </div>
        </Header>
    );
};

export default UserHeader;