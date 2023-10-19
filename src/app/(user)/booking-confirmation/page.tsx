
import {Result } from 'antd';
import Link from 'next/link';

const BookingConfirmation: React.FC = () => (
    <Result
        status="success"
        title="Successfully Booking Your Tour!"
        subTitle="Check Your Booking Details In Booking History"
        extra={[
            <>
                <Link href="/" className='bg-violet-600 p-2 text-white font-semibold rounded'>
                    Go Home
                </Link>
                <Link href={"/booking"} className='bg-violet-600 p-2 text-white font-semibold rounded'>Check Booking</Link>
            </>,
        ]}
    />
);

export default BookingConfirmation;