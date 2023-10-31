"use client";

import { Input, Select, message } from "antd";
import Link from "next/link";
import {
    DeleteOutlined,
    SearchOutlined,
    ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import ActionBar from "@/components/UI/Shared/ActionBar";
import DataTable from "@/components/UI/Shared/DataTable";
import { useBookingsQuery, useDeleteBookingMutation, useUpdateBookingMutation } from "@/redux/api/bookingApi";

const Booking = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteBooking] = useDeleteBookingMutation();
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

    const { data, isLoading } = useBookingsQuery({ ...query });
    const bookings = data?.bookings;
    const meta = data?.meta;

    console.log(bookings)

    const deleteHandler = async (id: string) => {
        message.loading("Deleting.....");
        try {
            await deleteBooking(id);
            message.success("Booking Deleted successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const status = [
        { label: 'Processing', value: 'Processing' },
        { label: 'Confirmed', value: 'Confirmed' },
        { label: 'Cancelled', value: 'Cancelled' },
        { label: 'Completed', value: 'Completed' },
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
            title: "paymentMethod",
            dataIndex: "paymentInfo",
            render: function (data: Record<string, string>) {
                const paymentMethod = `${data?.paymentMethod}`;
                return <>{paymentMethod}</>;
            },
        },
        {
            title: "paymentStatus",
            dataIndex: "paymentInfo",
            render: function (data: Record<string, string>) {
                const paymentStatus = `${data?.paymentStatus}`;
                return <>{paymentStatus}</>;
            },
        },
        {
            title: "paypalTransactionId",
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

        {
            title: "Actions",
            render: function (data: any) {
                return (
                    <div className="flex">
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
            <ActionBar title="Tour Booking List">
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
                        className="bg-[#0f337a] px-4 py-2 ml-2 text-white rounded font-semibold float-right"
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