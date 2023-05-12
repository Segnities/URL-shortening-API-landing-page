import { useState } from 'react';

import Head from 'next/head';

import { Poppins } from 'next/font/google';

import Nav from '../components/Nav';
import Discover from '../components/Discover';
import ShortForm from '../components/ShortForm';
import UrlList from '../components/UrlList';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function Home() {
  const [urls, setUrls] = useState([]);
  return (
    <div className={`w-full ${poppins.className}`}>
      <Head>
        <title>URL shortening</title>
      </Head>
      <Nav />
      <div className="h-24" />
      <Discover />
      <div className="h-48 md:h-32" />
      <div className="w-full bg-slate-200">
        <div className="relative bottom-24 w-full h-44 flex flex-1 justify-center items-center">
          <ShortForm urls={urls} setUrls={setUrls} />
        </div>
        <UrlList urls={urls} />
      </div>
    </div>
  );
}
