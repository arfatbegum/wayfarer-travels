import * as yup from "yup";

export const newsSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  contentType: yup.string().required("Content Type is required"),
});
