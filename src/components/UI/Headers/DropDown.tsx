"use client";

import { Avatar, Button, Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { getUserInfo, isLoggedIn, removeUserInfo } from "@/services/auth.services";
import { authKey } from "@/constants/storageKey";
import Link from 'next/link';

const DropDown = () => {
    const router = useRouter();
    const userLoggedIn = isLoggedIn()
    const userInfo = getUserInfo() as any;
    const userRole = userInfo?.role;

    const logOut = () => {
        removeUserInfo(authKey);
        router.push("/login");
    };

    const items: MenuProps["items"] = [
        {
            key: "0",
            label: userLoggedIn && userRole === 'user' ? (
                <Link href="/profile">Profile</Link>
            ) : null,
        },
        {
            key: "1",
            label: userLoggedIn && userRole === 'user' ? (
                <Link href="/booking">Booking</Link>
            ) : null,
        },
        {
            key: "2",
            label: userLoggedIn && userRole === 'user' ? (
                <Link href="/feedback">Feedback</Link>
            ) : null,
        },
        {
            key: "3",
            label: (
                <Button className="bg-[#0f337a] text-white w-36" onClick={logOut}>
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