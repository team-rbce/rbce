import React from 'react';
import DataCard from './DataCard';

export default function DataSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-Inter">
      <DataCard title="1.000" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repudiandae!" />
      <DataCard title="1.000" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repudiandae!" />
      <DataCard title="1.000" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repudiandae!" />
      <DataCard title="1.000" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repudiandae!" />
    </div>
  );
}
