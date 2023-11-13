"use client";

import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    ReloadOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import ActionBar from "@/components/UI/Shared/ActionBar";
import DataTable from "@/components/UI/Shared/DataTable";
import { useDeleteFeedbackMutation } from "@/redux/api/FeedbackApi";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import { Input, message } from "antd";
import Link from "next/link";
import { useGetMyFeedbackQuery } from "@/redux/api/userApi";

const Feedbacks = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteFeedback] = useDeleteFeedbackMutation();

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    const debouncedSearchTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    if (!!debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }

    const { data, isLoading } = useGetMyFeedbackQuery({ ...query });
    const feedbacks = data;
    const meta = data?.meta;

    const deleteHandler = async (id: string) => {
        message.loading("Deleting.....");
        try {
            await deleteFeedback(id);
            message.success("Feedback Deleted successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "user",
            render: function (data: any) {
                const fullName = `${data?.name}`;
                return <p>{fullName}</p>;
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
        {
            title: "Actions",
            render: function (data: any) {
                return (
                    <div className="flex">
                        <Link href={`/feedback/update/${data.id}`}>
                            <button className="bg-[#0f337a] text-white font-bold py-1 px-2 rounded mr-2">
                                <EditOutlined />
                            </button>
                        </Link>
                        <button onClick={() => deleteHandler(data?.id)} className="bg-red-500 text-white font-bold py-1 px-2 rounded mr-2">
                            <DeleteOutlined />
                        </button>
                    </div>
                );
            },
        },
    ];

    const onPaginationChange = (page: number, pageSize: number) => {
        setPage(page);
        setSize(pageSize);
    };
    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        setSortBy(field as string);
        setSortOrder(order === "ascend" ? "asc" : "desc");
    };

    const resetFilters = () => {
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
    };

    return (
        <div>
            <BreadCrumb
                items={[
                    {
                        label: "Feedback",
                        link: "/feedback",
                    },
                ]}
            />
            <ActionBar title="Feedback List" >
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search ......"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                {(!!sortBy || !!sortOrder || !!searchTerm) && (
                    <button
                        onClick={resetFilters}
                        className="bg-[#0f337a] px-4 py-2 ml-2 text-white rounded font-semibold float-right"
                    >
                        <ReloadOutlined />
                    </button>
                )}
                <Link href="/feedback/create" className="w-40">
                    <button className="bg-[#0f337a] px-4 py-2 ml-2 text-white rounded font-semibold float-right">Write Feedback</button>
                </Link>
            </ActionBar>
            <DataTable
                loading={isLoading}
                columns={columns}
                dataSource={feedbacks}
                pageSize={size}
                totalPages={meta?.total}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />
        </div>
    );
};

export default Feedbacks;