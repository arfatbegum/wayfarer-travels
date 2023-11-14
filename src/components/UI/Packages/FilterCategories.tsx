import { useCategoriesQuery } from "@/redux/api/categoryApi";
import Loader from "../Shared/Loader";

interface filteredCategoriesProps {
    selectedCategory: any
    setSelectedCategory: any

}

const FilterCategories: React.FC<filteredCategoriesProps> = ({ selectedCategory, setSelectedCategory }) => {
    const query: Record<string, any> = {};
    const { data: categoryData, isLoading: isCategoryLoading } = useCategoriesQuery({ ...query });
    const categories = categoryData?.categories;
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };
    if (isCategoryLoading) {
        return <Loader />;
    }
    return (
        <div className="p-4 h-min height:min-content mt-4 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
            <h1 className="my-2 font-semibold text-lg">Filter by category</h1>
            <p
                onClick={() => handleCategoryClick('All')}
                className={selectedCategory === 'All' ? "text-[#0f337a] cursor-pointer my-2" : "cursor-pointer my-2"}
            >
                All
            </p>
            {categories && categories.map((category: any) => (
                <p
                    key={category.id}
                    onClick={() => handleCategoryClick(category.name)}
                    className={selectedCategory === category.name ? "text-[#0f337a] cursor-pointer my-2" : "cursor-pointer my-2"}
                >
                    {category.name}
                </p>
            ))}
        </div>
    );
};

export default FilterCategories;