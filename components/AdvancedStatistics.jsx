import React from 'react';
import SpacingSm from './UI/SpacingSm';
import SpacingMd from './UI/SpacingMd';


const AdvancedStatistics = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="w-full flex flex-col items-center text-center gap-4">
        <h3 className="text-dark-violet text-4xl font-bold">Advanced statistics</h3>
        <p className="max-w-lg text-lg text-grayish-violet">Track how your links are performing
          across
          the web with our advanced statistics
          dashboard.</p>
        <SpacingSm />
      </section>
      <SpacingMd />
      <div className="relative w-9/12">
        <div className="w-full flex justify-around">
          <div className="w-1/4 h-28 bg-black"></div>
          <div className="w-1/4 h-24 bg-black"></div>
          <div className="w-1/4 h-24 bg-black"></div>
        </div>

        <div className="w-full h-2 bg-cyan-500"/>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
