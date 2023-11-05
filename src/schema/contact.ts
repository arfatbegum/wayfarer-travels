import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  contactNo: yup.string().required("Contact No is required"),
  message: yup.string().required("Message is required"),
});
