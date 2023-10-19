"use client";

import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormInput from "@/components/Form/FormInput";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import QuillEditor from "@/components/Form/QuillEditor";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, message } from "antd";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import { serviceSchema } from "@/schema/service";
import CategorySelectField from "@/components/Form/CategorySelectField";


const CreateService = () => {
    const [addService] = useAddServiceMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating...");
        try {
            const res = await addService(data);
            if (res) {
                message.success("Service created successfully!");
            }
        } catch (error: any) {
            message.error(error.message);
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
                        label: "Service",
                        link: "/admin/service",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Service</h1>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">Service Information</h1>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="name"
                                    size="large"
                                    label="Title"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormDatePicker
                                    name="validFrom"
                                    label="Valid From"
                                    size="large"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormDatePicker
                                    name="validTill"
                                    label="Valid Till"
                                    size="large"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="text"
                                    name="location"
                                    size="large"
                                    label="Location"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <CategorySelectField
                                    name="categoryId"
                                    label="Category"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="number"
                                    name="price"
                                    size="large"
                                    label="price"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="number"
                                    name="availableQunatity"
                                    size="large"
                                    label="Available Qunatity"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="number"
                                    name="person"
                                    size="large"
                                    label="Person"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="text"
                                    name="duration"
                                    size="large"
                                    label="Duration"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="image"
                                    size="large"
                                    label="Image Link"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <QuillEditor
                                    name="description"
                                    label="Description"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <QuillEditor
                                    name="facilities"
                                    label="Facilities"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <QuillEditor
                                    name="whyChooseUs"
                                    label="Why Choose Us"
                                />
                            </Col>
                        </Row>
                    </div>
                    <button className="bg-violet-600 text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Create Service</button>
                </Form>
            </div>
        </div>
    );
};

export default CreateService;