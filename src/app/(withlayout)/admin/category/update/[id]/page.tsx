"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormTextArea from "@/components/Form/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useCategoryQuery, useUpdateCategoryMutation } from "@/redux/api/categoryApi";
import { IDProps } from "@/types";
import { Col, Row, message } from "antd";

const UpdateCategory = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useCategoryQuery(id);
    const [updateCategory] = useUpdateCategoryMutation();

    const onSubmit = async (values: any) => {
        message.loading("Updating...");
        try {
            await updateCategory({ id, body: values });
            message.success("Category updated successfully!");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    // @ts-ignore
    const defaultValues = {
        name: data?.name || "",
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
            <h1 className="py-5 text-lg font-bold">Update Category</h1>
            <div>
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">Update Category Information</h1>
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
                    <button className="bg-violet-600 text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Update Category</button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateCategory;