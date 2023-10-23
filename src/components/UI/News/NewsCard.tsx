//@ts-ignore
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import Link from "next/link";
import { BiTimeFive, BiCategoryAlt } from 'react-icons/bi';
import dayjs from "dayjs";

interface NewsProps {
    news: any
}


const NewsCard: React.FC<NewsProps> = ({ news }) => {
    const date = news.date;
    const formattedDate = dayjs(date).format("MMM D, YYYY");

    const totalReviews = Array.isArray(news?.reviews) ? news?.reviews.length : 0;

    // Calculate the sum of ratings
    const sumOfRatings = Array.isArray(news?.reviews)
        ? news?.reviews.reduce((total: any, review: any) => total + review.rating, 0)
        : 0;

    // Calculate the average rating
    const averageRating = totalReviews > 0 ? sumOfRatings / totalReviews : 0;

    return (
        <div className="p-4 md:w-1/3">
            <div className="relative h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-sm">
                <Image
                    width={500}
                    height={500}
                    src={typeof news?.image === 'string' ? news.image : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                    alt="ui/ux review check"
                    className="rounded rounded-b-none"
                />
                <span
                    className="!absolute top-4 left-4 bg-[#13357b] p-2 select-none rounded text-center align-middle font-sans text-xs font-medium uppercase text-white"
                ><span className="flex gap-1 items-center">
                        <BiTimeFive className='text-lg' />{formattedDate}</span>
                </span>
                <div className="px-6 pb-6 pt-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-xl"><BiCategoryAlt /></span>
                            <span className="text-md text-[#13357b]"> {news?.contentType}</span>
                        </div>
                        <p className="flex items-center gap-1 float-right text-base font-normal pb-2 text-blue-gray-900 antialiased">
                            <ReactStars
                                count={5}
                                size={22}
                                value={averageRating}
                                edit={false}
                                activeColor="#f3941e"
                            />
                            <span className="text-md text-[#f3941e] font-semibold">{totalReviews}.0</span>
                        </p>
                    </div>
                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3">{news?.title?.slice(0, 40)}...</h1>
                    <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: news?.content.slice(0, 100) + "..." }}></p>
                    <div className="flex items-center flex-wrap">
                        <Link href={`/news/details/${news?.id}`} className="w-full flex justify-center items-center rounded py-1.5 outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-yellow-400 hover:after:opacity-100 hover:after:scale-[2.5] bg-[#13357b] border-transparent hover:border-yellow-400">
                            <span className="relative z-10 text-white font-bold flex items-center">
                                Read more
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;