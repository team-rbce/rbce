import React, { useState } from 'react';
import './input.css';
import PropTypes from 'prop-types';

export default function Input({ children, onChange, name, value, verifyValue, type = '', isTextArea = false }) {
  const errors = {
    email: 'Email inválido',
    message: 'Precisa de pelo menos 3 palavras',
    name: 'Precisa de 3 caracteres ou mais',
  };

  const isValueValid = verifyValue(value);

  const [isFirstRender, setIsFirstRender] = useState(true);

  const setBorderColor = () => {
    return (isFirstRender || isValueValid) ? 'ring-border-primary' : 'ring-border-invalid focus:outline-border-invalid';
  };

  return (
    <label className="text-sm font-normal relative" htmlFor={ name }>
      <span className="after:content-['*'] after:ml-0.5 after:text-border-invalid block text-xs font-medium text-slate-700 md:text-sm">
        {children}
      </span>
      {isTextArea ? (
        <textarea
          name={ name }
          id={ name }
          className={ `w-full h-[100px] min-h-[100px] max-h-[150px] p-2 mt-1 rounded-md ring-1 ${setBorderColor()} mb-4 outline-1 md:text-base` }
          required
          value={ value }
          onChange={ (e) => {
            onChange(e);
            setIsFirstRender(false);
          } }
        />
      ) : (
        <input
          name={ name }
          id={ name }
          type={ type }
          required
          value={ value }
          onChange={ (e) => {
            onChange(e);
            setIsFirstRender(false);
          } }
          className={ `w-full p-2 mt-1 rounded-md ring-1 ${setBorderColor()} mb-5 outline-1 md:text-base ` }
        />
      )}

      {!isFirstRender && !isValueValid && <span className="absolute bottom-0 left-0 ml-2 text-xs text-border-invalid">{errors[name]}</span>}
    </label>
  );
}

Input.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  verifyValue: PropTypes.func.isRequired,
  isTextArea: PropTypes.bool,
};
