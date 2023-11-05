"use client";
import { Row, message } from "antd";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { getUserInfo, storeUserInfo } from "@/services/auth.services";
import { useUserLoginMutation } from "@/redux/api/authApi";
import Link from "next/link";
import Loader from "@/components/UI/Shared/Loader";

type FormValues = {
    email: string;
    password: string;
};

const Login = () => {
    const [userLogin] = useUserLoginMutation();
    const router = useRouter();
    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        message.loading(<Loader />)
        try {
            const res = await userLogin({ ...data }).unwrap();
            if (res?.accessToken) {
                storeUserInfo({ accessToken: res?.accessToken });
                const userInfo = getUserInfo() as any;
                if (userInfo?.role) {
                    router.push(`/${userInfo.role}/profile`);
                }
                if (userInfo?.role === 'user') {
                    router.push(`/`);
                }
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
                    height: "100vh",
                    color: "black"
                }}
            >
                <Form submitHandler={onSubmit}>
                    <div className="p-12 bg-white mx-auto rounded-3xl w-96 shadow-md">
                        <div className="mb-7">
                            <h3 className="font-semibold text-2xl text-gray-800">Login </h3>
                            <p className="text-gray-400">Dont have an account? <Link href={'/register'}
                                className="text-sm text-[#0f337a] hover:text-[#0f337a]">Register</Link></p>
                        </div>
                        <div className="space-y-6">
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
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-[#0f337a] hover:bg-[#0f337a] text-gray-100 p-3  rounded-lg tracking-wide font-semibold my-7 cursor-pointer transition ease-in duration-500">
                                Login
                            </button>
                        </div>
                    </div>
                </Form>
            </Row>
        </div>

    );
};

export default Login;