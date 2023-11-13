import React from 'react';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

interface FilterByPriceProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const marks: SliderMarks = {
  0: '0$',
  5000: {
    style: {
      color: '#0f337a',
    },
    label: <strong>5000$</strong>,
  },
};

const FilterByPrice: React.FC<FilterByPriceProps> = ({ priceRange, setPriceRange }) => {
  const handleSliderChange = (values: any) => {
    setPriceRange(values);
  };

  return (
    <div className="p-4 h-min height:min-content mt-4 border-gray-200 border-opacity-60 rounded-lg bg-white bg-clip-border text-gray-700 shadow-sm">
      <h1 className="my-2 font-semibold text-lg">Filter by Price</h1>
      <Slider range min={0} max={5000} marks={marks} defaultValue={priceRange} onChange={handleSliderChange} />
    </div>
  );
};

export default FilterByPrice;
