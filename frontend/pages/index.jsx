import Head from 'next/head';

import { Poppins } from 'next/font/google';

import Discover from '../components/Discover';
import ShortForm from '../components/ShortForm';
import UrlList from '../components/UrlList';
import LightSlateWrapper from '../components/UI/LightSlateWrapper';
import SpacingSm from '../components/UI/SpacingSm';
import SpacingMd from '../components/UI/SpacingMd';
import FormWrapper from '../components/UI/FormWrapper';
import AdvancedStatistics from '../components/AdvancedStatistics';
import BoostLinks from '../components/BoostLinks';
import DefaultLayout from '../components/UI/DefaultLayout';
import { useSelector } from 'react-redux';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function Home() {
  const { isAuth } = useSelector(state => state.auth);
  return (
    <div className={`w-full ${poppins.className}`}>
      <Head>
        <title>URL shortening</title>
      </Head>
      <DefaultLayout>
        <SpacingSm />
        <Discover />
        <SpacingMd />
        <LightSlateWrapper className="w-full bg-slate-200">
          {
            isAuth ? (
              <>
                <FormWrapper
                  className="relative bottom-24 w-full h-44 flex flex-1 justify-center items-center">
                  <ShortForm />
                </FormWrapper>
                <UrlList />
              </>
            ) : null
          }
          <SpacingSm />
          <AdvancedStatistics />
          <SpacingMd />
          <BoostLinks />
        </LightSlateWrapper>
      </DefaultLayout>
    </div>
  );
}
