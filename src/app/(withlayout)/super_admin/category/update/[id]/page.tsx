"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import BreadCrumb from "@/components/UI/Shared/BreadCrumb";
import Loader from "@/components/UI/Shared/Loader";
import { useCategoryQuery, useUpdateCategoryMutation } from "@/redux/api/categoryApi";
import { IDProps } from "@/types";
import { Col, Row, message } from "antd";

const UpdateCategory = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useCategoryQuery(id);
    const [updateCategory] = useUpdateCategoryMutation();

    if (isLoading) {
        return <Loader />
    }

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
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Category",
                        link: "/super_admin/category",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Update Category</h1>
            <div>
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                    <div className="p-10 mb-5 relative flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
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
                    <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Update Category</button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateCategory;