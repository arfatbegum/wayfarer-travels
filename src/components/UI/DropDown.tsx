"use client";

import { Avatar, Dropdown, Layout, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const DropDown = () => {
    const items: MenuProps["items"] = [
        {
            key: "0",
            label: (
                <button>
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