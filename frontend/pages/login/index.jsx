import { useState } from 'react';
import Link from 'next/link';

import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

import DefaultLayout from '../../components/UI/DefaultLayout';
import SpacingSm from '../../components/UI/SpacingSm';
import LightSlateWrapper from '../../components/UI/LightSlateWrapper';

const validationSchema = Yup.object()
  .shape({
    email: Yup.string()
      .email('Not valid email!')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Min 8 symbols in password required!')
      .required('Password is required'),
    rememberMe: Yup.boolean()
  });
export default function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  return (
    <DefaultLayout>
      <SpacingSm/>
      <div className="flex justify-center items-center w-full mb-10">
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {
          ({errors}) => (
            <Form autoComplete="off" className="text-white rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg w-2/5 sm:w-3/5 p-5 bg-gradient-to-r from-cyan-400  to-indigo-600">
              {((errors.email || errors.password) && isSubmitted) && (
                <div className="flex w-full justify-center my-5">
                  <h3 className="text-lg transition-opacity duration-100 ease-in text-red-600 font-semibold">Wrong email or password</h3>
                </div>
              )}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-bold my-1">Email address</label>
                <Field
                  type="text"
                  id="email"
                  autoComplete="off"
                  name="email"
                  placeholder="Enter your email address"
                  className="bg-transparent text-base normal-case my-1 line tracking-normal p-3 border-[1px]  focus-visible:border-[3px] border-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-bold my-1">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="text-base normal-case line my-1 tracking-normal p-3 border-[1px] focus-visible:border-[3px] border-gray-800"
                />
              </div>
              <p className="mt-2">
                <Link href='/forgot-password' className="underline text-base font-semibold hover:text-[#1ED760]"> Forgot your password?</Link>
              </p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex flex-row-reverse items-center">
                  <label htmlFor="remember-me" className="font-medium text-base ml-4">Remember me</label>
                  <Field type="checkbox" name="rememberMe" className="w-4 h-4" id="remember-me" />
                </div>
                <div>
                  <button type="submit" className="bg-[#1ED760] w-32 text-sm p-4 rounded-3xl text-black font-medium">LOG IN</button>
                </div>
              </div>
            </Form>
          )
        }
      </Formik>
      </div>
    </DefaultLayout>
  );
}