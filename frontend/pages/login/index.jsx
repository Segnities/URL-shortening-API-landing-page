import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth';

import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { auth } from '../../firebase';

import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

import DefaultLayout from '../../components/UI/DefaultLayout';
import SpacingSm from '../../components/UI/SpacingSm';
import AuthMethodsLayout from '../../components/AuthMethodsLayout';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/reducer/auth';
import axios from 'axios';
import { setUserProvider } from '../../store/reducer/userProvider';

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
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      const email = values.email;
      const password = values.password;
      const rememberMe = values.rememberMe;

      if (rememberMe) {
        await setPersistence(auth, browserLocalPersistence);
      } else {
        await setPersistence(auth, browserSessionPersistence);
      }
      setIsSubmitted(true);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(signUp(JSON.stringify(user)));

      const userProvider = await axios.post("http://localhost:7886/api/user/auth", {
        email: user.email,
        providerId: user.providerId,
        providerName: user.providerData[0].providerId
      });
      dispatch(setUserProvider(userProvider.user));

      return await router.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <DefaultLayout>
        <SpacingSm/>
        <p className="font-bold text-xl text-center">To get started, login into account.</p>
        <AuthMethodsLayout>
          <div className="flex justify-center items-center w-full mb-10">
            <Formik
              initialValues={{
                email: '',
                password: '',
                rememberMe: false
              }}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={validationSchema}
            >
              {
                ({ errors }) => (
                  <Form autoComplete="off"
                        className="rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg w-11/12 sm:w-3/5 p-5 bg-gradient-to-r from-cyan-400  to-indigo-600">
                    {((errors.email || errors.password) && isSubmitted) && (
                      <div className="flex w-full justify-center my-5">
                        <h3
                          className="text-lg transition-opacity duration-100 ease-in text-red-600 font-semibold">Wrong
                          email or password</h3>
                      </div>
                    )}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm text-white  font-bold my-1">Email
                        address</label>
                      <Field
                        type="text"
                        id="email"
                        autoComplete="off"
                        name="email"
                        placeholder="Enter your email address"
                        className="text-base normal-case my-1 line tracking-normal p-3 border-[1px]  focus-visible:border-[3px] border-gray-800"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="password"
                        className="text-sm font-bold my-1 text-white">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="text-base normal-case line my-1 tracking-normal p-3 border-[1px] focus-visible:border-[3px] border-gray-800"
                      />
                    </div>
                    <p className="mt-2">
                      <Link href="/forgot-password"
                            className="underline text-base font-semibold hover:text-[#1ED760]"> Forgot
                        your password?</Link>
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex flex-row-reverse items-center">
                        <label htmlFor="remember-me" className="font-medium text-base ml-4">Remember
                          me</label>
                        <Field type="checkbox" name="rememberMe" className="w-4 h-4"
                               id="remember-me"/>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="bg-[#1ED760] w-32 text-sm p-4 rounded-3xl text-black font-medium"
                        >
                          LOGIN
                        </button>
                      </div>
                    </div>
                  </Form>
                )
              }
            </Formik>
          </div>
        </AuthMethodsLayout>
      </DefaultLayout>
    </>
  );
}