import { Form, Formik, Field } from 'formik';
import Head from 'next/head';

import DefaultLayout from '../../components/UI/DefaultLayout';
import { RiErrorWarningFill } from "react-icons/ri"
import SpacingSm from '../../components/UI/SpacingSm';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Email must be valid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password is too short - should be 8 characters minimum';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Both passwords need to be the same';
  } else if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  }

  return errors;
}

export default function Signup() {
  const handleSubmit = () => {

  };
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
    <DefaultLayout>
      <SpacingSm/>
      <div className="flex justify-center items-center w-full mb-10">
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {
          ({errors, touched, values}) => (
              <Form autoComplete="off" className="rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg w-2/5 sm:w-3/5 p-5 bg-gradient-to-r from-cyan-400 to-indigo-600">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-bold my-1">Enter your email address</label>
                  <Field
                    type="text"
                    id="email"
                    autoComplete="off"
                    name="email"
                    placeholder="Enter your email address"
                    className="text-base normal-case my-1 outline-none line tracking-normal p-3 border-[1px] focus-visible:border-[3px]"
                  />
                  {
                    errors.email && touched.email ? (
                      <div className="flex items-center mt-1">
                        <RiErrorWarningFill color="red" size={16} className="mr-1" />
                        <span className="text-sm font-semibold text-red-700">{errors.email}</span>
                      </div>
                    ) : null
                  }
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-sm font-bold my-1">Create a password</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className={`text-base normal-case line my-1 tracking-normal p-3 border-[1px] outline-none focus-visible:border-[3px] ${errors.password && touched.password ? "border-red-700" : "border-gray-800"}`}
                  />
                  {
                    errors.password && touched.password ? (
                      <div className="flex items-center mt-1">
                        <RiErrorWarningFill color="red" size={16} className="mr-1" />
                        <span className="text-sm font-semibold text-red-700">{errors.password}</span>
                      </div>
                    ) : null
                  }
                </div>
                <div className="flex flex-col">
                  <label htmlFor="confirm-password" className="text-sm font-bold my-1">Confirm password</label>
                  <Field
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className={`text-base normal-case line my-1 tracking-normal p-3 border-[1px] outline-none focus-visible:border-[3px] ${errors.confirmPassword && touched.confirmPassword ? "border-red-700" : "border-gray-800"}`}
                  />
                  {
                    errors.confirmPassword && touched.confirmPassword ? (
                      <div className="flex items-center mt-1">
                        <RiErrorWarningFill color="red" size={16} className="mr-1" />
                        <span className="text-sm font-semibold text-red-700">{errors.confirmPassword}</span>
                      </div>) : null
                  }
                </div>
                <div className="flex justify-center items-center my-8">
                  <button type="submit" className="bg-[#1ED760] w-2/6 text-2xl p-3 rounded-[32px] text-black font-medium hover:scale-x-110 hover:scale-y-105 hover:transition-transform">Sign Up</button>
                </div>
              </Form>
          )
        }
      </Formik>
      </div>
    </DefaultLayout>
    </>
  );
}