import Image from "next/image";

export default function DiscoverSection() {
    return (
        <div className="grid sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-12 pl-[10%] items-center">
        
            <div className="block mr-5 order-2 md:order-1">
                <h2 className="text-[2.3rem] leading-10 text-center md:text-left  md:text-[4.5rem] text-very-dark-violet font-bold md:leading-[5rem]">More than just shorter links</h2>
                <p className="text-xl text-grayish-violet">Build your brand&apos;s recongnition and get detailed insights on how your links are performing.</p>
                <button className="mt-8 py-3 px-10 bg-cyan-500 hover:bg-sky-400 text-white font-bold rounded-3xl">Get started</button>
            </div>
            <div className="order-1 md:order-2" onDragStart={(e) => e.preventDefault()}>
                <Image src="/img/illustration-working.svg" width={200} height={200} alt="working" className="w-full" />
            </div>
        </div>
    );
}