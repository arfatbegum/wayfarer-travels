'use client'

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormTextArea from "@/components/Form/FormTextArea";
import { Col, Row, message } from "antd";

const ContactForm = () => {
    const onSubmit = async (data: any) => {
        try {
            console.log(data)
        } catch (err: any) {
            message.error(err.message);
        }
    };
    return (
        <div className="lg:col-span-3 col-span-1">
            <Form submitHandler={onSubmit}>
                <div className="p-8 bg-white mx-auto border-2 border-gray-200 border-opacity-60 rounded-lg shadow-sm">
                    <div className="mb-7">
                        <h3 className="font-semibold text-2xl text-gray-800">Contact</h3>
                    </div>
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
                            span={24}
                        >
                            <FormInput
                                name="contactNo"
                                size="large"
                                label="Contact No"
                            />
                        </Col>
                        <Col
                            className="gutter-row mb-4"
                            span={24}
                        >
                            <FormTextArea
                                name="message"
                                label="Message"
                                rows={3}
                            />
                        </Col>


                    </Row>
                    <div>
                        <button type="submit" className="w-full flex justify-center bg-[#0f337a] hover:bg-[#0f337a] text-gray-100 p-3  rounded-lg tracking-wide font-semibold mt-4 cursor-pointer transition ease-in duration-500">
                            Submit
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default ContactForm;