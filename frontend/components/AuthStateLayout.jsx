import { useEffect } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setUserProvider } from '../store/reducer/userProvider';
import {auth} from "../firebase";
import { signUp } from '../store/reducer/auth';
export default function AuthStateLayout({children}) {
  const dispatch = useDispatch();


    useEffect(()=> {
      onAuthStateChanged(auth, (user)=> {
        if (user) {
          const currentUser = auth.currentUser;
          if (currentUser) {
            const userProvider = axios.post("http://localhost:7886/api/user/auth", {
              email: user.email,
              providerId: user.providerId,
              providerName: user.providerData[0].providerId
            }).then(res => {
              console.log(res);
              dispatch(setUserProvider(res.data));
              dispatch(signUp(JSON.stringify(currentUser)));
            });
            console.log(currentUser);
            console.log(currentUser.email);
            console.log(currentUser.providerId);
            console.log(currentUser.providerData[0].providerId);
          }
        } else {
          console.log('User logout :(');
        }
      });
    }, []);
   return (
     <>
       {children}
     </>
   )
}