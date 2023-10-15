"use client";

import { Avatar, Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { removeUserInfo } from "@/services/auth.services";
import { authKey } from "@/constants/storageKey";

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
                <button onClick={logOut}>
                    Logout
                </button>
            ),
        },
    ];
    return (
        <Dropdown menu={{ items }}>
            <a>
                <Space wrap size={16}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Space>
            </a>
        </Dropdown>
    );
};

export default DropDown;