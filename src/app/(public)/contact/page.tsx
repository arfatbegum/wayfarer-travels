import Contact from "@/components/UI/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Wayfarer Travels",
    description: "Tour Booking Application",
};
  
const ConatctPage = () => {
    return (
        <div>
            <Contact/>
        </div>
    );
};

export default ConatctPage;