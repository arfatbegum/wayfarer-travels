import * as yup from "yup";

export const serviceSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  location: yup.string().required("location is required"),
 // price: yup.number().required(" price is required"),
  person: yup.number().required(" person is required"),
  duration: yup.string().required(" duration is required"),
  availableQunatity: yup.number().required("available Qunatity is required"),
});
