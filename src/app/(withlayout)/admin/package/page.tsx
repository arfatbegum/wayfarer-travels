"use client";

import { Input, message } from "antd";
import Link from "next/link";
import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    ReloadOutlined,
    EyeOutlined
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import ActionBar from "@/components/UI/Shared/ActionBar";
import DataTable from "@/components/UI/Shared/DataTable";
import { useDeletePackageMutation, usePackagesQuery } from "@/redux/api/packageApi";

const Package = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deletePackage] = useDeletePackageMutation();

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

    const { data, isLoading } = usePackagesQuery({ ...query });
    const packages = data?.packages;
    const meta = data?.meta;

    const deleteHandler = async (id: string) => {
        message.loading("Deleting.....");
        try {
            await deletePackage(id);
            message.success("Service Deleted successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const columns = [
        {
            title: "Title",
            dataIndex: "name",
        },
        {
            title: "Category",
            dataIndex: "categorires",
            render: function (data: Record<string, string>) {
                const category = `${data?.name}`;
                return <>{category}</>;
            },
        },
        {
            title: "Valid From",
            dataIndex: "validFrom",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
        },
        {
            title: "Valid Till",
            dataIndex: "validTill",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
        },
        {
            title: "Price",
            dataIndex: "price",
        },
        {
            title: "Location",
            dataIndex: "location",
        },
        {
            title: "People",
            dataIndex: "people",
        },
        {
            title: "Duration",
            dataIndex: "duration",
        },
        {
            title: "Actions",
            render: function (data: any) {
                return (
                    <div className="flex">
                        <Link href={`/package/details/${data.id}`}>
                            <button className="bg-[#0f337a] text-white font-bold py-1 px-2 rounded mr-2">
                                <EyeOutlined />
                            </button>
                        </Link>
                        <Link href={`/admin/package/update/${data.id}`}>
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
                        label: "Admin",
                        link: "/admin",
                    },
                ]}
            />
            <ActionBar title="Tour Package List">
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
                <Link href="/admin/package/create">
                    <button className="bg-[#0f337a] px-4 py-2 ml-2 text-white rounded font-semibold float-right">Create</button>
                </Link>
            </ActionBar>
            <DataTable
                loading={isLoading}
                columns={columns}
                dataSource={packages}
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

export default Package;