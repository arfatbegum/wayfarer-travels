"use client";

import Link from "next/link";
import {
    ReloadOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import ActionBar from "@/components/UI/Shared/ActionBar";
import DataTable from "@/components/UI/Shared/DataTable";
import { useFeedbacksQuery } from "@/redux/FeedbackApi";

const Feedbacks = () => {
    const query: Record<string, any> = {};

    const { data, isLoading } = useFeedbacksQuery({ ...query });
    const feedbacks = data?.feedbacks;

    const columns = [
        {
            title: "Name",
            dataIndex: "user",
            render: function (data: Record<string, string>) {
                const fullName = `${data?.name}`;
                return <>{fullName}</>;
            },
        },
        {
            title: "Comment",
            dataIndex: "comment",
        },
        {
            title: "Suggestions",
            dataIndex: "suggestions",
        },
        {
            title: "Created at",
            dataIndex: "createdAt",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
            sorter: true,
        },
    ];

    return (
        <div>
            <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                ]}
            />
            <ActionBar title="Feedback List" />
            <DataTable
                loading={isLoading}
                columns={columns}
                dataSource={feedbacks}
            />
        </div>
    );
};

export default Feedbacks;