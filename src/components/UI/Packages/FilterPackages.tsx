import PackageCard from '../Home/PackageCard';

interface filteredPackagesProps {
    filteredPackages: any
}

const FilterPackages: React.FC<filteredPackagesProps> = ({ filteredPackages }) => {
    return (
        <div>
            {filteredPackages && filteredPackages?.length > 0 ? (
                <div className="grid grid-cols-3 gap-3">
                    {filteredPackages?.map((tourPackage: any) => (
                        <PackageCard key={tourPackage.id} tourPackage={tourPackage} />
                    ))}
                </div>
            ) : (
                <p className='mx-auto lg:mt-16 text-center'>No Packages available on this page.</p>
            )}
        </div>
    );
};

export default FilterPackages;