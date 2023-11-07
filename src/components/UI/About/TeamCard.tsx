import Link from "next/link";
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import Image from "next/image";

interface TeamProps {
    team: any
}

const TeamCard: React.FC<TeamProps> = ({ team }) => {
    return (
        <div className="w-full relative mt-16">
            <div className="overflow-hidden shadow-sm bg-white border-2 border-gray-200 border-opacity-60 rounded-lg">
                <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                        <Image width={200} height={200} src={team?.profileImg} alt="" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                </div>
                <div className="px-6 mt-16 ">
                    <div className="font-bold text-2xl text-center pb-1">{team?.name}</div>
                    <p className="text-gray-800 text-sm text-center">{team?.designation}</p>
                    <div className="w-full flex justify-center items-center pb-8 pt-3 gap-3">
                        <Link href={team?.linkedinUrl} className="text-xl text-[#0f337a]"><FiLinkedin /></Link>
                        <Link href={`mailto:${team?.email}`} className="text-2xl text-[#0f337a]"><MdOutlineEmail /></Link>
                        <Link href={`tel:${team?.contactNo}`} className="text-2xl text-[#0f337a]"><AiOutlinePhone /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;