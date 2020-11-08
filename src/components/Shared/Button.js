import React from 'react';

function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={`${className} bg-purple text-white p-3 rounded-lg w-full`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
