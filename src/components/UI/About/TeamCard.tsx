import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';

const TeamCard = () => {
    return (
        <div className="w-full relative mt-16">
            <div className="overflow-hidden shadow-sm bg-white border-2 border-gray-200 border-opacity-60 rounded-lg">
                <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                        <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                </div>
                <div className="px-6 mt-16 ">
                    <div className="font-bold text-3xl text-center pb-1">Andres Berlin</div>
                    <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                    <div className="w-full flex justify-center py-5 gap-3">
                        <Link href={""} className="text-2xl text-[#0f337a]"><FiFacebook /></Link>
                        <Link href={""} className="text-2xl text-[#0f337a]"><FaWhatsapp /></Link>
                        <Link href={""} className="text-2xl text-[#0f337a]"><AiOutlineInstagram /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;