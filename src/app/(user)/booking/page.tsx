"use client";

import { Input, Select, message } from "antd";
import Link from "next/link";
import {
    SearchOutlined,
    ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import ActionBar from "@/components/UI/Shared/ActionBar";
import DataTable from "@/components/UI/Shared/DataTable";
import { useUpdateBookingMutation } from "@/redux/api/bookingApi";
import { useGetMyBookingQuery } from "@/redux/api/userApi";

const Booking = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [updateBooking] = useUpdateBookingMutation();

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

    const { data, isLoading } = useGetMyBookingQuery({ ...query });
    const bookings = data;
    const meta = data?.meta;

    const status = [
        { label: 'Cancelled', value: 'Cancelled' }
    ];

    const updateBookingStatus = async (id: string, newStatus: string) => {
        message.loading("Updating.....");
        try {
            await updateBooking({ id, body: { status: newStatus } });
            message.success(`Your Booking ${newStatus} successfully`);
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const columns = [
        {
            title: "Service Name",
            dataIndex: "service",
            render: function (data: Record<string, string>) {
                const name = `${data?.name}`;
                return <>{name}</>;
            },
        },
        {
            title: "Traveller",
            dataIndex: "service",
            render: function (data: Record<string, string>) {
                const person = `${data?.person}`;
                return <>{person}</>;
            },
        },
        {
            title: "Amount",
            dataIndex: "service",
            render: function (data: Record<string, string>) {
                const price = `${data?.price}`;
                return <>{price}</>;
            },
        },
        {
            title: "Payment Method",
            dataIndex: "paymentInfo",
            render: function (data: Record<string, string>) {
                const paymentMethod = `${data?.paymentMethod}`;
                return <>{paymentMethod}</>;
            },
        },
        {
            title: "Payment Status",
            dataIndex: "paymentInfo",
            render: function (data: Record<string, string>) {
                const paymentStatus = `${data?.paymentStatus}`;
                return <>{paymentStatus}</>;
            },
        },
        {
            title: "Paypal Transaction Id",
            dataIndex: "paymentInfo",
            render: function (data: Record<string, string>) {
                const paypalTransactionId = `${data?.paypalTransactionId}`;
                return <>{paypalTransactionId}</>;
            },
        },
        {
            title: "Booking Date",
            dataIndex: "createdAt",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
            sorter: true,
        },
        {
            title: "Journey Date",
            dataIndex: "date",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
            sorter: true,
        },
        {
            title: "Status",
            render: function (data: any) {
                return (
                    <Select
                        defaultValue={data?.status}
                        style={{ width: 120 }}
                        options={status}
                        onChange={(newStatus) => updateBookingStatus(data?.id, newStatus)}

                    />
                )
            }
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
            <ActionBar title="My Booking List">
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search Booking ......"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                {(!!sortBy || !!sortOrder || !!searchTerm) && (
                    <button
                        onClick={resetFilters}
                        className="bg-violet-600 px-4 py-2 ml-2 text-white rounded font-semibold float-right"
                    >
                        <ReloadOutlined />
                    </button>
                )}
            </ActionBar>
            <DataTable
                loading={isLoading}
                columns={columns}
                dataSource={bookings}
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

export default Booking;