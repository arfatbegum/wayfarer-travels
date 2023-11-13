import React, { useState } from 'react';
import BookingForm from './BookingForm';
import PayPalButton from './PayPalButton';
import { SmileOutlined } from '@ant-design/icons';
import { useAddBookingMutation } from '@/redux/api/bookingApi';
import { Drawer, Space, Steps, message } from 'antd';
import { getUserInfo, isLoggedIn } from '@/services/auth.services';
import { PiPaypalLogoLight } from 'react-icons/pi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiVerifiedBadgeLine } from 'react-icons/ri';
import Summery from './Summery';
import BookingConfirmation from './BookingConfirmation';

interface BookingFormProps {
    open: boolean;
    onClose: () => void
    packageId: any
    packageName: string
    validFrom: string
    validTill: string
    price: number
    availableQunatity: number
    size: any
}

const BookingDrawer: React.FC<BookingFormProps> = ({ onClose, open, size, packageId, validFrom, validTill, price, availableQunatity, packageName }) => {
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const [bookingSubmitted, setBookingSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [addBooking] = useAddBookingMutation();
    const userLoggedIn = isLoggedIn();
    const [formData, setFormData] = useState({
        date: '',
        adult: 0,
        children: 0,
    });
    const adultTotal = formData?.adult * price;
    const childrenTotal = formData?.children ? formData?.children * price : 0;
    const total = adultTotal + childrenTotal;

    
    const handleFormSubmit = async (value: any) => {
        if (!userLoggedIn) {
            message.error("You are not Authorized! Please Login");
        }

        if (availableQunatity === 0) {
            message.error('This service is fully booked.');
            return;
        }

        if (new Date(value.date) < new Date(validFrom)) {
            message.error(`This service booking start from ${validFrom}`);
            return;
        }

        if (new Date(value.date) > new Date(validTill)) {
            message.error(`This service booking is not available. This was end on ${validTill}`);
            return;
        }
        setBookingSubmitted(true);
        setCurrentStep(currentStep + 1);
        setFormData(value);
    };

    const handlePaymentSuccess = async (details: any) => {
        try {
            if (!userLoggedIn) {
                message.error("You are not Authorized! Please Login");
            }
            const userInfo = getUserInfo() as any;
            const userId = userInfo?.userId;
            const paypalEmail = details.payer?.email_address || '';
            const paypalPayerId = details.payer?.payer_id || '';
            const paypalTransactionId = details.id || '';
            const paymentStatus = details.status || '';
            const data = {
                userId,
                packageId,
                ...formData,
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
                setPaymentSuccessful(true);
                setCurrentStep(currentStep + 1);
            }
        } catch (err) {
            message.error('An error occurred while creating the booking.');
        }
    };

    const steps = [
        {
            title: 'Booking Info',
            icon: <AiOutlineInfoCircle style={{ color: '#0f337a' }}/>,
            content: (
                <BookingForm
                    onFormSubmit={handleFormSubmit}
                    formData={formData}
                />
            ),
        },
        {
            title: 'Summery',
            icon: <RiVerifiedBadgeLine style={{ color: '#0f337a' }}/>,
            content: (
                <div>
                    {bookingSubmitted ? (
                        <Summery
                            packageName={packageName}
                            price={price}
                            formData={formData}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                    ) : null}
                </div>
            ),
        },
        {
            title: 'Pay',
            icon: <PiPaypalLogoLight style={{ color: '#0f337a' }}/>,
            content: (
                <PayPalButton
                    onSuccess={handlePaymentSuccess}
                    amount={total}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            ),
        },
        {
            title: 'Done',
            icon: <SmileOutlined style={{ color: '#0f337a' }} />,
            content: <div>
                {paymentSuccessful ? (
                    <BookingConfirmation />
                ) : null}
            </div>,
        },
    ];


    return (
        <Drawer
            title="Tour Booking"
            size={size}
            placement="right"
            onClose={onClose}
            open={open}
            extra={
                <Space>
                    <button onClick={onClose}>Close</button>
                </Space>
            }
        >
            <Steps
                current={currentStep}
                items={steps.map(step => ({ title: step.title, icon: step.icon }))}
            />
            {steps[currentStep].content}
        </Drawer>
    );
};

export default BookingDrawer;
