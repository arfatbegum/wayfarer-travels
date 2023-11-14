import Footer from '@/components/UI/Footer/Footer';
import Packages from '@/components/UI/Packages/Packages';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tour Packages - Wayfarer Travels",
    description: "Tour Booking Application",
};

const PackagesPage = () => {
    return (
        <div>
            <Packages />
            <Footer/>
        </div>
    );
};

export default PackagesPage;