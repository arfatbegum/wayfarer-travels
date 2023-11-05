"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

type TextAreaProps = {
    name: string;
    label?: string;
    rows?: number;
    value?: string;
    placeholder?: string;
    validation?: object;
};

const FormTextArea = ({
    name,
    label,
    rows,
    value,
    placeholder,
}: TextAreaProps) => {
    const { control, formState: { errors }, } = useFormContext();
    const errorMessage = getErrorMessageByPropertyName(errors, name);

    return (
        <>
            <div className={`flex flex-col  w-full`}>
                {label ? label : null}
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Input.TextArea
                            rows={rows}
                            placeholder={placeholder}
                            {...field}
                            defaultValue={value}
                            className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                        />
                    )}
                />
            </div>
            <p className="text-red-500 italic mt-1">{errorMessage}</p>
        </>
    );
};

export default FormTextArea;