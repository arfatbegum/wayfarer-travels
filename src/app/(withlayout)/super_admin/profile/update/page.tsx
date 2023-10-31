/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import ActionBar from "@/components/UI/Shared/ActionBar";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import Loader from "@/components/UI/Shared/Loader";
import { useGetProfileQuery, useUpdateProfileMutation } from "@/redux/api/superAdminApi";
import { Col, Row, message } from "antd";

const updateProfile = () => {
    const { data, isLoading } = useGetProfileQuery({});
    const [updateProfile] = useUpdateProfileMutation();

    if (isLoading) {
        return <Loader />
    }

    const onSubmit = async (values: any) => {
        message.loading("Updating.....");
        try {
            await updateProfile({ body: values });
            message.success("Profile updated successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    //@ts-ignore
    const defaultValues = {
        name: data?.name || "",
        email: data?.email || "",
        contactNo: data?.contactNo || "",
        address: data?.address || "",
        profileImg: data?.profileImg || "",
    };

    return (
        <>
            <BreadCrumb
                items={[
                    {
                        label: "Dashboard",
                        link: "/super_admin",
                    },
                    {
                        label: "Profile",
                        link: "/super_admin/profile",
                    },
                ]}
            />
            <ActionBar title="Update Profile" />

            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <h1 className="text-lg font-bold mb-5"> Update Profile information</h1>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col
                            className="gutter-row mb-4"
                            span={12}
                        >
                            <FormInput
                                type="text"
                                name="name"
                                size="large"
                                label="Name"
                            />
                        </Col>
                        <Col
                            className="gutter-row mb-4"
                            span={12}
                        >
                            <FormInput
                                type="text"
                                name="email"
                                size="large"
                                label="Email"
                            />
                        </Col>
                        <Col
                            className="gutter-row mb-4"
                            span={12}
                        >
                            <FormInput
                                type="text"
                                name="contactNo"
                                size="large"
                                label="Contact No"
                            />
                        </Col>
                        <Col
                            className="gutter-row mb-4"
                            span={12}
                        >
                            <FormInput
                                type="text"
                                name="address"
                                size="large"
                                label="Address"
                            />
                        </Col>
                        <Col
                            className="gutter-row mb-4"
                            span={12}
                        >
                            <FormInput
                                type="text"
                                name="profileImg"
                                size="large"
                                label="Profile Image"
                            />
                        </Col>
                    </Row>
                </div>
                <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Update Profile</button>
            </Form>

        </>
    );
};

export default updateProfile;