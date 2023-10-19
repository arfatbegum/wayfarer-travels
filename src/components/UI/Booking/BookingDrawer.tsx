'use client'

import React, { useState } from 'react';
import BookingForm from './BookingForm';
import PayPalButton from './PayPalButtons';
import { useAddBookingMutation } from '@/redux/api/bookingApi';
import { Drawer, message } from 'antd';
import { getUserInfo, isLoggedIn } from '@/services/auth.services';
import { useRouter } from 'next/navigation';


interface BookingFormProps {
    open: boolean;
    onClose: () => void;
    myserviceId: any
    validFrom: string
    validTill: string
    price: number
}


const BookingDrawer: React.FC<BookingFormProps> = ({ onClose, open, myserviceId, validFrom, validTill, price }) => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState('');
    const [serviceId, setServiceId] = useState('');
    const [bookingSubmitted, setBookingSubmitted] = useState(false);

    const [addBooking] = useAddBookingMutation();
    const userLoggedIn = isLoggedIn();

    const handleFormSubmit = async () => {
        // For example, you can validate the selectedDate:
        if (!selectedDate) {
            message.error('Please select a date.');
            return;
        }

        // Check if the selectedDate is before the validFrom date
        if (new Date(selectedDate) < new Date(validFrom)) {
            message.error(`This service booking start from ${validFrom}`);
            return;
        }
        // Check if the selectedDate is before the validFrom date
        if (new Date(selectedDate) > new Date(validTill)) {
            message.error(`This service booking is not available. This was end on ${validTill}`);
            return;
        }
        const serviceId = myserviceId;
        setServiceId(serviceId);
        setBookingSubmitted(true);
    };

    const handlePaymentSuccess = async (details: any) => {
        try {
            const paypalEmail = details.payer?.email_address || '';
            const paypalPayerId = details.payer?.payer_id || '';
            const paypalTransactionId = details.id || '';
            const paymentStatus = details.status || '';

            const userInfo = getUserInfo() as any;
            const userId = userInfo?.userId;

            const data = {
                userId,
                serviceId,
                date: selectedDate,
                paymentInfo: {
                    paymentMethod: 'paypal',
                    paypalEmail,
                    paymentStatus,
                    paypalPayerId,
                    paypalTransactionId,
                },
            };
            message.loading('Creating...');
            const response = await addBooking(data);

            if (response) {
                message.success('Booking created successfully!');
            }
            if (!userLoggedIn) {
                message.error("You are not Authorized! Please Login");
            }
            router.push('/')
        } catch (err) {
            message.error('An error occurred while creating the booking.');
        }
    };

    return (
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
            <BookingForm
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onFormSubmit={handleFormSubmit}
                bookingSubmitted={bookingSubmitted}
            />
            <div className='mt-6'>
                {bookingSubmitted ? (
                    <PayPalButton
                        selectedDate={selectedDate}
                        serviceId={serviceId}
                        onSuccess={handlePaymentSuccess}
                        amount={price}
                    />
                ) : null}
            </div>
        </Drawer>
    );
};

export default BookingDrawer;
