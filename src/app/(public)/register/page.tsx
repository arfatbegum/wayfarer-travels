"use client";

import { Row, message } from "antd";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAddUserMutation } from "@/redux/api/userApi";

type FormValues = {
    email: string;
    password: string;
};

const Register = () => {
    const [addUser] = useAddUserMutation();
    const router = useRouter();
    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
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
                    <div className="p-8 bg-white mx-auto rounded-3xl w-96 shadow-md mt-24">
                        <div className="mb-7">
                            <h3 className="font-semibold text-2xl text-gray-800">Register </h3>
                            <p className="text-gray-400">Already have an Account? <Link href={'/login'}
                                className="text-sm text-violet-600 hover:text-violet-600">Login</Link></p>
                        </div>
                        <div className="space-y-6">
                            <div className="" >
                                <FormInput
                                    name="name"
                                    type="text"
                                    size="large"
                                    label="Enter Your Name"
                                />
                            </div>
                            <div className="">
                                <FormInput name="email" type="text" size="large" label="Enter Your Email" />
                            </div>
                            <div className="" >
                                <FormInput
                                    name="password"
                                    type="password"
                                    size="large"
                                    label="Enter Your Password"
                                />
                            </div>
                            <div className="" >
                                <FormInput
                                    name="contactNo"
                                    type="text"
                                    size="large"
                                    label="Enter Your Contact No"
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-violet-600 hover:bg-violet-600 text-gray-100 p-3  rounded-lg tracking-wide font-semibold my-7 cursor-pointer transition ease-in duration-500">
                                Login
                            </button>
                        </div>
                    </div>
                </Form>
            </Row>
        </div>

    );
};

export default Register;