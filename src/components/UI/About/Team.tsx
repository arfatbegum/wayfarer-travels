import TeamCard from "./TeamCard";
interface TeamProps {
    teams: any
}

const Team: React.FC<TeamProps> = ({teams}) => {
    return (
        <div className="p-10">
            <div className="container flex justify-center mx-auto">
                <div className="text-center">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">Meet Our Dedicated Team</h1>
                    <p className="pb-10 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Our team is the driving force behind the seamless travel experiences we offer. Comprising travel enthusiasts, experts, and adventurers, our team shares a common passion for exploration and making your travel dreams a reality. Meet the faces behind your next unforgettable journey!</p>
                </div>
            </div>
            <div className="w-full">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4" dir="rtl">
                    {teams && teams?.slice(-4).map((team: any) => (
                        <TeamCard key={team.id} team={team} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;