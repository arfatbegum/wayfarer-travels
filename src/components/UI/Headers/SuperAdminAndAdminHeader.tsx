'use client'

import { Layout } from "antd";
import Link from 'next/link';
import DropDown from "./DropDown";
import { getUserInfo } from "@/services/auth.services";
import Image from "next/image";
import logo from "@/assets/white-logo.png"

const { Header: AntHeader } = Layout;

const SuperAdminAndAdminHeader = () => {
    const { role } = getUserInfo() as any;

    return (
        <AntHeader className="flex items-center justify-between"  >
           <Link href={`/`} className="flex items-center text-xl font-semibold mb-2 font-serif">
                <Image width={50} height={60} src={logo} alt="logo" className="m-1.5 p-1.5" />
                Wayfarer Travels
            </Link>
            <div>
                <span className="mr-2 capitalize text-white font-bold">{role}</span>
                <DropDown />
            </div>
        </AntHeader>
    );
};

export default SuperAdminAndAdminHeader;