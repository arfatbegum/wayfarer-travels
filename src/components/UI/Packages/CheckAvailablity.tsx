import { DatePicker } from "antd";
import dayjs from "dayjs";

interface CheckAvailablityProps {
    packages: any
    setFilteredPackages: any
    selectedValidFrom: string
    selectedValidTill: string
    setSelectedValidFrom: any
    setSelectedValidTill: any

}

const CheckAvailablity: React.FC<CheckAvailablityProps> = ({ packages, setFilteredPackages, selectedValidFrom, setSelectedValidTill, selectedValidTill, setSelectedValidFrom }) => {
    const handleFilterClick = () => {
        // Convert selected date strings to dayjs objects
        const startDate = selectedValidFrom ? dayjs(selectedValidFrom) : null;
        const endDate = selectedValidTill ? dayjs(selectedValidTill) : null;

        // Implement the logic to filter data based on selectedValidFrom and selectedValidTill
        const availablePackages = packages?.filter((tourPackage: any) => {
            const tourPackageValidFrom = dayjs(tourPackage.validFrom);
            const tourPackageValidTill = dayjs(tourPackage.validTill);

            const isWithinDateRange =
                (!startDate || tourPackageValidTill.isAfter(startDate, 'day') || tourPackageValidFrom.isSame(startDate, 'day') || tourPackageValidFrom.isAfter(startDate, 'day')) &&
                (!endDate || tourPackageValidFrom.isBefore(endDate, 'day') || tourPackageValidTill.isSame(endDate, 'day') || tourPackageValidTill.isBefore(endDate, 'day'));

            return isWithinDateRange;
        });

        setFilteredPackages(availablePackages);
    };

    return (
        <div className="p-4 h-min height:min-content border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
            <h1 className="my-2 font-semibold text-lg">Check Availability</h1>
            <div className="my-3">
                <label className="block text-sm font-medium text-gray-700">Valid From</label>
                <DatePicker
                    onChange={(date, dateString) => setSelectedValidFrom(dateString)}
                    value={selectedValidFrom ? dayjs(selectedValidFrom) : null}
                    className="w-full mt-2"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Valid Till</label>
                <DatePicker
                    onChange={(date, dateString) => setSelectedValidTill(dateString)}
                    value={selectedValidTill ? dayjs(selectedValidTill) : null}
                    className="w-full mt-2"
                />
            </div>
            <button onClick={handleFilterClick} className="w-full bg-[#0f337a] text-white text-center rounded mt-5 p-1">Check Availability</button>
        </div>
    );
};

export default CheckAvailablity;