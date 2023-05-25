import React from 'react';

const ItemsCenterWrapper = ({ children }) => {
  return (
    <div className="flex items-center">
      {children}
    </div>
  );
};

export default ItemsCenterWrapper;
