import { useState } from 'react';

import Head from 'next/head';

import { Poppins } from 'next/font/google';

import Nav from '../components/Nav';
import Discover from '../components/Discover';
import ShortForm from '../components/ShortForm';
import UrlList from '../components/UrlList';
import LightSlateWrapper from '../components/UI/LightSlateWrapper';
import SpacingSm from '../components/UI/SpacingSm';
import SpacingMd from '../components/UI/SpacingMd';
import FormWrapper from '../components/UI/FormWrapper';

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
      <SpacingSm />
      <Discover />
      <SpacingMd />
      <LightSlateWrapper className="w-full bg-slate-200">
        <FormWrapper
          className="relative bottom-24 w-full h-44 flex flex-1 justify-center items-center">
          <ShortForm urls={urls} setUrls={setUrls} />
        </FormWrapper>
        <UrlList urls={urls} />
        <SpacingSm />
        <section className="w-full flex flex-col items-center text-center gap-4">
          <h3 className="text-dark-violet text-4xl font-bold">Advanced statistics</h3>
          <p className="max-w-lg text-lg text-grayish-violet">Track how your links are performing across the web with our advanced statistics
            dashboard.</p>
          <SpacingSm />
        </section>
        <SpacingMd />
        <div className="relative w-full">
          <div className="w-full h-2 bg-cyan-500" />
        </div>
      </LightSlateWrapper>
    </div>
  );
}
