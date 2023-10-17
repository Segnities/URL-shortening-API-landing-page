import React from 'react';

const GeneralHeaderWrapper = ({ children }) => {
  return (
    <div className="hidden md:flex justify-between mt-10 md:px-[10%]">
      {children}
    </div>
  );
};
export default GeneralHeaderWrapper;
