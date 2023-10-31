"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import { useAddCategoryMutation } from "@/redux/api/categoryApi";
import { categorySchema } from "@/schema/category";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, message } from "antd";

const CreateCategory = () => {
    const [addCategory] = useAddCategoryMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating...");
        try {
            await addCategory(data);
            message.success("Category created successfully!");
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
                        label: "Category",
                        link: "/admin/category",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Category</h1>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(categorySchema)}>
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">  Category Information</h1>
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
                        </Row>
                    </div>
                    <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Create Category</button>
                </Form>
            </div>
        </div>
    );
};

export default CreateCategory;