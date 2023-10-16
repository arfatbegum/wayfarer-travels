import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
    name: string;
    label?: string;
    rows?: number;
    value?: string;
    placeholder?: string;
};

const FormTextArea = ({
    name,
    label,
    rows,
    value,
    placeholder,
}: TextAreaProps) => {
    const { control } = useFormContext();
    return (
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
    );
};

export default FormTextArea;