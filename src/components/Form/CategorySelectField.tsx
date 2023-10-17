import { useCategoriesQuery } from "@/redux/api/categoryApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";



type CategorySelectFieldProps = {
  name: string;
  label?: string;
};

const CategorySelectField = ({
  name,
  label,
}: CategorySelectFieldProps) => {
  const { data } = useCategoriesQuery({
    limit: 100,
    page: 1,
  });
  const categories = data?.categories;
  const categoriestOptions = categories?.map((category: any) => {
    return {
      label: category?.name,
      value: category?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={categoriestOptions as SelectOptions[]}
    />
  );
};

export default CategorySelectField;