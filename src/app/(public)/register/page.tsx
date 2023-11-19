"use client";

import { Col, Row, message } from "antd";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAddUserMutation } from "@/redux/api/userApi";
import Loader from "@/components/UI/Shared/Loader";

type FormValues = {
    email: string;
    password: string;
};

const Register = () => {
    const [addUser] = useAddUserMutation();
    const router = useRouter();
    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        message.loading(<Loader />)
        try {
            const res = await addUser(data).unwrap();
            if (res) {
                router.push(`/login`);
            }
        } catch (err: any) {
            message.error(err.message);
        }
    };

    return (
        <div>
            <Row
                justify="center"
                align="middle"
                style={{
                    color: "black",
                }}
            >
                <Form submitHandler={onSubmit}>
                    <div className="p-8 bg-white m-auto rounded-lg w-[700px] shadow-md max-h-screen lg:mt-44">
                        <div className="mb-7">
                            <h3 className="font-semibold text-2xl text-gray-800">Register </h3>
                            <p className="text-gray-400">Already have an Account? <Link href={'/login'}
                                className="text-sm text-[#0f337a] hover:text-[#0f337a]">Login</Link></p>
                        </div>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    name="name"
                                    type="text"
                                    size="large"
                                    label="Enter Your Name"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    name="email"
                                    type="text"
                                    size="large"
                                    label="Enter Your Email" />

                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    name="password"
                                    type="password"
                                    size="large"
                                    label="Enter Your Password"
                                />

                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    name="contactNo"
                                    type="text"
                                    size="large"
                                    label="Enter Your Contact No"
                                />

                            </Col>
                        </Row>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-[#0f337a] hover:bg-[#0f337a] text-gray-100 p-3  rounded-lg tracking-wide font-semibold my-7 cursor-pointer transition ease-in duration-500">
                                Register
                            </button>
                        </div>
                    </div>
                </Form >
            </Row >
        </div >

    );
};

export default Register;