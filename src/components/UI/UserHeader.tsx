'use client'

import { Layout } from "antd";
import Link from 'next/link';
import DropDown from "./DropDown";
import { getUserInfo } from "@/services/auth.services";

const { Header } = Layout;

const UserHeader = () => {
    const { role } = getUserInfo() as any;
    return (
        <Header className="flex items-center justify-between"  >
            <Link href={`/`}> Travel Agency</Link>
            <div className="flex gap-5 text-md font-semibold">
                <Link href={`/`}>Home</Link>
                <Link href={`/service`}>Service</Link>
                <Link href={`/news`}>News</Link>
                <Link href={`/faq`}>FAQ</Link>
                <Link href={`/dashboard/profile`}>Dashboard</Link>
            </div>
            <div>
                <span className="mr-2 capitalize">{role}</span>
                <DropDown />
            </div>
        </Header>
    );
};

export default UserHeader;