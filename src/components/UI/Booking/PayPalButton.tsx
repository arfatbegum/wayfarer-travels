import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PayPalButtonProps {
  onSuccess: (details: any) => void;
  amount: number;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ onSuccess, amount }) => {
  return (
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
                  value: amount.toFixed(2), // Format the amount with two decimal places
                  currency_code: "USD", // Change to your desired currency
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
  );
};

export default PayPalButton;
