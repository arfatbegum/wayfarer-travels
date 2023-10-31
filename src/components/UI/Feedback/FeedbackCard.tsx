/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image';

interface FeedbackProps {
    feedback: any
}

const FeedbackCard: React.FC<FeedbackProps> = ({ feedback }) => {
    return (
        <div className="p-2 md:w-1/2 lg:w-1/4  flex flex-col">
            <div className="relative p-6 flex w-full max-w-[26rem] flex-col border-2 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
                <div className="flex justify-center -mt-14">
                    <Image
                        width={350} height={350} src={feedback?.user?.profileImg || 'https://i.ibb.co/rGZtkFD/950-9501518-our-terms-working-with-you-professional-boy-image.jpg'} alt="profile-picture"
                        className="relative inline-block h-[58px] w-[58px] border-2 border-[#0f337a] !rounded-full object-cover object-center"
                    />
                </div>
                <div>
                    <p className="block font-sans text-base italic font-normal mt-3 leading-relaxed text-inherit antialiased">
                        <span  className='mb-3 block italic'>"{feedback?.comment}"</span>
                        <span>"{feedback?.suggestions}"</span>
                    </p>
                </div>
                <div className="flex justify-end mt-4">
                    <h1 className="text-xl font-medium text-[#0f337a]">- {feedback?.user?.name}</h1>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;