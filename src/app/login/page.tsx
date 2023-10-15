"use client";
import { Row, message } from "antd";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import { useUserLoginMutation } from "@/redux/api/authApi";

type FormValues = {
    email: string;
    password: string;
};

const Login = () => {
    const [userLogin] = useUserLoginMutation();
    const router = useRouter();

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            const res = await userLogin({ ...data }).unwrap();
            if (res?.accessToken) {
                router.push("/");
            }
            storeUserInfo({ accessToken: res?.accessToken });
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
                    backgroundColor: "#edf2f7",
                    color: "black"
                }}
            >
                <Form submitHandler={onSubmit}>
                    <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
                        <div className="mb-7">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p className="text-gray-400">Dont have an account? <a href="#"
                                className="text-sm text-violet-600 hover:text-violet-600">Sign Up</a></p>
                        </div>
                        <div className="space-y-6">
                            <div className="">
                                <FormInput name="email" type="text" size="large" label="User Id" />
                            </div>
                            <div className="" >
                                <FormInput
                                    name="password"
                                    type="password"
                                    size="large"
                                    label="User Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-violet-600 hover:bg-violet-600 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
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