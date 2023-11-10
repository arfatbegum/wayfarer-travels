'use client'

import { useFeedbacksQuery } from "@/redux/api/FeedbackApi";
import FeedbackCard from "./FeedbackCard";
import Loader from "../Shared/Loader";

const Feedback = () => {
  const query: Record<string, any> = {};
  const { data, isLoading } = useFeedbacksQuery({ ...query });
  const feedbacks = data?.feedbacks;

  if (isLoading) {
    return <Loader />
  }

  return (
      <div className="container p-10 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Client Review</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Explore what our clients have to say about their unforgettable journeys. Read their reviews and gain insights into their adventures with us. Your next adventure could be just around the corner.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#0f337a] inline-flex"></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-3 md:space-y-0 space-y-6">
          {feedbacks && feedbacks?.map((feedback: any) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>
      </div>
  );
};

export default Feedback;
