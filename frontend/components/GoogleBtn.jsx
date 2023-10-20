import { FcGoogle } from 'react-icons/fc';

export default function GoogleBtn() {
  const handleClick = () => {

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