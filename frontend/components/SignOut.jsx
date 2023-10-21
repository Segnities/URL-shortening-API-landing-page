import { signOut as signOutAction } from '../store/reducer/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import { useRouter } from 'next/router';

export default function SignOut() {
  const {
    user
  } = useSelector(state => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    dispatch(signOutAction());
    await signOut(auth);
    return await router.push("/login");
  };
  return (
    <>
      <p className="text-base md:text-xs text-grayish-violet">{user.email}</p>
      <Button
        variant="info"
        className="px-6 py-2 rounded-full text-base"
        onClick={handleSignOut}
      >
        Sign out
      </Button>
    </>
  );
}