"use client";

import { Input, message } from "antd";
import Link from "next/link";
import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import ActionBar from "@/components/UI/Shared/ActionBar";
import DataTable from "@/components/UI/Shared/DataTable";
import { useDeleteFaqMutation, useFaqsQuery } from "@/redux/api/faqApi";
import CustomModal from "@/components/Modal/CustomModal";

const FAQList = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [faqId, setFaqId] = useState<string>("");
    const [deleteFaq] = useDeleteFaqMutation();

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

    const { data, isLoading } = useFaqsQuery({ ...query });
    const faqs = data?.faqs;
    const meta = data?.meta;

    const deleteHandler = async (id: string) => {
        message.loading("Deleting.....");
        try {
            const res = await deleteFaq(id);
            if (res) {
                message.success("Faq Deleted successfully");
                setOpen(false);
            }
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const columns = [
        {
            title: "Questions",
            dataIndex: "question",
        },
        {
            title: "Answers",
            dataIndex: "answer",
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
                        <Link href={`/super_admin/faq/update/${data.id}`}>
                            <button className="bg-[#0f337a] text-white font-bold py-1 px-2 rounded mr-2">
                                <EditOutlined />
                            </button>
                        </Link>
                        <button onClick={() => {
                            setOpen(true);
                            setFaqId(data.id);
                        }} className="bg-red-500 text-white font-bold py-1 px-2 rounded mr-2">
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
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                ]}
            />
            <ActionBar title="Frequently Asked Question List">
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search Faq ......"
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
                <Link href="/super_admin/faq/create">
                    <button className="bg-[#0f337a] px-4 py-2 ml-2 text-white rounded font-semibold float-right">Create</button>
                </Link>
            </ActionBar>
            <DataTable
                loading={isLoading}
                columns={columns}
                dataSource={faqs}
                pageSize={size}
                totalPages={meta?.total}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />
            <CustomModal
                title="Remove Faq"
                isOpen={open}
                closeModal={() => setOpen(false)}
                handleOk={() => deleteHandler(faqId)}
            >
                <p className="my-5">Do you want to remove this Faq?</p>
            </CustomModal>
        </div>
    );
};

export default FAQList;