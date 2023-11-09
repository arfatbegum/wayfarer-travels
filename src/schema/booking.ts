import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  date: yup.string().required("Please select your Journey Date"),
  adult: yup.string().required("Adult is required"),
});