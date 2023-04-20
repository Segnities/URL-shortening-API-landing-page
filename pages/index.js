import Head from "next/head";
import Image from "next/image";

import { Poppins } from "next/font/google";

import Nav from "../components/Nav";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});



export default function Home() {
    return (
        <div className={`w-full ${poppins.className}`}>
            <Head>
                <title>URL shortening</title>
            </Head>
            <Nav />
            <div className="my-8" />
            <div className="grid sm:grid-rows-2 md:grid-cols-2 gap-12 pl-[10%] items-center">
                <div className="block mr-5 order-2 md:order-1">
                    <h2 className="text-[2.3rem] leading-10 text-center md:text-left  md:text-[4.5rem] text-very-dark-violet font-bold md:leading-[5rem]">More than just shorter links</h2>
                    <p className="text-xl text-grayish-violet">Build your brand&apos;s recongnition and get detailed insights on how your links are performing.</p>
                    <button>Get started</button>
                </div>
                <div className="order-1 md:order-2" onDragStart={(e) => e.preventDefault()}>
                    <Image src="/img/illustration-working.svg" width={200} height={200} alt="working" className="w-full" />
                </div>
            </div>
        </div>
    );
}