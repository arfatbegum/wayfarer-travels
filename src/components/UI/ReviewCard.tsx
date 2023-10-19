//@ts-ignore
import ReactStars from "react-rating-stars-component";
import Image from 'next/image';

interface ReviewProps {
    review: any
}

const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
    return (
        <div>
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <Image
                        width={350} height={350} src={review?.user?.profileImg || 'https://i.ibb.co/rGZtkFD/950-9501518-our-terms-working-with-you-professional-boy-image.jpg'} alt="profile-picture"
                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {review?.user?.name}
                            </h5>
                        </div>
                        <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                            <ReactStars
                                count={5}
                                size={22}
                                value={review?.rating}
                                edit={false}
                                activeColor="#e6bd00"
                            />
                        </p>
                    </div>
                </div>
                <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {review?.comment}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;