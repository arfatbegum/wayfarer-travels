"use client";

import CategorySelectField from "@/components/Form/CategorySelectField";
import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormInput from "@/components/Form/FormInput";
import QuillEditor from "@/components/Form/QuillEditor";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import Loader from "@/components/UI/Shared/Loader";
import { useServiceQuery, useUpdateServiceMutation } from "@/redux/api/serviceApi";
import { IDProps } from "@/types";
import { Col, Row, message } from "antd";

const UpdateService = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useServiceQuery(id);
    const [updateService] = useUpdateServiceMutation();

    if (isLoading) {
        return <Loader />
    }

    const onSubmit = async (values: any) => {
        message.loading("Updating...");
        try {
            const res = await updateService({ id, body: values });
            if (res) {
                message.success("Service updated successfully!");
            }
        } catch (error: any) {
            if (error.response) {
                message.error('Request failed with status code: ' + error.response.status);
            } else if (error.message) {
                message.error(error.message);
            } else {
                message.error('An error occurred. Please try again later.');
            }
        }
    };

    // @ts-ignore
    const defaultValues = {
        name: data?.name || "",
        validFrom: data?.validFrom || "",
        validTill: data?.validTill || "",
        location: data?.location || "",
        categoryId: data?.categoryId || "",
        price: data?.price || "",
        person: data?.person || "",
        duration: data?.duration || "",
        availableQunatity: data?.availableQunatity || "",
        image: data?.image || "",
        description: data?.description || "",
        facilities: data?.facilities || "",
        whyChooseUs: data?.whyChooseUs || "",
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
            <h1 className="py-5 text-lg font-bold">Update Service</h1>
            <div>
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">Update Service Information</h1>
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
                    <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Update Service</button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateService;