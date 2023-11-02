import ReviewCard from "./ReviewCard";

interface ReviewProps {
    reviews: any
}

const Reviews: React.FC<ReviewProps> = ({ reviews }) => {
    return (
        <div className="my-5 p-8 relative flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
            <h1 className="text-lg font-bold mb-5">Reviews</h1>
            {reviews.map((review: any) => (
                <div key={review.id}>
                    <ReviewCard review={review} />
                </div>
            ))}
        </div>
    );
};

export default Reviews;
