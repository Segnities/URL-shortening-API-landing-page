import { Field, Form, Formik } from 'formik';

import * as Yup from 'yup';
import { arrayOf, func, shape, string, } from 'prop-types';
import getShortenUrls from '../lib/getShortenUrls';
import Button from './UI/Button';
import ShortenBg from './UI/ShortenBg';

const validationSchema = Yup.object({
  url: Yup.string().url('Invalid URL').required('Please add a link'),
});

export default function ShortForm({ setUrls }) {
  const handleSubmit = async (values, { resetForm}) => {
    const shortenUrl = await getShortenUrls(values.url);

    if (shortenUrl) {
      setUrls(prev => [...prev, shortenUrl]);
      resetForm();
    }
  };
  return (
    <ShortenBg className="w-11/12 md:w-9/12 h-full rounded-lg">
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
              <div className="relative top-3 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="w-11/12 md:w-8/12 flex flex-col">
                  <Field
                    name="url"
                    className={`p-3 lg:text-xl lg:p-4 outline-offset-0 outline-none rounded-lg ${errors.url && 'outline outline-2 focus-visible:outline-[3px] outline-pink-500'}`}
                    type="url"
                    id="shorten-url"
                    placeholder="Shorten a link here..."
                  />
                </div>
                <Button
                  variant="info"
                  disabled={isSubmitting}
                  type="submit"
                  className="w-11/12 md:w-1/6 text-base md:text-lg lg:text-xl font-semibold p-2  lg:p-4 rounded-xl hover:bg-cyan-300 bg-cyan-500 text-white cursor-pointer disabled:bg-transparent disabled:border-white disabled:border-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Shorten it!'}
                </Button>
              </div>
              <p className={`relative right-8 lg:right-0 top-2 italic hover md:block md:ml-24 mt-2 text-center md:text-left ${errors.url ? 'text-pink-500' : 'text-transparent'} text-sm`}>{errors.url ?? 'No Error'}</p>
            </Form>
          )
        }
      </Formik>
    </ShortenBg>
  );
}

ShortForm.propTypes = {
  setUrls: func.isRequired,
};
