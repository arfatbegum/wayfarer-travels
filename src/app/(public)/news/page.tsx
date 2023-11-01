
import NewsPage from "@/components/UI/News/NewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "News - Wayfarer Travels",
    description: "Tour Booking Application",
};

const News = () => {
    return (
        <div>
            <NewsPage />
        </div>
    );
};

export default News;