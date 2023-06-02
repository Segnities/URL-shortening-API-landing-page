import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import links from '../../data/links';

const MobileMenu = (props) => {
  const {
    showMenu,
  } = props;
  return (
    <React.Fragment>
      {
        showMenu && (
          <div
            className="absolute top-12 md:hidden flex w-full items-center  transition-opacity animate-visible-appear justify-center">
            <div
              className="relative flex flex-col w-[80%] justify-center py-5 px-10 rounded-lg z-50 bg-[#3b3054] items-center mt-5">
              <nav>
                <ul>
                  {
                    links.map((link) => (
                      <li key={link.id} className="flex justify-center items-center p-3">
                        <a
                          href="#"
                          className="text-base text-white font-semibold cursor-pointer hover:text-grayish-violet first-letter:uppercase"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
              <hr className="w-full border-[#9e9aa7]" />
              <div className="flex flex-col w-full">
                <Button variant="light" className="text-base p-3 my-1 text-white  hover:text-grayish-violet">
                  Login
                </Button>
                <Button variant="info" className="w-full rounded-full px-6 py-2 my-1">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )
      }
    </React.Fragment>
  );
};

MobileMenu.propTypes = {
  showMenu: PropTypes.bool,
};
export default MobileMenu;
