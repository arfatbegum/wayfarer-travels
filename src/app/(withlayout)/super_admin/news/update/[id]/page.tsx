"use client";

import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormInput from "@/components/Form/FormInput";
import QuillEditor from "@/components/Form/QuillEditor";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import Loader from "@/components/UI/Shared/Loader";
import { useNewsQuery, useUpdateNewsMutation } from "@/redux/api/newsApi";
import { getUserInfo } from "@/services/auth.services";
import { IDProps } from "@/types";
import { Col, Row, message } from "antd";

const UpdateNews = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useNewsQuery(id);
    const [updateNews] = useUpdateNewsMutation();

    if (isLoading) {
        return <Loader />
    }

    const onSubmit = async (values: any) => {
        message.loading("Updating...");
        const userInfo = getUserInfo() as any;
        const userId = userInfo?.userId;
        values.userId = userId;
        try {
            await updateNews({ id, body: values });
            message.success("News updated successfully!");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    // @ts-ignore
    const defaultValues = {
        title: data?.title || "",
        contentType: data?.contentType || "",
        content: data?.content || "",
        image: data?.image || "",
        date: data?.date || "",
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
                        label: "News",
                        link: "/super_admin/news",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Update News</h1>
            <div>
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                    <div className="p-10 mb-5 relative flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                        <h1 className="text-lg font-bold mb-5">Update News Information</h1>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="title"
                                    size="large"
                                    label="Title"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="text"
                                    name="contentType"
                                    size="large"
                                    label="Content Type"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormDatePicker
                                    name="date"
                                    label="Date"
                                    size="large"
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
                                    name="content"
                                    label="Content"
                                />
                            </Col>
                        </Row>
                    </div>
                    <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Update News</button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateNews;