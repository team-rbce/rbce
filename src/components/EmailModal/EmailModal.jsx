/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

export default function EmailModal({ setIsModalOpen }) {
  const initialUserMessage = {
    name: '',
    email: '',
    message: '',
  };

  const [userMessage, setUserMessage] = useState(initialUserMessage);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserMessage((prevUserMessage) => ({
      ...prevUserMessage,
      [name]: value,
    }));
  };

  const MIN_NAME_LENGTH = 3;
  const MIN_MESSAGE_LENGTH = 3;

  const verifyName = (name) => name.length >= MIN_NAME_LENGTH;
  const verifyEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const verifyMessage = (message) => message.trim().split(' ').length >= MIN_MESSAGE_LENGTH;

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserMessage(initialUserMessage);
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-blur-sm">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col items-center gap-2 px-10 py-5 w-5/6 sm:w-fit sm:max-w-[600px] sm:max-h-[520px] max-h-fit bg-white font-Inter">
        <h3 className="mb-4 font-medium h-full">Entre em Contato</h3>
        <form className="flex flex-col justify-between gap-2" onSubmit={ handleSubmit }>
          <Input verifyValue={ verifyName } type="text" value={ userMessage.name } name="name" onChange={ handleChange }>
            Nome
          </Input>
          <Input type="email" verifyValue={ verifyEmail } value={ userMessage.email } name="email" onChange={ handleChange }>
            Email
          </Input>
          <Input isTextArea verifyValue={ verifyMessage } value={ userMessage.message } name="message" onChange={ handleChange }>
            Mensagem
          </Input>

          <button
            type="submit"
            className="text-white w-full py-2 rounded-md bg-[#00923E] hover:bg-[#0a6b33] mt-4 shadow-md text-sm"
          >
            Enviar
          </button>
        </form>
        <button
          aria-label="close modal"
          className="absolute right-4 top-2 font-sans"
          onClick={ () => setIsModalOpen((prevState) => !prevState) }
        >
          X
        </button>
      </div>
    </div>
  );
}

EmailModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
