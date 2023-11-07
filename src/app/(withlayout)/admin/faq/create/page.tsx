"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormTextArea from "@/components/Form/FormTextArea";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import { useAddFaqMutation } from "@/redux/api/faqApi";
import { faqSchema } from "@/schema/faq";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, message } from "antd";

const CreateFAQ = () => {
    const [addFaq] = useAddFaqMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating...");
        try {
            await addFaq(data);
            message.success("Faq created successfully!");
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
                        label: "Faq",
                        link: "/admin/faq",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Faq</h1>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(faqSchema)}>
                    <div className="p-10 mb-5 relative flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                        <h1 className="text-lg font-bold mb-5">  FAQ Information</h1>
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
                    <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Create FAQ</button>
                </Form>
            </div>
        </div>
    );
};

export default CreateFAQ;