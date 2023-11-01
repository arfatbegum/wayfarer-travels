import FAQ from "@/components/UI/FAQ/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ - Wayfarer Travels",
    description: "Tour Booking Application",
};
  
const FAQPage = () => {
    return (
        <div>
            <FAQ/>
        </div>
    );
};

export default FAQPage;