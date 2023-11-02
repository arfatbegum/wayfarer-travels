import { Metadata } from "next";
import About from "@/components/UI/About/About"
export const metadata: Metadata = {
    title: "About - Wayfarer Travels",
    description: "Tour Booking Application",
};
  
const AboutPage = () => {
    return (
        <div>
            <About/>
        </div>
    );
};

export default AboutPage;