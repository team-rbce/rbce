import React from 'react';
import PropTypes from 'prop-types';

export default function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-blur-sm">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col items-center gap-2 px-10 py-5 w-5/6 max-w-[400px] sm:max-w-[400px] sm:max-h-[520px] md:max-w-[460px] max-h-fit bg-white font-Inter">
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
