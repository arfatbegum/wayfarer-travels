"use client";

import { Avatar, Button, Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { removeUserInfo } from "@/services/auth.services";
import { authKey } from "@/constants/storageKey";
import Link from 'next/link';

const DropDown = () => {
    const router = useRouter();

    const logOut = () => {
        removeUserInfo(authKey);
        router.push("/login");
    };

    const items: MenuProps["items"] = [
        {
            key: "0",
            label: (
                <Link href="/profile" >
                    Profile
                </Link>
            ),
        },
        {
            key: "1",
            label: (
                <Link href="/booking" >
                    Booking
                </Link>
            ),
        },
        {
            key: "1",
            label: (
                <Link href="/feedback" >
                    Feedback
                </Link>
            ),
        },
        {
            key: "2",
            label: (
                <Button className="bg-violet-600 text-white w-36"  onClick={logOut} >
                    Logout
                </Button>
            ),
        },
    ];
    return (
        <Dropdown menu={{ items }} >
                <Space wrap size={16}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Space>
        </Dropdown>
    );
};

export default DropDown;