import FormInput from "@/components/Form/FormInput";
import Form from "../../Form/Form";
import FormDatePicker from "../../Form/FormDatePicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "@/schema/booking";


interface BookingFormProps {
  onFormSubmit: (value: any) => void;
  formData: any
}

const BookingForm: React.FC<BookingFormProps> = ({ onFormSubmit }) => {

  const handleSubmit = (value: any) => {
    const isoDate = new Date(value.date).toISOString();
    value.date = isoDate;
    value.adult = parseInt(value.adult)
    value.children = parseInt(value.children)
    onFormSubmit(value);
  };

  return (
    <Form submitHandler={handleSubmit} resolver={yupResolver(bookingSchema)}>
      <div className="m-8 font-family">
        <h1 className="text-xl font-bold leading-6 text-gray-800">Booking Information</h1>
        <div className="w-16 h-1 rounded-full bg-[#0f337a] inline-flex mt-2 mb-5"></div>
        <p className="mb-5">
          <FormDatePicker
            name="date"
            label="Select Date"
            size="large"
          />
        </p>
        <p className="mb-5">
          <FormInput
            type="number"
            name="adult"
            label="Adult"
            size="large"
          />
        </p>
        <FormInput
          type="number"
          name="children"
          label="Children"
          size="large"
        />
        <button className="w-full bg-[#0f337a] text-white py-2 px-36 rounded mt-8 font-semibold" type="submit">Continue Booking</button>
      </div>
    </Form>
  );
};

export default BookingForm;
