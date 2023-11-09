"use client";

import { RiChatDeleteLine } from 'react-icons/ri';
import { Input, message } from "antd";
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
import { useCancelBookingMutation } from "@/redux/api/bookingApi";
import { useGetMyBookingQuery } from "@/redux/api/userApi";

const Booking = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [cancelBooking] = useCancelBookingMutation();

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

    const updateBookingStatus = async (id: string) => {
        message.loading("Cancelling.....");
        try {
            await cancelBooking({ id });
            message.success(`Your Booking Cancelled successfully`);
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const columns = [
        {
            title: "Package Name",
            dataIndex: "package",
            render: function (data: Record<string, string>) {
                const name = `${data?.name}`;
                return <>{name}</>;
            },
        },
        {
            title: "Adult",
            dataIndex: "adult",
        },
        {
            title: "Amount",
            dataIndex: "package",
            render: function (data: Record<string, string>) {
                const price = `${data?.price}`;
                return <>{price}</>;
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
            title: "Method",
            dataIndex: "paymentInfo",
            render: function (data: Record<string, string>) {
                const paymentMethod = `${data?.paymentMethod}`;
                return <p className="uppercase">{paymentMethod}</p>;
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
            title: "Payment Status",
            dataIndex: "paymentInfo",
            render: function (data: Record<string, string>) {
                const paymentStatus = `${data?.paymentStatus}`;
                return <p className="bg-green-500 px-2.5 py-1.5 rounded text-white capitalize font-medium">{paymentStatus}</p>;
            },
        },
        {
            title: "Status",
            dataIndex: "status",
            render: function (status: string) {
                console.log(status)
                if (status === "pending") {
                    return <span className="bg-yellow-400 px-4 py-1.5 rounded text-white uppercase font-medium">{status}</span>
                } else if (status === "cancelled") {
                    return <span className="uppercase bg-red-500 px-2.5 py-1.5 rounded text-white font-medium">{status}</span>
                } else if (status === "confirmed") {
                    return <span className="bg-green-500 px-2.5 py-1.5 rounded text-white uppercase font-medium">{status}</span>
                } else if (status === "completed") {
                    return <span className="bg-green-500 px-2.5 py-1.5 rounded text-white uppercase font-medium">{status}</span>
                }
            },
        },
        {
            title: "Actions",
            render: function (data: any) {
                return (
                    <button onClick={() => updateBookingStatus(data?.id)} className="bg-red-500 text-white font-bold py-1.5 px-2 rounded text-xl">
                        <RiChatDeleteLine />
                    </button>
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
                        label: "Booking",
                        link: "/booking",
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