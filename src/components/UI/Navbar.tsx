"use client";

import { Layout } from "antd";
import Link from 'next/link';
import DropDown from "./DropDown";

const { Header } = Layout;

const Navbar = () => {
    return (
        <Header className="flex items-center justify-between bg-white"  >
            <Link href={`/`}> Travel Agency</Link>
            <div className="flex gap-5 text-md">
                <Link href={`/`}>Home</Link>
                <Link href={`/packages`}>Packages</Link>
                <Link href={`/news`}>News</Link>
                <Link href={`/faq`}>FAQ</Link>
                <Link href={`/dashboard/profile`}>Dashboard</Link>
            </div>
            <DropDown/>
        </Header>
    );
};

export default Navbar;