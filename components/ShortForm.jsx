import { Formik, Form, Field } from 'formik';

import * as Yup from 'yup';
import { isUndefined } from 'lodash';
import {
  arrayOf, shape, func, string,
} from 'prop-types';
import getShortenUrls from '../lib/getShortenUrls';
import Button from './UI/Button';

const validationSchema = Yup.object({
  url: Yup.string().url('Invalid URL').required('Please add a link'),
});

export default function ShortForm({ urls, setUrls }) {
  const handleSubmit = async (values, { resetForm }) => {
    const shortenUrl = await getShortenUrls(values.url);
    if (isUndefined(urls.find((url) => url.original_link === shortenUrl.result.original_link))) {
      setUrls([...urls, shortenUrl.result]);
      resetForm();
    }
  };
  return (
    <div className="w-9/12 h-full rounded-lg bg-dark-violet bg-cover bg-[url('/img/bg-shorten-mobile.svg')] md:bg-[url('/img/bg-shorten-desktop.svg')]">
      <Formik
        initialValues={{
          url: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {
          ({
            isSubmitting, errors,
          }) => (
            <Form className="w-full h-full flex flex-col justify-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="w-11/12 md:w-8/12 flex flex-col">
                  <Field
                    name="url"
                    className={`p-3 lg:text-xl lg:p-5 outline-offset-0 outline-none rounded-lg ${errors.url && 'outline outline-2 focus-visible:outline-[3px] outline-pink-500'}`}
                    type="url"
                    id="shorten-url"
                    placeholder="Shorten a link here..."
                  />
                </div>
                <Button
                  variant="info"
                  disabled={isSubmitting}
                  type="submit"
                  className="w-11/12 md:w-1/6 text-base md:text-lg lg:text-xl font-semibold p-2 md:p-3 lg:p-5 rounded-xl hover:bg-cyan-300 bg-cyan-500 text-white cursor-pointer disabled:bg-transparent disabled:border-white disabled:border-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Shorten it!'}
                </Button>
              </div>
              <p className={`hover md:block md:ml-24 mt-2 text-center md:text-left text- ${errors.url ? 'text-pink-500' : 'text-transparent'} text-sm`}>{errors.url ?? 'No Error'}</p>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}

ShortForm.propTypes = {
  urls: arrayOf(shape({
    code: string.isRequired,
    short_link: string.isRequired,
    full_short_link: string.isRequired,
    short_link2: string.isRequired,
    full_short_link2: string.isRequired,
    short_link3: string.isRequired,
    full_short_link3: string.isRequired,
    share_link: string.isRequired,
    full_share_link: string.isRequired,
  })).isRequired,
  setUrls: func.isRequired,
};
