import Image from 'next/image';

import Button from './UI/Button';

export default function Discover() {
  return (
    <div
      className="grid grid-rows-2 text-center md:text-left   sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-12 pl-[10%] items-center">

      <div className="block mr-5 order-2 md:order-1">
        <h2
          className="text-3xl mb-2 sm:mb-0 lg:leading-12 text-center md:text-left sm:text-4xl md:text-6xl  lg:text-7xl text-very-dark-violet font-bold md:leading-[5rem]">More
          than just shorter links</h2>
        <p className="md:text-xl lg:text-2xl text-grayish-violet">Build your brand&apos;s recognition and get
          detailed insights on how your links are performing.</p>
        <Button
          variant="info"
          className="mt-8 text-lg sm:py-3 py-4 px-14 sm:px-10 bg-cyan-500 hover:bg-sky-400 text-white font-bold rounded-[2rem]">
          Get started
        </Button>
      </div>
      <div className="order-1 md:order-2" onDragStart={(e) => e.preventDefault()}>
        <Image
          src="/img/illustration-working.svg"
          width={200}
          height={200}
          alt="working"
          className="w-full"
        />
      </div>
    </div>
  );
}
