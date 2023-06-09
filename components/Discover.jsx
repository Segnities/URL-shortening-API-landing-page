import Image from 'next/image';

import Button from './UI/Button';

export default function Discover() {
  return (
    <div
      className="grid grid-rows-2 text-center md:text-left my-5   sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-12 pl-[10%] items-center"
    >

      <div className="flex flex-col items-center gap-3 md:gap-0 md:block mr-5 order-2 md:order-1"
      >
        <h2
          className="text-3xl mb-2 sm:mb-0 lg:leading-[5rem] md:leading-[4rem] sm:leading-8 text-center md:text-left sm:text-4xl md:text-6xl lg:text-7xl text-very-dark-violet font-bold"
        >
          More than just shorter links
        </h2>
        <p className="md:text-xl lg:text-2xl text-grayish-violet">Build your brand&apos;s
          recognition and get
          detailed insights on how your links are performing.</p>
        <Button
          variant="info"
          className="mt-8 text-lg px-4 py-3 sm:px-6  sm:py-5 md:py-4 md:px-14 sm:px-10 bg-cyan-500 hover:bg-sky-400 text-white font-bold rounded-[2rem]">
          Get started
        </Button>
      </div>
      <div
        className="order-1 md:order-2 flex justify-center w-full md:w-auto"
        onDragStart={(e) => e.preventDefault()}
      >
        <Image
          src="/img/illustration-working.svg"
          width={190}
          height={190}
          alt="working"
          className="w-full"
        />
      </div>
    </div>
  );
}
