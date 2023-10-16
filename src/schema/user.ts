import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required and must be unique"),
  password: yup.string().required("Password is required"),
  contactNo: yup.string().required("Contact No is required"),
  address: yup.string().required(" Address is required"),
});
