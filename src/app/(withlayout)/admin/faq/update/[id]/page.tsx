"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormTextArea from "@/components/Form/FormTextArea";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import Loader from "@/components/UI/Shared/Loader";
import { useFaqQuery, useUpdateFaqMutation } from "@/redux/api/faqApi";
import { IDProps } from "@/types";
import { Col, Row, message } from "antd";

const UpdateFAQ = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useFaqQuery(id);
    const [updateFaq] = useUpdateFaqMutation();

    if (isLoading) {
        return <Loader />
    }

    const onSubmit = async (values: any) => {
        message.loading("Updating...");
        try {
            await updateFaq({ id, body: values });
            message.success("Faq updated successfully!");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    // @ts-ignore
    const defaultValues = {
        question: data?.question || "",
        answer: data?.answer || "",
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
                        label: "FAQ",
                        link: "/admin/faq",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Update FAQ</h1>
            <div>
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">Update FAQ Information</h1>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="question"
                                    size="large"
                                    label="Question"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormTextArea
                                    name="answer"
                                    label="Answer"
                                    rows={5}
                                />
                            </Col>
                        </Row>
                    </div>
                    <button className="bg-violet-600 text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Update FAQ</button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateFAQ;