import {GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence} from "firebase/auth";
import {useRouter} from "next/router";
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../firebase';
import { useDispatch } from "react-redux";
import { signUp } from '../store/reducer/auth';
export default function GoogleBtn() {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user =  userCredential.user;
      dispatch(signUp(JSON.stringify(user)));
      console.log(user);
      return await router.push("/");
    } catch (e) {
      const credential = GoogleAuthProvider.credentialFromError(e);
      console.log(credential);
      console.log(e);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="w-72 sm:w-96 flex items-center my-2 justify-center p-3 border-[1px] border-gray-400 hover:border-black rounded-[32px]"
    >
      <FcGoogle size={32}/>
      <span className="text-base text-gray-600 pl-2 font-semibold">CONTINUE WITH GOOGLE</span>
    </button>
  );
}