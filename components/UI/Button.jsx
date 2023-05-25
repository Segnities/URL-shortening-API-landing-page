import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { type } = props;
  const rootStyles = classNames(props?.className, {
    'text-grayish-violet hover:text-very-dark-violet font-bold bg-transparent': type == 'light',
    'bg-cyan-500 hover:bg-cyan-300 text-white font-bold ': type == 'info'
  });

  return (
    <button className={rootStyles}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['info', 'light']),
  className: PropTypes.string
};

export default Button;
