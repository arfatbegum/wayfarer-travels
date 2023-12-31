"use client";

import { Input, Select, message } from "antd";
import Link from "next/link";
import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    ReloadOutlined,
    EyeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import { useAdminsQuery, useDeleteAdminMutation, useUpdateAdminMutation } from "@/redux/api/adminApi";
import dayjs from "dayjs";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import ActionBar from "@/components/UI/Shared/ActionBar";
import DataTable from "@/components/UI/Shared/DataTable";
import CustomModal from "@/components/Modal/CustomModal";

const AdminPage = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [adminId, setAdminId] = useState<string>("");
    const [deleteAdmin] = useDeleteAdminMutation();
    const [updateAdmin] = useUpdateAdminMutation();

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

    const { data, isLoading } = useAdminsQuery({ ...query });
    const admins = data?.admins;
    const meta = data?.meta;

    const deleteHandler = async (id: string) => {
        message.loading("Deleting.....");
        try {
            const res = await deleteAdmin(id);
            if (res) {
                message.success("Admin Deleted successfully");
                setOpen(false);
            }
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const updateAdminRole = async (id: string, newRole: string) => {
        message.loading("Updating.....");
        try {
            await updateAdmin({ id, body: { role: newRole } });
            message.success("Admin Role Updated successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const role = [
        { label: 'admin', value: 'admin' },
        { label: 'user', value: 'user' },
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Contact No",
            dataIndex: "contactNo",
        },
        {
            title: "Role",
            render: function (data: any) {
                return (
                    <Select
                        defaultValue={data?.role}
                        style={{ width: 120 }}
                        options={role}
                        onChange={(newRole) => updateAdminRole(data?.id, newRole)}

                    />
                )
            }
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
                    <>
                        <Link href={`/super_admin/admin/details/${data.id}`}>
                            <button className="bg-[#0f337a] text-white font-bold py-1 px-2 rounded mr-2">
                                <EyeOutlined />
                            </button>
                        </Link>
                        <Link href={`/super_admin/admin/update/${data.id}`}>
                            <button className="bg-[#0f337a] text-white font-bold py-1 px-2 rounded mr-2">
                                <EditOutlined />
                            </button>
                        </Link>
                        <button onClick={() => {
                            setOpen(true);
                            setAdminId(data.id);
                        }} className="bg-red-500 text-white font-bold py-1 px-2 rounded mr-2">
                            <DeleteOutlined />
                        </button>
                    </>
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
                        label: "super_admin",
                        link: "/super_admin",
                    },
                ]}
            />
            <ActionBar title="Admin List">
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search admin ......"
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
                <Link href="/super_admin/admin/create">
                    <button className="bg-[#0f337a] px-4 py-2 ml-2 text-white rounded font-semibold float-right">Create</button>
                </Link>
            </ActionBar>
            <DataTable
                loading={isLoading}
                columns={columns}
                dataSource={admins}
                pageSize={size}
                totalPages={meta?.total}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />
            <CustomModal
                title="Remove Admin"
                isOpen={open}
                closeModal={() => setOpen(false)}
                handleOk={() => deleteHandler(adminId)}
            >
                <p className="my-5">Do you want to remove this Admin?</p>
            </CustomModal>
        </div>
    );
};

export default AdminPage;