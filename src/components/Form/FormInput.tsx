"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
    name: string;
    type?: string;
    size?: "large" | "small";
    value?: string | string[] |number| undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
    onChange?: (e: any) => void
}

const FormInput = ({
    name,
    type,
    size = "large",
    value,
    id,
    placeholder,
    validation,
    label,
}: IInput) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const errorMessage = getErrorMessageByPropertyName(errors, name);

    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) =>
                    type === "password" ? (
                        <Input.Password
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            {...field}
                            value={value ? value : field.value}
                            className="w-full text-sm  px-4 py-3 border  border-gray-200 rounded-lg focus:outline-none focus:border-[#0f337a]"
                        />
                    ) : (
                        <Input
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            {...field}
                            value={value ? value : field.value}
                            className=" w-full text-sm  px-4 py-3 rounded-lg focus:outline-none focus:border-[#0f337a]"
                        />
                    )
                }
            />
            <p className="text-red-500 italic mt-1">{errorMessage}</p>
        </>
    );
};

export default FormInput;