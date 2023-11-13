'use client'

import Link from 'next/link';
import DropDown from "./DropDown";
import { getUserInfo } from "@/services/auth.services";
import Image from "next/image";
import logo from "@/assets/white-logo.png"

const SuperAdminAndAdminHeader = () => {
    const { role } = getUserInfo() as any;

    return (
        <div className="inset-x-0 bg-[#0f337a] lg:fixed z-50 mx-auto w-full px-10 text-white">
            <div className="flex items-center justify-between"  >
                <Link href={`/`} className="flex items-center text-xl font-semibold mb-2 font-serif text-white font-family">
                    <Image width={50} height={60} src={logo} alt="logo" className="m-1.5 p-1.5" />
                    Wayfarer Travels
                </Link>
                <div>
                    <span className="mr-2 text-md capitalize text-white font-bold font-family">{role}</span>
                    <DropDown />
                </div>
            </div>
        </div>
    );
};

export default SuperAdminAndAdminHeader;