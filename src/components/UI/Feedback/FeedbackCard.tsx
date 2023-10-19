'use client'

import Image from 'next/image';

interface FeedbackProps {
    feedback: any
}

const FeedbackCard: React.FC<FeedbackProps> = ({ feedback }) => {
    return (
        <div className="p-2 md:w-1/2 lg:w-1/4  flex flex-col">
            <div className="relative p-6 flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <Image
                        width={350} height={350} src={feedback?.user?.profileImg || 'https://i.ibb.co/rGZtkFD/950-9501518-our-terms-working-with-you-professional-boy-image.jpg'} alt="profile-picture"
                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <h5 className="text-violet-600 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {feedback?.user?.name}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        <span className='mb-3 block'> {feedback?.comment}</span>
                        <span>{feedback?.suggestions}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;