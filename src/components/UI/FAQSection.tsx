'use client'

interface FAQSectionProps {
    title: string;
    content: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, content, isOpen, onToggle }) => {

    return (
        <div>
            <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-semibold text-xl  leading-5 text-gray-800">{title}</h3>
                <button
                    aria-label="toggle-section"
                    className="text-gray-800  cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={onToggle}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            id="path"
                            d={`M10 4.1665V15.8332`}
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <p className={`font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12 ${isOpen ? 'block' : 'hidden'}`}>
                {content}
            </p>
        </div>
    );
};

export default FAQSection