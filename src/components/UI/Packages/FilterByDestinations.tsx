interface FilterByDestinationsProps {
    packages: any
    selectedDestinations: string
    setSelectedDestinations: any

}

const FilterByDestinations: React.FC<FilterByDestinationsProps> = ({ packages, selectedDestinations, setSelectedDestinations }) => {
    const handleDestinationClick = (country: string) => {
        setSelectedDestinations(country);
        console.log(country)
    };
    return (
        <div className="p-4 h-min height:min-content mt-4 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
            <h1 className="my-2 font-semibold text-lg">Filter by Destionations</h1>
            <p
                onClick={() => handleDestinationClick('All')}
                className={selectedDestinations === 'All' ? "text-[#0f337a] cursor-pointer my-2" : "cursor-pointer my-2"}
            >
                All
            </p>
            {packages && packages?.map((tourPackage: any) => (
                <p
                    key={tourPackage.id}
                    onClick={() => handleDestinationClick(tourPackage?.country)}
                    className={selectedDestinations === tourPackage?.country ? "text-[#0f337a] cursor-pointer my-2" : "cursor-pointer my-2"}
                >
                    {tourPackage.country}
                </p>
            ))}
        </div>
    );
};

export default FilterByDestinations;