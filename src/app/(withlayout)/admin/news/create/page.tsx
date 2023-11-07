"use client";

import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormInput from "@/components/Form/FormInput";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import QuillEditor from "@/components/Form/QuillEditor";
import { useAddNewsMutation } from "@/redux/api/newsApi";
import { getUserInfo } from "@/services/auth.services";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, message } from "antd";
import { newsSchema } from "@/schema/news";


const CreateNews = () => {
    const [addNews] = useAddNewsMutation();

    const onSubmit = async (data: any) => {
        const userInfo = getUserInfo() as any;
        const userId = userInfo?.userId;
        data.userId = userId;
        message.loading("Creating...");
        try {
            await addNews(data);
            message.success("News created successfully!");
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
                        label: "News",
                        link: "/admin/news",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create News</h1>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(newsSchema)}>
                    <div className="p-10 mb-5 relative flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                        <h1 className="text-lg font-bold mb-5">News Information</h1>
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
                    <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Create News</button>
                </Form>
            </div>
        </div>
    );
};

export default CreateNews;