'use client'

import { useFeedbacksQuery } from "@/redux/FeedbackApi";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  const query: Record<string, any> = {};
  const { data, isLoading } = useFeedbacksQuery({ ...query });
  const feedbacks = data?.feedbacks;
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-14">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Client Review</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Explore what our clients have to say about their unforgettable journeys. Read their reviews and gain insights into their adventures with us. Your next adventure could be just around the corner.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-violet-600 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 lg:px-16 px-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {feedbacks && feedbacks?.map((feedback: any) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
