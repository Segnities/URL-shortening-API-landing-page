import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

function MobileHeader(props) {
  const { showMenu, setShowMenu } = props;
  return (
    <div className="flex md:hidden justify-between px-10 max-h-28 mt-5 items-center">
      <h2 className="font-bold text-2xl text-dark-violet ">Shortly</h2>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="cursor-pointer"
      >
        <RxHamburgerMenu
          size={28}
          color="hsl(257, 7%, 63%)"
          className="cursor-pointer z-10"
        />
      </div>
    </div>
  );
}

export default MobileHeader;
