import React from 'react';
import Button from './Button';

import links from '../../data/links';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import SignOut from '../SignOut';

function MobileMenu(props) {
  const {
    showMenu,
  } = props;
  const emptyHref = '#';
  const {
    isAuth,
  } = useSelector(state => state.auth);

  return (
    <>
      {
        showMenu && (
          <div
            className="absolute top-12 md:hidden flex w-full items-center  transition-opacity animate-visible-appear justify-center"
          >
            <div
              className="relative flex flex-col w-[80%] justify-center py-5 px-10 rounded-lg z-50 bg-[#3b3054] items-center mt-5"
            >
              <nav>
                <ul>
                  {
                    links.map((link) => (
                      <li key={link.id} className="flex justify-center items-center p-3">
                        <a
                          href={emptyHref}
                          className="text-base text-white font-semibold cursor-pointer hover:text-grayish-violet first-letter:uppercase"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
              <hr className="w-full border-[#9e9aa7]"/>
              <div className="flex flex-col w-full">
                {
                  isAuth ? (
                    <div className="flex flex-col items-center gap-4 py-2">
                      <SignOut/>
                    </div>
                  ) : (
                    <>
                      <Link href="/login">
                        <Button
                          variant="light"
                          className="text-base w-full p-3 my-1 text-white  hover:text-grayish-violet"
                        >
                          Login
                        </Button>
                      </Link>
                      <Link href="/signup">
                        <Button variant="info" className="w-full rounded-full px-6 py-2 my-1">
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default MobileMenu;
