import GoogleBtn from './GoogleBtn';

export default function AuthMethodsLayout({ children }) {
  return (
    <div className="w-full md:w-auto flex flex-col flex-1 mt-2">
      <div className="flex flex-col  justify-center items-center">
        <GoogleBtn />
      </div>
      <div className="flex flex-row mt-5">
        <hr role="presentation" className="flex-1 border-[1px] border-solid border-gray-300"/>
        <span className="flex-1 self-center text-center font-bold text-xs uppercase">OR</span>
        <hr role="presentation" className="flex-1 border-[1px] border-solid border-gray-300"/>
      </div>
      <div className="mt-2 mb-1">
        <h2 className="text-xl font-bold text-center">Continue via email</h2>
      </div>
      <div className="w-full flex flex-col flex-auto mt-4 px-4 sm:px-0">
        {children}
      </div>
    </div>
  );
}