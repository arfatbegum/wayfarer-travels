import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PayPalButtonProps {
  onSuccess: (details: any) => void;
  amount: number;
  currentStep: number
  setCurrentStep: any
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ onSuccess, amount, currentStep, setCurrentStep }) => {
  return (
    <div className="font-family m-8">
      <h1 className="text-xl font-bold leading-6 text-gray-800 ">Payment Now </h1>
      <div className="w-16 h-1 rounded-full bg-[#0f337a] inline-flex mt-2"></div>
      <div className="flex justify-between w-full items-center my-10">
        <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total </p>
        <p className="text-[17px]  font-semibold leading-4 text-gray-800">${amount}</p>
      </div>
      <PayPalScriptProvider
        options={{
          clientId: "AXwWXSSnPGX8bALY1GqEU2yy3uG8F4LX98KftAmg33H2Y8Npa2oaw0ywG7fq52QLrEwSfo4r3fKgJdEB",
        }}
      >
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount.toFixed(2), 
                    currency_code: "USD", 
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions): Promise<void> => {
            if (actions.order) {
              const details = await actions.order.capture();
              // Handle the payment success
              onSuccess(details);
            } else {
              // Handle the case where actions.order is undefined
              console.error("actions.order is undefined");
            }
          }}
        />
      </PayPalScriptProvider>
      <button onClick={() => setCurrentStep(currentStep - 1)} className="bg-[#0f337a] mt-5 text-white py-2 px-8 rounded font-semibold" type="submit">Previous</button>
    </div>
  );
};

export default PayPalButton;
