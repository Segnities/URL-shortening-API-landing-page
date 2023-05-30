import React from 'react';
import Image from 'next/image';

import SpacingSm from './UI/SpacingSm';
import advancedStatistics from '../data/advancedStatistics';
import useResizeObserver from '../hooks/useResizeObserver';

const AdvancedStatistics = () => {
  const { clientWidth } = useResizeObserver('__next');

  return (
    <div className="w-full flex flex-col items-center">
      <section className="w-full flex flex-col items-center text-center gap-4">
        <h3 className="text-dark-violet text-2xl sm:text-3xl lg:text-4xl  font-bold">Advanced
          statistics</h3>
        <p className="max-w-lg text-base md:text-lg text-grayish-violet">Track how your links are
          performing
          across
          the web with our advanced statistics
          dashboard.
        </p>
        <SpacingSm/>
      </section>
      <SpacingSm/>
      <div className="relative w-11/12 lg:w-3/4 h-auto lg:h-72 flex flex-col items-center">
        <div className="relative w-full grid lg:grid-flow-col gap-12 lg:gap-8 z-50 grid-auto-flow-row ">
          {
            advancedStatistics.map((statistic, idx) => (
              <div
                key={statistic.id}
                className="w-full h-auto lg:h-72 bg-white p-5 lg:p-8 my-5 rounded-md relative"
                style={{
                  bottom: clientWidth >= 1024 ? `${(advancedStatistics.length * 15) - (idx * 28)}px` : '0px',
                }}
              >
                <div
                  className="w-full relative flex lg:justify-start justify-center bottom-14 md:bottom-16">
                  <div
                    className="w-24 h-24 relative rounded-full bg-violet-950 flex items-center justify-center"
                  >
                    <Image
                      src={statistic.img}
                      alt={statistic.title}
                      width={42}
                      height={42}
                    />
                  </div>
                </div>
                <section
                  className="grid grid-flow-row text-center lg:text-left gap-5 bottom-3 lg:bottom-10 relative"
                >
                  <h4 className="text-lg lg:text-xl font-bold text-black">{statistic.title}</h4>
                  <p className="text-sm lg:text-base text-violet-400 leading-6">{statistic.body}</p>
                </section>
              </div>
            ))
          }
        </div>
        <div className="w-[32rem] sm:w-[27rem] md:w-full h-2 bg-cyan-500 absolute top-1/2 lg:top-1/3  lg:rotate-0 rotate-90" />
      </div>
    </div>
  );
};

export default AdvancedStatistics;
