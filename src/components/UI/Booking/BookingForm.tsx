import Form from "../../Form/Form";
import FormDatePicker from "../../Form/FormDatePicker";


interface BookingFormProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  onFormSubmit: () => void;
  bookingSubmitted: any;
}

const BookingForm: React.FC<BookingFormProps> = ({ selectedDate, setSelectedDate, onFormSubmit, bookingSubmitted }) => {
  const handleSubmit = () => {
    onFormSubmit();
  };

  return (
    <Form submitHandler={handleSubmit}>
      <div>
        <FormDatePicker
          name="date"
          label="Selected Date"
          size="large"
          onChange={(dateString: any) => setSelectedDate(dateString)}
        />
      </div>
      <button className="bg-violet-600 text-white py-2 px-36 rounded mt-8 font-semibold" type="submit">Book</button>
    </Form>
  );
};

export default BookingForm;
