import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    variant,
    children
  } = props;
  const rootStyles = classNames(props?.className, {
    'text-grayish-violet hover:text-very-dark-violet font-bold bg-transparent': variant == 'light',
    'bg-cyan-400 hover:bg-cyan-200 text-white font-bold ': variant == 'info'
  });
  const notAllowed = ['variant', 'children', 'className'];

  const propsCopy = Object.assign({}, props);
  const restProps = Object.keys(propsCopy)
    .filter(key => !notAllowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = propsCopy[key];
      return obj;
    }, {});

  return (
    <button className={rootStyles} {...restProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['info', 'light']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default Button;
