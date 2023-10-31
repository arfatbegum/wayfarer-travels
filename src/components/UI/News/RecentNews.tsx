import { useNewsesQuery } from "@/redux/api/newsApi";
import Image from "next/image";
import { BiTimeFive, BiCategoryAlt } from 'react-icons/bi';
import dayjs from "dayjs";
import Link from "next/link";

const RecentNews = () => {
    const query: Record<string, any> = {};
    const { data } = useNewsesQuery({ ...query });
    const newses = data?.newses;

    return (
        <div className="height:min-content px-8 pt-8 pb-5 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm">
            <h1 className="pb-1 text-lg font-bold">Recent News</h1>
            <div className="w-20 h-1 rounded-full bg-[#0f337a] inline-flex mb-6"></div>
            <div className="flex flex-wrap sm:flex-row flex-col justify-between mb-5">
                {newses && newses.slice(-4).map((news: any) => (
                    <div key={news.id} className="flex mb-2 gap-3">
                        <Image
                            width={100}
                            height={100}
                            src={typeof news?.image === 'string' ? news.image : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                            alt="ui/ux review check"
                            className="rounded"
                        />
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <span className="text-yellow-400 text-xl"><BiTimeFive /></span>
                                <span className="text-md text-[#0f337a]"> {dayjs(news?.date).format("MMM D, YYYY")}</span>
                            </div>
                            <Link href={`/news/details/${news?.id}`} className="text-gray-900 font-bold title-font text-xl mb-2 sm:mb-0 hover:underline hover:text-yellow-400 mt-2">{news?.title?.slice(0, 27)}...</Link>
                            <span className="inline-flex items-center mt-2">
                                <Image
                                    width={300}
                                    height={300}
                                    src={typeof news?.user?.profileImg === 'string' ? news?.user?.profileImg : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                                    alt="ui/ux review check"
                                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-3">
                                    <span className="title-font font-medium text-gray-900">{news?.user?.name}</span>
                                </span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentNews;