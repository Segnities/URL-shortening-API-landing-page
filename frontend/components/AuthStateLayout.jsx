import { useEffect } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase";
export default function AuthStateLayout({children}) {
    useEffect(()=> {
      onAuthStateChanged(auth, (user)=> {
        if (user) {
          const currentUser = auth.currentUser;
          if (currentUser) {
            console.log(currentUser);
            console.log(currentUser.email);
            console.log(currentUser.providerId);
            console.log(currentUser.providerData[0].providerId);
          }
        } else {
          console.log('User logout');
        }
      });
    }, []);
   return (
     <>
       {children}
     </>
   )
}