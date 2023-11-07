"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import { useAddTeamMutation } from "@/redux/api/teamApi";
import { categorySchema } from "@/schema/category";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, message } from "antd";

const CreateCategory = () => {
    const [addTeam] = useAddTeamMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating...");
        try {
            await addTeam(data);
            message.success("Team Member Added successfully!");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    return (
        <div>
            <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                    {
                        label: "Team",
                        link: "/admin/team",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Team Member</h1>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(categorySchema)}>
                    <div className="p-10 mb-5 relative flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                        <h1 className="text-lg font-bold mb-5">Team Member Information</h1>
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
                                    name="designation"
                                    size="large"
                                    label="Designation"
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
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="linkedinUrl"
                                    size="large"
                                    label="Linkedin URL"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="profileImg"
                                    size="large"
                                    label="Image"
                                />
                            </Col>
                        </Row>
                    </div>
                    <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Create Team Member</button>
                </Form>
            </div>
        </div>
    );
};

export default CreateCategory;