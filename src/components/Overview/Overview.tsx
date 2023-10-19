import React from 'react';

const Overview = () => {
    return (
        <div className="text-gray-600 body-font px-12">
            <div className="text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Overview Of Wayfarer Travels</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Let See the Overview or Survey Of Wayfarer Travels</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-violet-600 inline-flex"></div>
                </div>
            </div>
            <div className="container py-12 mx-auto">
                <div className="grid grid-cols-5 gap-3 text-center lg:px-12 px-4 md:space-y-0 space-y-6">
                    <div className="p-4 py-9 rounded-xl bg-white bg-clip-border shadow-md flex flex-col">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                        <p className="leading-relaxed">Travellers</p>
                    </div>
                    <div className="p-4 py-9 rounded-xl bg-white bg-clip-border shadow-md flex flex-col">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                        <p className="leading-relaxed">Tours</p>
                    </div> 
                    <div className="p-4 py-9 rounded-xl bg-white bg-clip-border shadow-md flex flex-col">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                        <p className="leading-relaxed">Tours</p>
                    </div>
                    <div className="p-4 py-9 rounded-xl bg-white bg-clip-border shadow-md flex flex-col">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
                        <p className="leading-relaxed">Honeymoon</p>
                    </div>
                    <div className="p-4 py-9 rounded-xl bg-white bg-clip-border shadow-md flex flex-col">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">10</h2>
                        <p className="leading-relaxed">Categories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;