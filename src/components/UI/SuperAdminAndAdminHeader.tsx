'use client'

import { Layout } from "antd";
import Link from 'next/link';
import DropDown from "./DropDown";
import { getUserInfo } from "@/services/auth.services";


const { Header:AntHeader } = Layout;

const SuperAdminAndAdminHeader = () => {
    const { role } = getUserInfo() as any;

    return (
        <AntHeader className="flex items-center justify-between"  >
            <Link href={`/`}> Travel Agency</Link>
            <div>
            <span className="mr-2 capitalize">{role}</span>
            <DropDown/>
           </div>
        </AntHeader>
    );
};

export default SuperAdminAndAdminHeader;