'use client'
import { MdOutlineAttachEmail } from 'react-icons/md';
import { LuPhoneOutgoing } from 'react-icons/lu';
import { FaRegAddressCard } from 'react-icons/fa';

const Info = () => {
    return (
        <div className="lg:col-span-2 col-span-1">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex border-2 rounded-lg bg-white border-gray-200 border-opacity-60 p-8 flex-row">
                        <div className="w-16 h-16 mr-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#0f337a] flex-shrink-0">
                            <LuPhoneOutgoing className='text-2xl' />
                        </div>
                        <div>
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Phone</h2>
                            <p className="leading-relaxed text-base">+966533431648</p>
                        </div>
                    </div>
                    <div className="flex border-2 rounded-lg bg-white border-gray-200 border-opacity-60 p-8 flex-row">
                        <div className="w-16 h-16 mr-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#0f337a] flex-shrink-0">
                            <MdOutlineAttachEmail className='text-2xl' />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Email</h2>
                            <p className="leading-relaxed text-base">arfatakter39@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex border-2 rounded-lg bg-white border-gray-200 border-opacity-60 p-8 flex-row">
                        <div className="w-16 h-16 mr-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#0f337a] flex-shrink-0">
                            <FaRegAddressCard className='text-2xl' />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Address</h2>
                            <p className="leading-relaxed text-base">Jeddah, Saudi Arabia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;