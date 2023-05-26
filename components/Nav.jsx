import { useState } from 'react';

import GeneralHeaderWrapper from './UI/GeneralHeaderWrapper';
import ItemsCenterWrapper from './UI/ItemsCenterWrapper';
import Button from './UI/Button';
import MobileHeader from './UI/MobileHeader';
import MobileMenu from './UI/MobileMenu';

import links from '../data/links';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full">
      <GeneralHeaderWrapper className="hidden md:flex justify-between mt-10 md:px-[10%]">
        <section className="flex justify-between">
          <h2 className="font-bold text-5xl text-dark-violet">Shortly</h2>
          <ul className="flex justify-between px-8 items-center">
            {
              links.map((link) => (
                <li
                  className="text-base first-letter:uppercase font-semibold  cursor-pointer mx-3 hover:text-very-dark-violet "
                  key={link.id}
                >
                  <a
                    href="#"
                    className="text-base text-grayish-violet font-semibold cursor-pointer hover:text-dark-violet first-letter:uppercase">
                    {link.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </section>
        <ItemsCenterWrapper className="flex items-center">
          <Button variant="light" className="mr-6 text-base">
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
