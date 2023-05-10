import { Formik, Form, Field } from 'formik';

import * as Yup from 'yup';

const validationSchema = Yup.object({
  url: Yup.string().url('Invalid URL').required('Please add a link'),
});

export default function ShortForm() {
  return (
    <div className="w-10/12 h-full rounded-lg bg-dark-violet bg-cover bg-[url('/img/bg-shorten-mobile.svg')] md:bg-[url('/img/bg-shorten-desktop.svg')]">
      <Formik
        initialValues={{
          url: '',
        }}
        validationSchema={validationSchema}
        handleSubmit={() => {
          console.log('Submitted!');
        }}
      >
        {
                    ({ values, isSubmitting, errors }) => (
                      <Form className="w-full h-full flex flex-col justify-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                          <div className="w-11/12 md:w-8/12 flex flex-col">
                            <Field
                              name="url"
                              className={`p-2 md:p-3 outline-offset-0 outline-none rounded-md ${errors.url && 'outline outline-2 focus-visible:outline-[3px] outline-pink-500'}`}
                              type="url"
                              id="shorten-url"
                              placeholder="Shorten a link here..."
                            />
                            <label htmlFor="shorten-url" className="text-pink-500 text-xs md:hidden">{errors.url}</label>
                          </div>
                          <button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-11/12 md:w-1/6 font-semibold p-2 md:p-3 rounded-lg hover:bg-cyan-300 bg-cyan-500 text-white cursor-pointer disabled:bg-transparent disabled:border-white disabled:border-2"
                          >
                            {isSubmitting ? 'Submitting...' : 'Shorten it!'}
                          </button>
                        </div>
                        <p className={`hover md:block ml-[88px] ${errors.url ? 'text-pink-500' : 'text-transparent'} text-sm`}>{errors.url ?? 'No Error'}</p>
                      </Form>
                    )
                }
      </Formik>

    </div>
  );
}
