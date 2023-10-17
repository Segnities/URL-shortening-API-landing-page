import React from 'react';
import PropTypes from 'prop-types';

const FormWrapper = (props) => {
  const { children } = props;
  return (
    <div className="relative bottom-24 w-full h-40 flex flex-1 justify-center items-center">
      {children}
    </div>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};
export default FormWrapper;
