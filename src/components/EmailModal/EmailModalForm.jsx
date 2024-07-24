import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

export default function EmailModalForm({ setIsModalOpen }) {
  console.log(setIsModalOpen);

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
    /* setIsModalOpen((prevState) => !prevState); */
  };

  return (
    <form className="flex flex-col justify-between gap-2 w-full" onSubmit={ handleSubmit }>
      <Input verifyValue={ verifyName } type="text" value={ userMessage.name } name="name" onChange={ handleChange }>
        Nome
      </Input>
      <Input type="email" verifyValue={ verifyEmail } value={ userMessage.email } name="email" onChange={ handleChange }>
        Email
      </Input>
      <Input isTextArea verifyValue={ verifyMessage } value={ userMessage.message } name="message" onChange={ handleChange }>
        Sua mensagem
      </Input>

      <button
        type="submit"
        className="text-white w-full py-3 rounded-md bg-color-tertiary hover:bg-color-primary mt-4 text-sm font-semibold shadow-custom disabled:bg-[black] disabled:cursor-not-allowed"
        disabled={ !verifyName(userMessage.name) || !verifyEmail(userMessage.email) || !verifyMessage(userMessage.message) }
      >
        Enviar
      </button>
    </form>
  );
}

EmailModalForm.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
