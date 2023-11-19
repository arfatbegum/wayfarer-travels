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
                <Link href={`/`} className="flex items-center text-xl font-semibold text-white font-family">
                    <Image quality={100} width={200} height={60} src={logo} alt="logo" className="my-5" />
                </Link>
                <div>
                    <span className="mr-2 text-lg capitalize text-white font-family">{role}</span>
                    <DropDown />
                </div>
            </div>
        </div>
    );
};

export default SuperAdminAndAdminHeader;