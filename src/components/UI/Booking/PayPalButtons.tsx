'use client'

import { PayPalButton } from 'react-paypal-button-v2';

interface BookingFormProps {
  serviceId: string;
  onSuccess: (date: any) => void;
  selectedDate: any
  amount:number
}

const PayPalButtons: React.FC<BookingFormProps> = ({ serviceId, onSuccess, selectedDate, amount }) => {
  return (
    <PayPalButton
      amount={amount}
      currency="USD"
      onSuccess={onSuccess}
      options={{
        clientId: "AXwWXSSnPGX8bALY1GqEU2yy3uG8F4LX98KftAmg33H2Y8Npa2oaw0ywG7fq52QLrEwSfo4r3fKgJdEB",
      }}
    />
  );
};

export default PayPalButtons;
