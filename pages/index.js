import Head from "next/head";

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
        </div>
    );
}