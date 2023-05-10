import Image from "next/image";

export default function Discover() {
    return (
        <div className="grid grid-rows-2 text-center md:text-left   sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-12 pl-[10%] items-center">

            <div className="block mr-5 order-2 md:order-1">
                <h2 className="text-[2.3rem] mb-2 sm:mb-0 leading-10 text-center md:text-left  md:text-[4.5rem] text-very-dark-violet font-bold md:leading-[5rem]">More than just shorter links</h2>
                <p className="text-xl text-grayish-violet">Build your brand&apos;s recongnition and get detailed insights on how your links are performing.</p>
                <button className="mt-8 text-lg sm:py-3 py-4 px-14 sm:px-10 bg-cyan-500 hover:bg-sky-400 text-white font-bold rounded-[2rem]">Get started</button>
            </div>
            <div className="order-1 md:order-2" onDragStart={(e) => e.preventDefault()}>
                <Image src="/img/illustration-working.svg" width={200} height={200} alt="working" className="w-full" />
            </div>
        </div>
    );
}