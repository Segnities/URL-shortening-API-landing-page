import { useState } from 'react';

import GeneralHeaderWrapper from './UI/GeneralHeaderWrapper';
import ItemsCenterWrapper from './UI/ItemsCenterWrapper';
import Button from './UI/Button';
import MobileHeader from './UI/MobileHeader';
import MobileMenu from './UI/MobileMenu';

import links from '../data/links';
import DesktopMenu from './UI/DesktopMenu';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full">
      <GeneralHeaderWrapper className="hidden md:flex justify-between mt-10 md:px-[10%]">
        <section className="flex justify-between">
          <h2 className="font-bold text-5xl text-dark-violet">Shortly</h2>
          <DesktopMenu />
        </section>
        <ItemsCenterWrapper className="flex items-center">
          <Button
            variant="light"
            className="mr-6 text-base text-grayish-violet hover:text-very-dark-violet"
          >
            Login
          </Button>
          <Button variant="info" className="px-6 py-2 rounded-full text-base">
            Sign Up
          </Button>
        </ItemsCenterWrapper>
      </GeneralHeaderWrapper>
      <MobileHeader
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <MobileMenu
        links={links}
        showMenu={showMenu}
      />
    </header>
  );
}
