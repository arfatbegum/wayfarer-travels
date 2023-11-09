import dayjs from "dayjs";

interface BookingSummeryProps {
    packageName: string
    price: number
    formData: any
    currentStep: number
    setCurrentStep: any

}

const Summery: React.FC<BookingSummeryProps> = ({ packageName, price, formData, currentStep, setCurrentStep }) => {
    const date = dayjs(formData.date).format("MMM D, YYYY");
    const adultTotal = formData?.adult * price;
    const childrenTotal = formData?.children ? formData?.children * price : 0;
    const total = adultTotal + childrenTotal;

    return (
        <>
            <div className="flex flex-col justify-start items-start w-full font-family p-8">
                <div>
                    <h1 className="text-xl font-bold leading-6 text-gray-800 mt-5">Booking Summary</h1>
                    <div className="w-24 h-1 rounded-full bg-[#0f337a] inline-flex mt-2"></div>
                </div>
                <div className="flex mt-7 flex-col items-end w-full space-y-6">
                    <div className="flex justify-between w-full items-center">
                        <p className="text-[17px]  leading-4 text-gray-800 font-bold">Package Name</p>
                        <p className="text-[17px] font-semibold leading-4 text-gray-600">{packageName}</p>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-[17px]  leading-4 text-gray-800 font-bold">Package Price / Per Person</p>
                        <p className="text-[17px]  font-semibold leading-4 text-gray-600">${price}</p>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-[17px]  leading-4 text-gray-800 font-bold">Journey Date</p>
                        <p className="text-[17px]  font-semibold leading-4 text-gray-600">{date}</p>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-[17px] leading-4 text-gray-800 font-bold">Adult</p>
                        <p className="text-[17px]  font-semibold leading-4 text-gray-600">{formData?.adult} * {price}</p>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-[17px] leading-4 text-gray-800 font-bold">Children</p>
                        <p className="text-[17px]  font-semibold leading-4 text-gray-600">{formData?.children ? formData?.children * price : 0}</p>
                    </div>
                </div>
                <div className="flex justify-between w-full items-center pt-5 mt-5 border-t-2 border-gray-200">
                    <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total </p>
                    <p className="text-[17px]  font-semibold leading-4 text-gray-800">${total}</p>
                </div>
                <div className="flex justify-between w-full items-center mt-16">
                    <button onClick={() => setCurrentStep(currentStep - 1)} className="bg-[#0f337a] text-white py-2 px-8 rounded font-semibold" type="submit">Previous</button>
                    <button onClick={() => setCurrentStep(currentStep + 1)} className="bg-[#0f337a] px-8 text-white py-2 rounded font-semibold" type="submit">Payment</button>
                </div>
            </div>
        </>
    );
};

export default Summery;