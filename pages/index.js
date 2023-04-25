import Head from "next/head";
import Image from "next/image";

import DesktopImage from "/public/img/bg-boost-desktop.svg";

import { Poppins } from "next/font/google";

import Nav from "../components/Nav";
import DiscoverSection from "../components/DiscoverSection";
import Space from "../components/UI/Space";


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
            <Space spacing  ="8" />
            <DiscoverSection />
            <div className="w-full h-96 bg-cover" >

            </div>
        </div>
    );
}