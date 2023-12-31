"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import { useAddAdminMutation } from "@/redux/api/adminApi";
import { adminSchema } from "@/schema/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, message } from "antd";

const CreateAdmin = () => {
    const [addAdmin] = useAddAdminMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating...");
        try {
            await addAdmin(data);
            message.success("Admin created successfully!");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    return (
        <div>
            <BreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Admin",
                        link: "/super_admin/admin",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Admin</h1>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">  Admin Information</h1>
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
                                    type="password"
                                    name="password"
                                    size="large"
                                    label="Password"
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
                                    label="Image Link"
                                />
                            </Col>
                        </Row>
                    </div>
                    <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Create Admin</button>
                </Form>
            </div>
        </div>
    );
};

export default CreateAdmin;