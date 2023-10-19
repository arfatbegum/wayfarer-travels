import Image from "next/image";
import Link from "next/link";

interface NewsProps {
    news: any
}


const NewsCard: React.FC<NewsProps>  = ({news}) => {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                    width={500}
                    height={500}
                    src={typeof news?.image === 'string' ? news.image : 'https://i.ibb.co/ydNWgpK/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
                    alt="ui/ux review check"
                    className="rounded"
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{ news?.contextType}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{ news?.name}</h1>
                    <p className="leading-relaxed mb-3">{news?.content?.slice(0,100)} ...</p>
                    <div className="flex items-center flex-wrap">
                        <Link href={`/news/details/${news?.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">    Read More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;