'use client'

import { useNewsesQuery } from "@/redux/api/newsApi";
import NewsCard from "./NewsCard";
import Loader from "../Shared/Loader";


const News = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = useNewsesQuery({ ...query });
    const newses = data?.newses;

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-14">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Latest Travel News</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">In our Latest Travel News section, we keep you in the loop with the most current and relevant updates from the world of travel</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-[#13357b] inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 lg:px-16 px-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {newses && newses?.slice(-3).map((news: any) => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
