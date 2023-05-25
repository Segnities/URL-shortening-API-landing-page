import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const MobileMenu = (props) => {
  const {
    showMenu,
    links,
  } = props;
  return (
    <>
      {
        showMenu && (
          <div
            className="absolute top-12 md:hidden flex w-full items-center  transition-opacity animate-visible-appear justify-center">
            <div
              className="relative flex flex-col w-[80%] justify-center py-5 px-10 rounded-lg z-50 bg-[#3b3054] items-center mt-5">
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
              <hr className="w-full border-[#9e9aa7]" />
              <div className="flex flex-col w-full">
                <Button type="light" className="text-base p-3 my-1 hover:text-white">
                  Login
                </Button>
                <Button type="info" className="w-full rounded-full px-6 py-2 my-1">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

MobileMenu.propTypes = {
  links: PropTypes.arrayOf({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  showMenu: PropTypes.bool,
};
export default MobileMenu;
