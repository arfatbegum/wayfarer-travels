import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
  validation?: object;
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = "large",

}: UMDatePikerProps) => {
  const { control, setValue, formState: { errors }, } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };

  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || ""}
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
            className=" w-full text-sm  px-4 py-3 border  border-gray-200 rounded-lg focus:outline-none focus:border-[#0f337a]"
          />
        )}
      />
      <p className="text-red-500 italic mt-1">{errorMessage}</p>
    </div>
  );
};

export default FormDatePicker;