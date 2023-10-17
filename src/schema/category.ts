import * as yup from "yup";

export const categorySchema = yup.object().shape({
  name: yup.string().required("Title is required"),
});
